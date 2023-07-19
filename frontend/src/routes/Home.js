import React from 'react';
import '../styles/home.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import About from '../components/About';

function Home() {
  return (
    <div className='border-2 border-solid border-black w-full h-[145vh] max-h-auto flex flex-col justify-start items-center'>
        <section id="clubphoto" className='w-full h-[80%] flex flex-col justify-start items-start bg-clubphoto bg-cover bg-center relative'>
          <p className='yama-welcome lg:text-[110px] text-[30px] text-white px-32 z-20 font-[600] mt-60 font-robot text-red-500 outline-2 outline-solid outline-white font-robot'>York Anime and</p>
          <p className='yama-welcome lg:text-[110px] text-[30px] px-32 z-20 font-[600] text-red-500 outline-2 outline-solid outline-white'>Manga Association</p>
          <h2 className='lg:text-[35px] text-[20px] text-white px-32 rounded-xl z-20 outline-2 outline-white outline-solid mt-12'>York University 2023</h2>
          <button className='z-20 lg:self-start rounded-lg text-[17px] w-[140px] h-[70px] lg:mx-[7%] lg:my-[3%] border-white border-solid border-2 bg-none text-white flex justify-center items-center rounded-xl'>About Us <IoIosArrowRoundForward className='text-[30px]' /></button>
        </section>
        <About />
    </div>
  )
}

export default Home