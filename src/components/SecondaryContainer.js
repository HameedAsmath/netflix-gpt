import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div>
      {movies && (
        <div className='bg-black'>
          <div className='mt-0 md:-mt-64 relative z-200 pl-4 md:pl-12'>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
            <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
          </div>
        </div>
      )}
    </div>
  )
}

export default SecondaryContainer