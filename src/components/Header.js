import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toogleGPTSearchView } from "../utils/GPTSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toogleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between items-center bg-black">
      <img src={LOGO} alt="logo" className="w-44 mx-auto md:mx-0" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGPTSearch && (
            <select
              className="p-2 bg-gray-900 text-white m-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 bg-purple-400 my-2 mx-4 text-white rounded-lg"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch ? "Home Page" : "GPT search"}
          </button>
          <img src={user?.photoURL} alt="user icon" className="w-[50px] hidden md:block" />
          <button className="font-bold text-white ml-4" onClick={handleSignOut}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
