import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const ImgBackground = ({poster_path}) => {
  return (

    <div    
        className=' aspect-video w-screen flex justify-end mx-0 my-0 '
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" >
         <div className='w-full flex justify-end relative'>
            <img className='w-1/2' src={`${IMG_CDN_URL + "/" + poster_path}`} />
            <div className= 'h-full w-1/2 absolute bg-gradient-to-r from-black to-transparant'></div>
        </div>
    </div>

  )
}

export default ImgBackground