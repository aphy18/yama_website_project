import React from 'react';
import '../styles/home.css';

function Home() {
  return (
    <div className='border-2 border-solid border-black w-full h-[145vh] flex flex-col justify-start items-center'>
        <section id="clubphoto" className='w-full h-[80%] flex flex-col justify-start items-center bg-clubphoto bg-cover bg-center relative'>
          <h1 className='lg:text-[120px] text-[30px] text-white px-40 py-2 rounded-xl my-8 z-20 border-2 border-solid border-white rounded-xl font-[600] mt-20 bg-gray-500/40'>Welcome to Y.A.M.A.</h1>
          <h2 className='lg:text-[35px] text-[20px] text-white px-20 rounded-xl z-20'>York University 2023</h2>
        </section>
        <section className='border-2 border-solid border-blue-400 w-full h-1/3 flex justify-evenly'>
        <div className='border-2 border-solid border-black w-[33.3%] h-full flex flex-col justify-start items-center'>
          <h3 className='text-[25px] py-2'>Follow Our Socials</h3>
            <ul className='text-[22px] h-full w-full flex flex-col justify-evenly items-start px-4'>
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