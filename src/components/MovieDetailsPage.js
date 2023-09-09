import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_OPTIONS, IMG_CDN } from '../utils/constants'
import { Link } from 'react-router-dom'

const MovieDetailsPage = () => {
    const [movieData, setMovieData] = useState()
    const {id} = useParams()
    const fetchMovieData = async() => {
        const res = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', API_OPTIONS)
        const data = await res.json()
        console.log(data.original_country)
        setMovieData(data)
    }
    useEffect(()=>{
        fetchMovieData()
    },[])
    
  return (
    <div className='bg-black p-16'>
        <Link to="/browse"><button className='bg-red-400 py-2 px-6 rounded-md'>Back to Home</button></Link>
        <h1 className='text-5xl text-white py-8'>Movie Details</h1>
        <img src={IMG_CDN+movieData?.backdrop_path} alt='...' className='w-[50%] object-cover rounded-md'/>
        <h1 className='text-2xl text-white mt-8'>Movie Name: <span className='text-red-400'>{movieData?.original_title}</span></h1>
        <h1 className='text-2xl text-white my-2'>Age Restricted-18+ : <span className='text-red-400'>{movieData?.adult ? "Yes" : "No"}</span></h1>
        <h1 className='text-2xl text-white my-2'>Tagline: <span className='text-red-400'>{movieData?.tagline}</span></h1>
        <h1 className='text-2xl text-white my-2'>Run Time: <span className='text-red-400'>{Math.floor(movieData?.runtime/60)} hr {Math.floor(movieData?.runtime%60)} min</span></h1>
        <h1 className='text-2xl text-white my-2'>Overview: <span className='text-red-400'>{movieData?.overview}</span></h1>
        <h1 className='text-2xl text-white my-2'>Original Language: <span className='text-red-400'>{movieData?.original_language}</span></h1>
        <h1 className='text-2xl text-white my-2'>Genere: <span className=''>{movieData?.genres.map((gen,index)=>(<span className='bg-red-400 rounded-md mx-1 p-1 text-base' key={index}>{gen?.name}</span>))}</span></h1>
        <h1 className='text-2xl text-white my-2'>Production Companies: <span className=''>{movieData?.production_companies.map((com,index)=>(<span className='bg-red-400 rounded-md mx-1 p-1 text-base' key={index}>{com?.name}</span>))}</span></h1>
        <h1 className='text-2xl text-white my-2'>Status: <span className='text-red-400'>{movieData?.status}</span></h1>
        <h1 className='text-2xl text-white my-2'>Budget: <span className='text-red-400'>{movieData?.budget}</span></h1>
        <h1 className='text-2xl text-white my-2'>Revenue: <span className='text-red-400'>{movieData?.revenue}</span></h1>

    </div>
  )
}

export default MovieDetailsPage