import React, { useEffect } from 'react'
import { addTrailerVideo } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'
import { movieDBToken } from '../utils/constants'


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${movieDBToken}`
                }
            }
        )
    
        const json = await data.json();
    
        const filterData = json.results.filter((video)=> video.type === "Trailer")
        const trailer = filterData.length? filterData[0]:json.results[0];
        dispatch(addTrailerVideo(trailer))
    
    }
    
    useEffect(()=> {
        getMovieVideos();
    },[])

}

export default useMovieTrailer
