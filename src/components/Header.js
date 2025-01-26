import React,{useEffect} from 'react'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import {  onAuthStateChanged } from "firebase/auth";
import { USER_AVATAR } from '../utils/constants'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store)=> store.user)
  const dispatch = useDispatch();


  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //update the store
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
      
    });


    return (
      () => {
        unsubscribe()
      }
    )
  },[])

  const handleSignOut = () => {
    signOut(auth).then(
      () => {
        //sign out successfully
        // navigate("/")
      }
    ).catch(
      () => {
        // an error happend
        // navigate("/error")
      }
    )
  }

  return (
    <div className='absolute px-8 py-2 z-10  w-full flex justify-between items-center'>
        <h1 className=' text-3xl font-bold drop-shadow-md  rowdies-bold'>SCREENS</h1>
       
          {
            user !== null && (
              <div className='flex bg-gradient-to-l from-black'>
                <img
                  alt='useicon'
                  className='w-12 h-12 p-2'
                  src={USER_AVATAR}
                />
                <button onClick={handleSignOut} className='text-white bg-green-400 my-1 font-bold rounded-md px-3 py-1'>
                  Sign Out
                </button>
              </div>
            )
          }
    </div>

  )
}

export default Header