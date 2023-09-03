import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'

export const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch()
    const getMovieVideo = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US", API_OPTIONS)
      const json = await data.json()
      const filterData = json.results.filter((video) => video.type === "Trailer")
      const trailer = filterData.length ? filterData[0] : json.results[0]
      dispatch(addTrailerVideo(trailer))
    }
    useEffect(() => {
        getMovieVideo()
      }, [])
}
