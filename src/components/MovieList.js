import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    if(movies === null)
        return;
    console.log(movies[0].poster_path)
  return (
    <div className=' px-6 py-4 '>
        <h1 className='text-white font-semibold text-2xl '>{title}</h1>
        <div className='prod-desc flex  overflow-x-scroll scrollbar'>
                <div className='flex py-6'>
                    {
                    movies.map((movie) => 
                        
                        <MovieCard key={movie.id} id={movie.id} posterPath={movie.poster_path} original_title={movie.original_title}/>
                    )
                    }
                </div>
        </div>
    </div>
  )
}

export default MovieList