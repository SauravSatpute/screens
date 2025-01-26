import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const [showTrailer, setShowTrailer] = useState(false);
  const movies = useSelector((store)=> store.movies?.nowPlayingMovies)

  if(movies === null)
    return;

  const randomIntFromInterval = (min, max)=> {  
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const mainMovie = movies[parseInt(randomIntFromInterval(0,19))]
  const { original_title, overview, id,poster_path } = mainMovie;



  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id} poster_path={poster_path} />  
  
    </div>
  )
}

export default MainContainer