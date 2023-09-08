import React, { useRef, useState } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import OpenAI from 'openai';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovieResult } from '../utils/GPTSlice';


const GPTSearch = () => {
  const dispatch = useDispatch()
  const [apiKey, setApiKey] = useState()
  const langKey = useSelector(store => store.config.lang)
  const searchText = useRef(null)
  const searchMovieTMDB = async (movie) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json = await data.json()
    return json.results
  }
  const handleGPTSearchClick = async () => {
    if(!apiKey) return alert("API Key should not be empty")
    console.log("hello")
    try{
      const openai = new OpenAI({
        apiKey: apiKey, 
        dangerouslyAllowBrowser: true
      });
      const gptQuery = "Act as a movie Recommandation system and suggest some movies for the query" + searchText.current.value + "Only give me names of 5 movies, seperated like the example the example result given ahead Example result: three idiots, friends, okok, love today, nanban"
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      if(!gptResults.choices){
        alert("Check the api key")
      }
      console.log(gptResults.choices[0]?.message?.content)
      const gptMovies = gptResults.choices[0]?.message?.content.split(",")
      const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie))
      const tmdbResults = await Promise.all(promiseArray)
      console.log(tmdbResults)
      dispatch(addGPTMovieResult({movieNames: gptMovies,movieResults: tmdbResults}))
    }catch(error){
      alert("incorrect api key")
    }
  }
  return (
    <div className='pt-[35%] md:pt-[10%] flex flex-col items-center'>
      <input type='text' className='p-4 m-16  w-[70%] ' placeholder={lang[langKey].gptAPIPlaceHolder} onChange={(e)=>setApiKey(e.target.value)} value={apiKey}/>
      <div className='flex justify-center flex-1'>
       <form className='w-full  bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceHolder} ref={searchText} />
        <button className=' px-4 bg-red-700 text-white rounded-lg col-span-3 m-4 py-2' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
      </form>
      </div>
    </div>
  )
}


export default GPTSearch