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
        <section id="first-section" className='lg:my-0 h-[65vh] z-20 w-full flex items-center border-2 border-r-0 border-l-0'>
          <div id="intro-paragraph" className='w-1/2 h-full text-[20px] flex flex-col justify-between items-center text-center font-medium bg-black opacity-[0.95] text-white overflow-hidden border-r-2 border-solid'>
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
          <AboutSlideShow/>
        </section>
        <section id="membership" className='flex lg:flex-row lg:justify-between flex-col first-section w-full h-[600px] items-center z-20 bg-black opacity-90'>
          <div className='w-1/2 h-full flex justify-center items-center'>
            <img id="membership-card" src={membership} className='w-4/5 rounded-xl mt-16' />
          </div>
          <div id="benefits" className='w-1/2 lg:h-full flex flex-col justify-evenly items-center h-[300px] text-white'>
            <h3 id="access" className='text-[22px] font-bold underline'>Access to:</h3>
            <div id="access-1" className='w-full h-1/3 flex justify-center items-center lg:text-[25px]' >
              <p className='w-2/5 h-full text-center rounded-2xl mx-2 border-2 border-solid flex justify-center items-center'>Discord Server</p>
              <p className='w-2/5 h-full text-center rounded-2xl mx-2 border-2 border-solid flex justify-center items-center'>Events and Showings</p>
            </div>
            <div id="access-2" className='w-full h-1/3 flex justify-center items-center lg:text-[25px]'>
              <p className='w-2/5 h-full text-center rounded-2xl mx-2 flex justify-center items-center border-2 border-solid'>Manga Library</p>
              <p className='w-2/5 h-full text-center  rounded-2xl mx-2 flex justify-center items-center border-2 border-solid'>Anime North Discount</p>
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

export default About