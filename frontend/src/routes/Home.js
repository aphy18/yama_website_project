import React from 'react';
import '../styles/home.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import About from '../components/About';
import yamaLogo from '../images/yamaLogo.png';
import yorkLogo from '../images/yorklogo.png';
import yamaGirl from '../images/yamagirl.png';

function Home() {
  return (
    <div className='w-full h-[270vh] max-h-auto flex flex-col justify-start items-center'>
        <section id="clubphoto" className='w-full lg:h-2/5 flex lg:flex-row lg:justify-center lg:items-center h-1/4 flex-col justify-center items-center bg-clubphoto bg-cover bg-center relative'>
          <div id="yama-welcome-container" className='z-20 flex flex-col lg:justify-center lg:items-start lg:w-auto lg:h-full lg:mr-20 lg:h-[50%] h-[70%] lg:mt-0 w-full justify-start items-center mt-20 mr-0'>
            <p className='yama-welcome lg:text-[105px] lg:px-20 md:text-[70px] text-[45px] text-white font-[600] font-robot text-red-600'>YAMA Anime and</p>
            <p className='yama-welcome lg:text-[105px] md:text-[70px] text-[45px] lg:px-20 font-[600] text-red-600'>Manga Association</p>
            <h2 className='lg:text-[35px] md:text-[40px] text-[20px] text-white lg:px-24 rounded-xl mt-12'>York University 2023</h2>
            <a href="#about-us" className='transition-all duration-300 ease'><button className='lg:self-start rounded-lg lg:text-[17px] text-[16px] lg:w-[130px] md:h-[70px] w-[120px] h-[70px] lg:mx-[100px] lg:my-[10%] my-[20%] border-white border-solid border-2 bg-none text-white flex justify-center items-center rounded-xl transition-all ease duration-200 hover:bg-white hover:text-black my-[5%]'>Explore <IoIosArrowRoundForward className='lg:text-[30px] text-[20px]' /></button></a>
          </div>
          <div className='h-auto z-20 flex justify-start items-end lg:translate-x-8 lg:w-[500px] lg:h-1/2 lg:order-last lg:scale-[2] w-[250px] mb-0'>
            <img id="york-logo" src={yamaGirl} className='lg:w-[500px] md:w-[400px]'/>
          </div>
        </section>
        <About />
    </div>
  )
}

export default Home