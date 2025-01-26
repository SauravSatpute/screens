import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addMovieDetails } from '../utils/moviesSlice'
import { movieDBToken } from '../utils/constants'

const useMovieDetails = (id) => {  
    const dispatch = useDispatch()
    const getMovieDetails = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${movieDBToken}`
                }
            }
        )
    
        const json = await data.json();
        console.log(json)
        dispatch(addMovieDetails(json))
    
    }
    
    useEffect(()=> {
        getMovieDetails();
    },[])

}

export default useMovieDetails
