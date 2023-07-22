import React from 'react';
import '../styles/home.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import About from '../components/About';
import yamaLogo from '../images/yamaLogo.png'

function Home() {
  return (
    <div className='border-2 border-solid border-black w-full h-[300vh] max-h-auto flex flex-col justify-start items-center'>
        <section id="clubphoto" className='w-full h-2/5 flex lg:flex-row lg:justify-center lg:items-center flex-col justify-center items-center bg-clubphoto bg-cover bg-center relative'>
          <div className='z-20 flex flex-col lg:justify-center lg:items-start lg:w-auto lg:h-full h-[50%] w-full justify-start items-center'>
            <p className='yama-welcome lg:text-[105px] md:text-[70px] text-[45px] text-white lg:px-24 font-[600] font-robot text-red-600'>Yama Anime and</p>
            <p className='yama-welcome lg:text-[105px] md:text-[70px] text-[45px] lg:px-24 font-[600] text-red-600'>Manga Association</p>
            <h2 className='lg:text-[35px] md:text-[40px] text-[20px] text-white lg:px-24 rounded-xl mt-12'>York University 2023</h2>
            <a href="#about-us" className='transition-all duration-300 ease'><button className='lg:self-start rounded-lg lg:text-[17px] text-[16px] lg:w-[130px] md:h-[70px] w-[120px] h-[70px] lg:mx-[100px] lg:my-[10%] my-[20%] border-white border-solid border-2 bg-none text-white flex justify-center items-center rounded-xl transition-all ease duration-200 hover:bg-white hover:text-black my-[5%]'>Explore <IoIosArrowRoundForward className='lg:text-[30px] text-[20px]' /></button></a>
          </div>
          <div className='h-auto z-20 flex justify-center items-center lg:-translate-x-12 lg:-translate-y-20 lg:w-[500px] lg:h-[500px] lg:order-last lg:mb-0 order-first w-[250px] mb-8'>
            <img src={yamaLogo} className='lg:w-[400px] md:w-[400px]'/>
          </div>
        </section>
        <About />
    </div>
  )
}

export default Home