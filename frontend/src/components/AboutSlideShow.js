import React from 'react';
import { MdArrowBackIos,  MdArrowForwardIos } from "react-icons/md";
import '../styles/home.css'

function AboutSlideShow() {
  return (
    <>
    <div className='border-2 border-solid border-black w-1/2 h-full relative flex justify-center items-end'>
      <div className='border-2 border-solid border-black w-full h-full'></div>
        <div className='border-2 border-solid border-black w-full h-full'></div>
        <div className='border-2 border-solid border-black w-full h-full'></div>



      <div className='border-2 border-solid border-red-500 w-[200px] h-[50px]'>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </div>
    </div>
    </>
  )
}

export default AboutSlideShow