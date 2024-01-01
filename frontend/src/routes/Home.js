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

  // useEffect(() => {
  //   chrome.runtime.onMessage.addListener(function(rq, sender, sendResponse) {
  //     // setTimeout to simulate any callback (even from storage.sync)
  //     setTimeout(function() {
  //         sendResponse({status: true});
  //     }, 1);
  //     return true;  // Uncomment this line to fix the error
  // });
  // }, [])
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
            <p className='yama-welcome lg:text-[60px] text-[45px] text-white font-[600] font-robot text-red-600'>YAMA Anime and</p>
            <p className='yama-welcome lg:text-[60px] text-[45px] font-[600] text-red-600'>Manga Association</p>
            <h2 className='lg:text-[35px] text-[20px] text-white rounded-xl mt-12'>York University 2024</h2>
            <button id="explore-button" onClick={() => scrollIntoView()} className='lg:self-start rounded-lg lg:text-[17px] text-[16px] lg:w-[130px] md:h-[70px] w-[120px] h-[70px] lg:mx-[100px] lg:my-[10%] my-[20%] border-white border-solid border-2 bg-none text-white flex justify-center items-center rounded-xl transition-all ease duration-200 hover:bg-white hover:text-black my-[5%]'>Explore <IoIosArrowRoundForward className='lg:text-[30px] text-[20px]' /></button>
          </div>
          <div id="york-logo-container" className='w-[250px] h-full z-20 flex justify-start items-end '>
            <img id="york-logo" src={yamaGirl} loading="lazy"/>
          </div>
        </section>
        <About />
    </div>
  )
}

export default Home