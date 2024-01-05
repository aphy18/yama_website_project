import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import membership from '../images/membership.png';
import yamagirlcollage from '../images/yamagirlcollage.png'
import { IoIosCalendar } from 'react-icons/io';
import { BsFillBagFill, BsArrowRight } from 'react-icons/bs';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiOutlineTeam } from 'react-icons/ai';
import { BiPhotoAlbum } from 'react-icons/bi';
import HomeSlider from './HomeSlider';
import AboutSlideShow from './AboutSlideShow';

function About() {

  return (
    <>
    <div id="about-us" className='w-full h-auto flex flex-col justify-evenly items-start relative'>
        <section id="first-section" className='min-h-auto xl:flex lg:flex z-20 w-full items-center'>
          <div id="intro-paragraph" className='xl:w-1/2 lg:w-1/2 w-full xl:min-h-[48rem] lg:min-h-[48rem] min-h-[35rem] xl:text-xl lg:text-lg flex flex-col justify-between items-center text-center font-medium bg-black opacity-[0.95] text-white overflow-hidden bg-orange-300 border-solid border-2 border-red-500'>
            <div className='logo-container w-full h-[6rem] self-center mt-6'>
              <div id="yama-logo-left" className='w-[5000px] h-full bg-yama bg-[length:100px_100px] bg-center relative translate-x-full'>
              </div>
            </div>
            <p id='paragraph' className='leading-[50px] h-1/2 xl:px-16 lg:px-16 px-4 text-justify font-normal mt-8 text-black'>Welcome to the YAMA Anime and Manga Association, a vibrant community committed to sharing our love of anime, manga, and beyond. Our mission is to create a friendly and inclusive atmosphere where like-minded fans may connect and share their passions. At YAMA, we take pleasure in providing a lively setting for our members through our wide variety of activities and events. Join YAMA today to make new friends and fun memories!</p>
            <div className='logo-container w-full h-[6rem] self-center mb-4'>
              <div id="yama-logo-right" className='w-[5000px] h-full bg-yama bg-[length:100px_100px] bg-center relative translate-x-full'>
              </div>
            </div>
          </div>
          <AboutSlideShow />
        </section>
        <section id="membership" className='flex lg:flex-row lg:justify-between flex-col first-section w-full items-center z-20'>
          <div className='w-full min-h-[50rem] flex flex-col xl:justify-end lg:justify-end justify-evenly items-center text-white bg-black opacity-[0.95] text-center'>
            <h1 className='w-full bounce xl:text-[70px] md:text-[50px] text-[25px] font-bold xl:mb- lg:mb-8'>Receive Your Membership Today!</h1>
            <div className='flip-container relative xl:w-1/2 lg:w-1/2 w-[90%] min-h-[35rem]'>
              <div className='flip-card absolute w-full h-full transition-all duration-700 ease-linear hover:rotate-180'>
                <div className='flip-front absolute w-full h-full'>
                  <img src={membership} className='w-full h-full'/>
                </div>
                <div className='flip-back absolute w-full h-full flex flex-col justify-center items-center border-2 border-solid rounded-xl'>
                  <h2 className='text-[50px]'>Benefits</h2>
                  <div className='w-full h-3/4 flex flex-col justify-evenly items-start xl:text-[1.75em] lg:text-[1.75em] ml-16'>
                    <span>Discord Server</span>
                    <span>Events and Showings</span>
                    <span>Manga Library</span>
                    <span>Events and Showings</span>
                  </div> 
                </div>
              </div>
            </div>
            </div> 
        </section>
        <div id="second-paragraph" className='w-full relative flex xl:justify-center lg:justify-center justify-end items-center bg-black opacity-90 text-white self-center'>
          <div className='w-full flex xl:min-h-[10rem] lg:min-h-[10rem] min-h-[6rem] lg:text-[25px] text-[20px] justify-center items-center'>
          <Link to="/team" className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:text-orange-400'>
            <p className='navigation'>Our Team</p>
            <AiOutlineTeam className='text-[50px]' />
          </Link>
          <Link to="/shop" className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:text-orange-400'>
            <p className='navigation'>View Shop</p>
            <BsFillBagFill className='text-[50px]' />
          </Link>
          <Link to="/events" className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:text-orange-400'>
            <p className='navigation'>Events</p>
            <IoIosCalendar className='text-[50px]' />
          </Link>
          <Link to="/gallery" className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:text-orange-400'>
            <p className='navigation'>Photo Gallery</p>
            <BiPhotoAlbum className='text-[50px]' />
          </Link>
          <a href="https://linktr.ee/yorkuyama" className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:text-orange-400'>
          <p className='navigation'>Linktree</p>
          <HiOutlineExternalLink className='text-[50px]' />
          </a>
          </div>
        </div>
        <div id="third-paragraph" className='w-full xl:h-[700px] lg:h-[700px] h-[1000px] xl:flex lg:flex xl:justify-between lg:justify-between justify-center items-center z-20'>
          <div id="register-paragraph" className='xl:w-1/2 lg:w-1/2 w-full xl:h-full lg:h-full h-1/2 flex justify-center items-center bg-tabling bg-cover relative'>
            <ul id="register-list" className='xl:w-1/2 lg:w-1/2 w-full xl:h-[400px] lg:h-[400px] h-full z-20 text-[18px] flex flex-col justify-evenly items-start list-disc relative font-bold px-8 lg:ml-4'>
              <h3 className='text-[25px] z-20 underline self-center'>Registration</h3>
              <li>Full Year Membership - <span className='text-red-500'>$15</span></li>
              <li>Single Semester Membership - <span className='text-red-500'>$10</span></li>
              <li>Tabling Location: Bear Pit @Central Square</li>
              <li>Registration Updates Made in our Discord Server!</li>
            </ul>
          </div>
          <div id="contact-paragraph" className='xl:w-1/2 lg:w-1/2 w-full xl:h-full lg:h-full h-1/2 flex justify-center items-center relative bg-contact bg-cover bg-orange-300'>
            <ul id="contact-list" className='xl:w-4/5 lg:w-4/5 w-full h-4/5 z-20 xl:text-[28px] lg:text-[28px] text-[20px] flex flex-col justify-evenly items-start list-disc relative font-bold px-8 text-white lg:ml-8 m-0'>
              <h3 className='text-[35px] z-20 underline self-center'>Inquiries</h3>
              <li>Email yorkuyamako@gmail.com to address any questions</li>
              <li>(Phone Number)</li>
              <li>Club Room #113 Bethune College, Keele Campus</li>
              <li>Showing Room #320 Bethune</li>
            </ul>
          </div>
        </div>
    </div>  
    </>
  )
}

export default About;