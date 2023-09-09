import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { Link } from 'react-router-dom'

const MovieCard = ({posterPath, id}) => {
  if(!posterPath) return null
  const handleMovieDetail = () => {
      
  }
  return (
    <Link to={"/movie/"+id}>
      <div className='w-48' onClick={handleMovieDetail}>
          <img src={IMG_CDN + posterPath} alt='...'/>
      </div>
    </Link>
  )
}

export default MovieCard