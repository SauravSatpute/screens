import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {  addTopRatedMovies, addUpcomingMovies } from '../utils/moviesSlice'
import { movieDBToken } from '../utils/constants'

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    
    const upcomingMovies = async () => {
        const data = await fetch( 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2', 
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${movieDBToken}`
            }
          }
        )
    
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
      } 
    
    
      useEffect(()=> {
        upcomingMovies();
      },[])
}

export default useUpcomingMovies
