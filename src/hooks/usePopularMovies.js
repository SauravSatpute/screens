import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'
import { movieDBToken } from '../utils/constants'

const usePopularMovies = () => {
    const dispatch = useDispatch()

    const popularMovies = async () => {
        const data = await fetch( 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=3', 
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${movieDBToken}`
            }
          }
        )
    
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
      } 
    
    
      useEffect(()=> {
        popularMovies();
      },[])
}

export default usePopularMovies
