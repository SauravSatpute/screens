import React, { useEffect, useState } from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const MovieCard = ({posterPath, original_title, id}) => {
  const [showMovieIcon, setShowMovieIcon] = useState(false);

  const navigate = useNavigate();

  return (
    // <div className='relative'>
      <div className='w-44 mx-2 my-1 cursor-pointer  hover:-translate-y-6 transition-all relative' 
        onMouseEnter={()=> setShowMovieIcon(!showMovieIcon)} 
        onMouseLeave={()=> setShowMovieIcon(!showMovieIcon)}>
          <Link to={`/movie/${id}`} >
          <img
          className='rounded-lg z-50 cursor-pointer'
              alt='movie card'
              src={IMG_CDN_URL + posterPath}
          />
          
          {
          showMovieIcon && 
            <div className=' w-full h-full top-0 right-0 bg-gradient-to-r from-black via-transparent to-black fixed'>
              <button className=' opacity-50 text-white text-right cursor-pointer m-1 ' onClick={()=> {
                navigate(`/movie/${id}`)
              }}>
                <IoMdInformationCircleOutline className='text-2xl'/>
              </button>
            </div>
          }
          <p className='text-white text-center'>{original_title}</p>
          </Link>
      </div>
  )
}

export default MovieCard