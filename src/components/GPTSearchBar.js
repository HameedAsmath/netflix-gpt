import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'

const GPTSearch = () => {
  const langKey = useSelector(store => store.config.lang)
  const searchText = useRef(null)
  const handleGPTSearchClick = async() => {
    // const gptQuery = "Act as a movie Recommandation system and suggest some movies for the query" + searchText.current.value + "Only give me names of 5 movies, seperated like the example the example result given ahead Example result: three idiots, friends, okok, love today, nanban"
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(gptResults.choices)
  }
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceHolder} ref={searchText}/>
        <button className=' px-4 bg-red-700 text-white rounded-lg col-span-3 m-4 py-2' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
      </form> 
    </div>
  )
}
 
export default GPTSearch