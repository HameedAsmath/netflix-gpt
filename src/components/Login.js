import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch()
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState()
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const toogleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, email, photoURL, displayName} = auth.currentUser
                        dispatch(addUser(uid, email, displayName, photoURL))
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + errorMessage)
                });

        } else {
            //SignIn logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + errorMessage)
                });
        }
    }
    return (
        <div className='relative'>
            <Header />
            <div className='absolute'>
                <img src={BG_URL} alt='Logo' className='h-screen w-screen object-cover'/>
            </div>
            <form className='p-12 bg-black absolute w-full md:w-3/12 top-60 left-[50%] translate-x-[-50%] bg-opacity-80 text-white' onSubmit={(e) => e.preventDefault()}>
                <h1 className='font-bold text-3xl my-4 text-white '>{isSignInForm ? "Sign In" : "Sign up"}</h1>
                <input type='email' placeholder='Email Address' className='p-4 my-4 w-full rounded-md border-0 outline-0 bg-gray-700' ref={email}></input>
                {!isSignInForm && <input type='text' placeholder='Name' className='p-4 my-4 w-full rounded-md outline-0 border-0 bg-gray-700' ref={name}></input>}
                <input type='password' placeholder='Password' className='p-4 my-4 w-full  rounded-md outline-0 border-0 bg-gray-700' ref={password}></input>
                <p className='text-orange-500 font-bold text-sm'>{errorMessage}</p>
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign up"}</button>
                <p className='py-4 cursor-pointer text-white' onClick={toogleSignInForm}>{isSignInForm ? "New to Netflix? Signup Now" : "Already registered? Sign In now!"}</p>
            </form>
        </div>
    )
}

export default Login