import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {  addTopRatedMovies } from '../utils/moviesSlice'
import { movieDBToken } from '../utils/constants'

const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const topRatedMovies = async () => {
        const data = await fetch( 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=5', 
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${movieDBToken}`
            }
          }
        )
    
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
      } 
    
    
      useEffect(()=> {
        topRatedMovies();
      },[])
}

export default useTopRatedMovies
