import React from 'react';
import '../styles/home.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import About from '../components/About';
import yamaLogo from '../images/yamaLogo.png'

function Home() {
  return (
    <div className='border-2 border-solid border-black w-full h-[145vh] max-h-auto flex flex-col justify-start items-center'>
        <section id="clubphoto" className='w-full h-[80%] flex lg:flex-row lg:justify-center lg:items-center flex-col justify-center items-center bg-clubphoto bg-cover bg-center relative'>
          <div className='z-20 flex flex-col justify-center items-start lg:h-full border-2 border-solid border-green-500'>
            <p className='yama-welcome lg:text-[105px] md:text-[50px] text-[30px] text-white px-24 font-[600] font-robot text-red-600 outline-2 outline-solid outline-white font-robot'>Yama Anime and</p>
            <p className='yama-welcome lg:text-[105px] md:text-[50px] text-[30px] px-24 font-[600] text-red-600 outline-2 outline-solid outline-white'>Manga Association</p>
            <h2 className='lg:text-[35px] text-[20px] text-white px-24 rounded-xl outline-2 outline-white outline-solid mt-12'>York University 2023</h2>
            <button className='lg:self-start rounded-lg text-[17px] w-[130px] h-[70px] lg:mx-[8%] lg:my-[3%] border-white border-solid border-2 bg-none text-white flex justify-center items-center rounded-xl transition-all ease duration-200 hover:bg-white hover:text-black'>About Us <IoIosArrowRoundForward className='text-[30px]' /></button>
          </div>
          <div className='h-auto z-20 flex justify-center items-center lg:-translate-x-12 lg:-translate-y-20 border-2 border-solid border-blue-400 lg:w-[500px] lg:h-[500px] lg:order-last lg:mb-0 order-first w-[250px] mb-8'>
            <img src={yamaLogo} className='lg:w-[400px] md:w-[400px]'/>
          </div>
        </section>
        <About />
    </div>
  )
}

export default Home