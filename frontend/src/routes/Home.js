import React from 'react';
import '../styles/home.css';
import { IoIosArrowRoundForward } from "react-icons/io";

function Home() {
  return (
    <div className='border-2 border-solid border-black w-full h-[165vh] flex flex-col justify-start items-center'>
        <section id="clubphoto" className='w-full h-[80%] flex flex-col justify-start items-start bg-clubphoto bg-cover bg-center relative'>
          <h1 id="yama-welcome" className='lg:text-[110px] text-[30px] text-white px-32 py-2 my-8 z-20 font-[600] mt-60 font-robot'>York Anime Manga Association</h1>
          <h2 className='lg:text-[35px] text-[20px] text-white px-32 rounded-xl z-20'>York University 2023</h2>
          <button className='z-20 lg:self-start rounded-lg text-[17px] w-[140px] h-[70px] lg:mx-[7%] lg:my-[6%] border-white border-solid border-2 bg-none text-white flex justify-center items-center rounded-xl'>About Us <IoIosArrowRoundForward className='text-[30px]' /></button>
        </section>
        <section className='w-full h-1/3 flex justify-around items-center'>
        <div className='border-2 border-red-400 border-solid w-[33.3%] h-full flex flex-col justify-start items-center'>
          <h3 className='text-[25px] py-2'>Follow Our Socials</h3>
            <ul className='text-[22px] h-full w-full flex flex-col justify-evenly items-start px-4'>
              <li><a href='https://discord.com/invite/4xtzBerzXH'>Discord</a></li>
              <li><a href='https://www.instagram.com/yorkuyama/'>Instagram</a></li>
              <li><a href='https://www.tiktok.com/@yorkuyama'>Tiktok</a></li>
              <li><a href='https://www.facebook.com/groups/YorkUYAMA'>Facebook</a></li>
            </ul>
        </div>
        <div className='w-[33.3%] h-full border-2 border-red-400 border-solid'></div>
        <div className='w-[33.3%] h-full border-2 border-red-400 border-solid'></div>
        </section>
    </div>
  )
}

export default Home