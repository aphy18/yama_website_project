import React, { useEffect } from 'react';
import '../styles/home.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import About from '../components/About';
import yamaLogo from '../images/yamaLogo.png';
import yorkLogo from '../images/yorklogo.png';
import yamaGirl from '../images/yamagirl.png';
// const LazyYamaGirl = React.lazy(() => import('./LazyImage'));

// border around text - approved
// water mark yama logo
// button hover in navigation bar, shadow
// instagram updating events

function Home() {
  
  const scrollIntoView = () => {
    const scrollButton = document.getElementById("explore-button");
    const section2 = document.getElementById("second-paragraph");
    scrollButton.addEventListener("click", function() {
      section2.scrollIntoView({
      behavior: "smooth"
    });
  });   
  }


  return (
    <div id="home-container" className='h-auto flex flex-col justify-start items-center'>
        <section id="clubphoto" className='w-full flex lg:flex-row lg:justify-start lg:items-center h-1/4 flex-col justify-center items-center bg-clubphoto bg-cover bg-center relative'>
          <div id="yama-welcome-container" className='z-20 flex flex-col lg:px-20 lg:justify-center lg:items-start lg:w-auto lg:h-full h-[70%] w-full justify-start items-center lg:mt-8 mt-20 mr-0'>
            <p className='yama-welcome text-white font-[600] font-robot text-orange-600 xl:text-[2.5rem] lg:text-[2.5rem] text-[1rem]'>YAMA Anime and</p>
            <p className='yama-welcome font-[600] text-orange-600 xl:text-[2.5rem] lg:text-[2.5rem] text-[1rem]'>Manga Association</p>
            <h2 className='york-2024 text-white rounded-xl mt-12'>York University 2024</h2>
            <button id="explore-button" onClick={() => scrollIntoView()} className='lg:self-start rounded-lg border-white border-solid border-2 bg-none text-white flex justify-center items-center rounded-xl transition-all ease duration-200 hover:bg-white hover:text-black my-[5%]'>Explore <IoIosArrowRoundForward id='explore-button-arrow' /></button>
          </div>
          <div id="york-logo-container" className='w-[250px] h-full z-20 flex justify-start items-end '>
            <img id="york-logo" src={yamaGirl} loading="lazy"/>
          </div>
        </section>
        <About />
    </div>
  )
}

export default Home;