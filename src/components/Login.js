import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  
  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev)
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    const emailValue = email?.current?.value;
    const passwordValue = password?.current?.value;
    const nameValue = name?.current?.value;
    let message = "";
    if(isSignInForm) {
      message = checkValidData({name:"DON'T EDIT THIS VALUE, OTHERWISE YOU WILL BE FIRED!!", email:emailValue, password:passwordValue})
    }else {
      message = checkValidData({name:nameValue, email:emailValue, password:passwordValue})
    }
    setErrorMessage(message)
     
    if(message) {
      return;
    }


    if(!isSignInForm) {
      console.log(emailValue)
      console.log(passwordValue)
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // console.log(user)

        updateProfile(auth.currentUser, {
          displayName: name?.current?.value, 
          photoURL: USER_AVATAR
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
          // navigate("/browse")
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " " + errorMessage)
        // ..
      }).finally(()=> {
        email.current.value =""
        password.current.value = ""
        name.current.value = ""
      })
    }
    else 
    {
      signInWithEmailAndPassword(auth,emailValue, passwordValue)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // navigate("/browse")

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorMessage(errorCode +" "+ errorMessage)
      });
    }

  }

  return (
    <div >
        <div>
            <Header/>
        </div>
        <div className=' bg-gradient-login h-screen'>
            <form className='absolute top-32 left-1/3 w-3/12 bg-black text-white p-8 rounded-lg bg-opacity-70'>
              <h1 className='font-bold text-3xl  w-full'>{ isSignInForm? "Sign In" : "Sign Up"}</h1>             
              {
                !isSignInForm && (
                  <div>
                    <input className='p-2 my-4 w-full bg-gray-700 rounded-sm' ref={name} placeholder='Full Name' type='text' />
                  </div>
                )
              }
              <div>
              <input className='p-2 my-4 w-full bg-gray-700 rounded-sm' ref={email} placeholder='Email' type='email' />
              </div>
              <div>
                <input className='p-2 my-4 w-full bg-gray-700 rounded-sm' ref={password} placeholder='Password' type='password' />
              </div>
              { setErrorMessage !== null && <p className='text-red-500 py-2 font-bold'>{errorMessage}</p>}
              <div>
                <button type='submit' className='bg-green-400  px-4 py-2 my-6 w-full rounded-md  [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] font-semibold' onClick={(e)=> handleSubmit(e)}>{isSignInForm? "Sign In": "Sign Up"}</button>
              </div>
              {
                isSignInForm ? 
              <p className='py-4 text-sm'>
                New To <span className='font-bold drop-shadow-md  rowdies-bold'>SCREENS</span> ? <span className='cursor-pointer border-b-2' onClick={toggleSignInForm}>Sign Up Now</span>
              </p>:
              <p className='py-4 text-sm'>
              Already Registered User @ <span className='font-bold drop-shadow-md  rowdies-bold'>SCREENS</span> ? <br/><span className='cursor-pointer border-b-2' onClick={toggleSignInForm}>Sign In Now</span>
            </p>
              }
            </form>
        </div>
    </div>
  )
}

export default Login