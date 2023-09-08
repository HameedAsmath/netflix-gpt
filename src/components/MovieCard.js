import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  const handleMovieDetail = () => {
      
  }
  return (
    <div className='w-48' onClick={handleMovieDetail}>
        <img src={IMG_CDN + posterPath} alt='...'/>
    </div>
  )
}

export default MovieCard