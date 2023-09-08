import React from 'react'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import GPTSearchBar from "./GPTSearchBar"
import { BG_URL } from '../utils/constants'

const GPTSearchPage = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img src={BG_URL} alt='...' className='h-screen w-screen object-cover' />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  )
}

export default GPTSearchPage