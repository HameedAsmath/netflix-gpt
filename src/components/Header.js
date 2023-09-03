import React, { useEffect } from 'react'
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants'


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
    return ()=> unsubscribe()
  }, [])
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center'>
      <img src={LOGO} alt='logo' className='w-44' />
      {user && <div className='flex p-2'>
        <img src={user?.photoURL} alt='user icon' className='w-[50px]' />
        <button className='font-bold text-white ml-4' onClick={handleSignOut}>Signout</button>
      </div>}
    </div>
  )
}

export default Header