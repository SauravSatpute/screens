import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies?.nowPlayingMovies)
  const popular = useSelector((store)=> store.movies?.popularMovies)
  const topRated = useSelector((store)=> store.movies?.topRatedMovies)
  const upcoming = useSelector((store) => store.movies?.upcomingMovies)
  return (
    <div className=' relative -mt-52 bg-gradient-to-t from-black via-black to-transparent z-20'>
        <MovieList title={"NOW PLAYING"} movies={movies}/>
        <MovieList title={"TOP RATED"} movies={topRated}/>
        <MovieList title={"POPULAR"} movies={popular}/>
        <MovieList title={"Upcoming Movies"} movies={upcoming}/>
    </div>
  )
}

export default SecondaryContainer