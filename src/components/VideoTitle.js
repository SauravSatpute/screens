import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='text-white pt-[15%] px-12 absolute bg-gradient-to-r from-black via-transparent to-black aspect-video w-full'>
        <h1 className='text-3xl font-bold [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] w-2/5'>{title}</h1>
        <p className='py-6 text-lg [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] w-2/5'>{overview.length > 150 ? overview.substring(0,149)+"..." : overview}</p>
        <div>
            <button className='py-3 px-10 text-black bg-white text-lg rounded-lg mr-2'>
              <div className='flex items-center gap-4'>
                <CiPlay1 /> Play
                </div>
            </button>
            <button className='py-3 px-10 text-white bg-gray-700 text-lg rounded-lg ' >
              <Link to="/movie/123">
              <div className='flex items-center gap-4' >
              <IoMdInformationCircleOutline /> 
                More Info
              </div>
              </Link>
            </button>
        </div>
    </div>
  )
}

export default VideoTitle