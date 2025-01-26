import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'
import { useSelector } from 'react-redux';
import Header from './Header';
import { IMG_CDN_URL } from '../utils/constants';
import VideoBackground from './VideoBackground';

const MovieDetails = () => {
    const param = useParams()
    const id = param?.id;
    useMovieDetails(id);
    const movieDetails = useSelector((store) => store.movies?.movieDetails)

    if(movieDetails === null)
        return;

    const movie = {
        title: 'Inception',
        releaseDate: 'July 16, 2010',
        rating: 'PG-13',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
        genres: ['Action', 'Sci-Fi', 'Thriller'],
        imageUrl: 'https://image.tmdb.org/t/p/w500/8WUVHemHFyfVIPJcNKP6aRC3nDq.jpg',
      };
    return (
    <div className='bg-transparent absolute w-screen '> 
        <div className='absolute w-[90%] mx-0 my-0 right-0 top-0 h-screen'>
            <VideoBackground movieId={movieDetails.id} poster_path={movieDetails.poster_path}/>
        </div>
        <div className='w-1/2  mx-auto text-white absolute ' >
            <div className="h-screen flex flex-col lg:flex-col bg-transparent bg-opacity-5 text-white p-6 bg-gradient-to-r from-black via-black to-transparent">
            <div className="flex-none ">
                <img src={IMG_CDN_URL + movieDetails.backdrop_path} alt={movie.title} className=" h-auto rounded-md shadow-lg" />
            </div>
            <div className="flex-grow ml-6  ">
                <h1 className="text-3xl font-bold">{movieDetails?.original_title} </h1>
                <p className="mt-2 text-gray-400">{movieDetails.release_date} | {movie.rating} | 
                    <span className="bg-green-700 text-white text-xs rounded-full px-2 py-1">
                        {movieDetails.status}
                    </span>
                </p>
                <div className="mt-4">
                    <h2 className="text-lg font-semibold">Genres:</h2>
                    <ul className="flex space-x-2">

                        {movieDetails?.genres.map((genre) => (
                        <li key={genre?.id} className="bg-gray-700 text-xs rounded-full px-2 py-1">
                            {genre?.name}
                        </li> 
                        ))}
                </ul>
                </div>
                <p className="mt-4 text-gray-300">{movieDetails.overview}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails