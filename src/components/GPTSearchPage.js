import React from 'react'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import GPTSearchBar from "./GPTSearchBar"
import { BG_URL } from '../utils/constants'

const GPTSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BG_URL} alt='...'/>
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearchPage