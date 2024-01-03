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
        <section id="first-section" className='xl:h-[65vh] lg:h-[100vh] h-[130vh] xl:flex lg:flex z-20 w-full items-center'>
          <div id="intro-paragraph" className='xl:w-1/2 xl:h-full lg:w-1/2 lg:h-full w-full h-3/5 text-[20px] flex flex-col justify-between items-center text-center font-medium bg-black opacity-[0.95] text-white overflow-hidden'>
            <div className='w-full h-[90px] self-center mt-6'>
              <div id="yama-logo-left" className='w-[5000px] h-full bg-yama bg-[length:100px_100px] bg-center relative translate-x-full'>
              </div>
            </div>
            <p className='leading-[50px] text-[18px] h-1/2 px-16 text-justify font-normal mt-8'>Welcome to the YAMA Anime and Manga Association, a vibrant community committed to sharing our love of anime, manga, and beyond. Our mission is to create a friendly and inclusive atmosphere where like-minded fans may connect and share their passions. At YAMA, we take pleasure in providing a lively setting for our members through our wide variety of activities and events. Join YAMA today to make new friends and fun memories!</p>
            <div className='w-full h-[90px] self-center mb-4'>
              <div id="yama-logo-right" className='w-[5000px] h-full bg-yama bg-[length:100px_100px] bg-center relative translate-x-full'>
              </div>
            </div>
          </div>
          <AboutSlideShow />
        </section>
        <section id="membership" className='flex lg:flex-row lg:justify-between flex-col first-section w-full h-[800px] items-center z-20'>
          <div className='w-full h-full flex flex-col justify-end items-center text-white bg-black opacity-[0.95]'>
            <h1 className='bounce text-[70px] font-bold'>Receive Your Membership Today!</h1>
            <div className='flip-container relative w-1/2 h-[650px]'>
              <div className='flip-card absolute w-full h-full transition-all duration-700 ease-linear hover:rotate-180'>
                <div className='flip-front absolute w-full h-full'>
                  <img src={membership} className='w-full h-full'/>
                </div>
                <div className='flip-back absolute w-full h-full flex flex-col justify-center items-center border-2 border-solid rounded-xl'>
                  <h2 className='text-[50px]'>Benefits</h2>
                  <div className='w-full h-3/4 flex flex-col justify-evenly items-start text-[35px] ml-16'>
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
        <div id="second-paragraph" className='w-full relative flex justify-center items-center bg-black opacity-90 text-white self-center'>
          <div className='w-full flex h-full lg:text-[25px] text-[20px]'>
          <Link to="/team" className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
            <p className='navigation'>Our Team</p>
            <AiOutlineTeam className='text-[50px]' />
          </Link>
          <Link to="/shop" className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
            <p className='navigation'>View Shop</p>
            <BsFillBagFill className='text-[50px]' />
          </Link>
          <Link to="/events" className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
            <p className='navigation'>Events</p>
            <IoIosCalendar className='text-[50px]' />
          </Link>
          <Link to="/gallery" className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
            <p className='navigation'>Photo Gallery</p>
            <BiPhotoAlbum className='text-[50px]' />
          </Link>
          <a href="https://linktr.ee/yorkuyama" className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
          <p className='navigation'>Linktree</p>
          <HiOutlineExternalLink className='text-[50px]' />
          </a>
          </div>
        </div>
        <div id="third-paragraph" className='w-full lg:h-[673px] flex justify-between items-center z-20'>
          <div id="register-paragraph" className='w-1/2 h-full flex justify-center items-center bg-tabling bg-contain relative'>
            <ul id="register-list" className='w-1/2 h-[400px] z-20 text-[18px] flex flex-col justify-evenly items-start list-disc border-2 border-solid border-white/80 relative font-bold px-8 lg:ml-4'>
              <h3 className='text-[25px] z-20 underline self-center'>Registration</h3>
              <li>Full Year Membership - <span className='text-red-500'>$15</span></li>
              <li>Single Semester Membership - <span className='text-red-500'>$10</span></li>
              <li>Tabling Location: Bear Pit @Central Square</li>
              <li>Registration Updates Made in our Discord Server!</li>
            </ul>
          </div>
          <div id="contact-paragraph" className='w-1/2 h-full flex justify-center items-center relative bg-contact bg-cover bg-orange-400'>
            <ul id="contact-list" className='w-3/5 h-4/5 z-20 text-[28px] flex flex-col justify-evenly items-start list-disc relative font-bold px-8 text-white lg:ml-8 m-0'>
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