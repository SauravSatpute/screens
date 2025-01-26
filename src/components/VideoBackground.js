import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
import ImgBackground from './ImgBackground';


const VideoBackground = ({movieId, poster_path}) => {
  console.log(movieId)
  useMovieTrailer(movieId);
  const [showTrailer, setShowTrailer] = useState(false);
  const trailerVideo = useSelector((store)=> store.movies?.trailerVideo)

  useEffect(()=> {
    setTimeout(()=> {
      setShowTrailer(true)
    },2000)
  },[])

 
  return (
    <div>
      {
        showTrailer ? 
        <iframe 
            className=' aspect-video w-[100%]'
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
          >
        </iframe>:
        <ImgBackground poster_path={poster_path}/>
      }
    </div>
  )
}

export default VideoBackground