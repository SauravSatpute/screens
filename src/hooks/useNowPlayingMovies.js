
import React,{ useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import { movieDBToken } from '../utils/constants'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const nowPlayingMovies = async () => {
        const data = await fetch( 'https://api.themoviedb.org/3/movie/now_playing?', 
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${movieDBToken}`
            }
          }
        )
    
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
      } 
    
    
      useEffect(()=> {
        nowPlayingMovies();
      },[])
    
}

export default useNowPlayingMovies
