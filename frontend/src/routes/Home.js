import React from 'react'

function Home() {
  return (
    <div className='border-2 border-solid border-black w-full h-[100vh] flex flex-col justify-start items-center'>
        <section className='border-2 border-solid border-red-500 w-full h-[70%] flex flex-col justify-center items-center'>
          <h2 className='lg:text-[25px] text-[20px] bg-black text-white px-20 py-2 rounded-xl'>York University 2023 - 2024</h2>
          <h1 className='lg:text-[60px] text-[40px] bg-black text-white px-40 py-6 rounded-xl my-20'>Welcome to Y.A.M.A.</h1>
        </section>
        <section className='border-2 border-solid border-blue-400 w-full h-1/3 flex justify-evenly'>
        <div className='border-2 border-solid border-black w-[33.3%] h-full flex flex-col justify-start items-center'>
          <h3 className='text-[25px]'>Social Media:</h3>
            <ul className='text-[22px] border-2 border-solid border-green-300 h-full w-full flex flex-col justify-evenly items-start'>
              <li><a href='https://discord.com/invite/4xtzBerzXH'>Discord</a></li>
              <li><a href='https://www.instagram.com/yorkuyama/'>Instagram</a></li>
              <li><a href='https://www.tiktok.com/@yorkuyama'>Tiktok</a></li>
              <li><a href='https://www.facebook.com/groups/YorkUYAMA'>Facebook</a></li>
            </ul>
        </div>
        <div className='border-2 border-solid border-black w-[33.3%] h-full'></div>
        <div className='border-2 border-solid border-black w-[33.3%] h-full'></div>
        </section>
    </div>
  )
}

export default Home