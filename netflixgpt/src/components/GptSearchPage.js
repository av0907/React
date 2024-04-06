import React from 'react'
import { LOGIN_PAGE_BG_IMAGE } from '../utils/constants'
import { languageConstants } from '../utils/languageConstants'
import {useSelector} from 'react-redux'

const GptSearchPage = () => {
    const choosenLanguage  = useSelector(store=> store.config.lang)
  return (
    <div className="">
      <img src={LOGIN_PAGE_BG_IMAGE} alt="LOGIN_PAGE_PG_IMG" className='absolute h-screen w-screen -z-20 ' />
      <form className='relative top-20 w-5/5 text-center'>
        <input type="text" placeholder={languageConstants[choosenLanguage].gptSearchBarPlaceHolder} className='p-4 w-2/5 rounded-3xl shadow-2xl'/>
        <button className='p-4 m-2 w-1/12 bg-red-600 text-white font-bold rounded-3xl shadow-2xl'>{languageConstants[choosenLanguage].search}</button>
      </form>
    </div>
  )
}

export default GptSearchPage
