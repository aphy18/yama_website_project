import React, { useEffect, useState } from 'react'

function Team() {

  window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
  })

  return (
    <>
    <div className='w-full h-auto flex justify-end relative'>
      <div className='flex flex-col justify-center items-center w-1/2 h-full bg-white-300 border-2 border-solid border-blue-400 fixed top-0 left-0'>
        <h1>Y.A.M.A. Executives 2023-2024</h1>
        <section className='border-2 border-solid border-red-500 w-[90%] h-1/2 flex justify-between items-center relative'>
          <div className='w-[300px] h-full border-2 border-solid border-red-500 absolute -left-1/2'>
            <p className='description-right z-30'></p>
            <p className='description-right z-20'></p>
            <p className='description-right z-10'></p>
          </div>
          <div className='w-[300px] h-full border-2 border-solid border-red-500 absolute -right-1/2'></div>
        </section>
      </div>
      <div className='w-1/2 h-[420vh] border-2 border-solid border-red-300'>
        <p>Meet the Executive Team of Yama 2023 - 2024</p>
        <div id="box-1" className='w-full h-[60vh]'></div>
        <div id="box-2" className='border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-3"className='border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-4" className='border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-5" className='border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-6" className='border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-7" className='border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
      </div>
    </div>
    </>
  )
}

export default Team