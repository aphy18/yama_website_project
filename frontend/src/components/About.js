import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../scripts/logo';
import '../styles/home.css';
import membership from '../images/membership.png';
import photoOne from '../images/sliderphoto1.jpg';
import photoTwo from '../images/sliderphoto2.jpg';
import photoThree from '../images/sliderphoto3.png';
import yamaContact from '../images/contact.png';
import { IoIosCalendar } from 'react-icons/io';
import { BsFillBagFill, BsArrowRight } from 'react-icons/bs';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiOutlineTeam } from 'react-icons/ai';
import { BiPhotoAlbum } from 'react-icons/bi';
import HomeSlider from './HomeSlider';

function About() {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', () => {
      let yamaLogo = document.getElementById('yama-logo');
      onScroll();
      console.log('offset', offset)
      yamaLogo.style.zIndex = '-1'
      yamaLogo.style.top = '30%';
    })

    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])


  return (
    <>
    <div id="about-us" className='border-2 border-solid border-cyan-500 w-full h-auto flex flex-col justify-evenly items-start relative'>
        <div id="yama-logo" className='lg:w-[500px] lg:h-[425px] bg-yama bg-[length:500px_500px] bg-center fixed transition-all ease duration-200 self-center'></div>
        <section id="first-section" className='border-2 border-solid border-green-500 h-auto z-20 w-full flex flex-col items-center my-4'>
          <div id="intro-paragraph" className='lg:my-8 h-full text-[18px] flex flex-col justify-center items-center text-center bg-white px-2'>
            <h2 className='text-[35px] z-20 font-bold underline mb-8'>About Us</h2>
            <p className='lg:mb-20 mb-8'>Welcome to the YAMA Anime and Manga Association, a vibrant community committed to sharing our love of anime, manga, and beyond Our mission is to create a friendly and inclusive atmosphere where like-minded fans may connect and share their passions. At YAMA, we take pleasure in providing a lively setting for our members through our wide variety of activities and events. Join YAMA today to make new friends and fun memories!</p>
          </div>
          <img id="about-img" src={photoThree} />
        </section>
        <section id="membership" className='first-section w-full h-[600px] flex lg:py-20 lg:flex-row lg:justify-around items-center my-8 z-20'>
          <div className='flex justify-center items-center lg:w-[55%] h-auto border-2 border-solid border-black'>
            <img id="membership-card" src={membership} className='w-[600px] h-[400px]' />
            {/* <BsArrowRight className='lg:text-[100px] font-bold mx-12'/> */}
          </div>
          <div id="benefits" className='lg:w-1/3 lg:h-full flex flex-col justify-evenly items-center'>
            <h3 id="access" className='text-[40px]'>Access to:</h3>
            <div id="access-1" className='w-full h-1/3 flex justify-center items-center' >
              <p className='w-2/5 h-full text-center text-[23px] rounded-2xl mx-2 border-2 border-solid flex justify-center items-center bg-white'>1. Discord Server</p>
              <p className='w-2/5 h-full bg-white text-center text-[23px] rounded-2xl mx-2 border-2 border-solid flex justify-center items-center'>2. Events and Showings</p>
            </div>
            <div id="access-2" className='w-full h-1/3 flex justify-center items-center'>
              <p className='w-2/5 h-full text-center text-[23px] rounded-2xl mx-2 flex justify-center items-center border-2 border-solid bg-white'>3. Manga Library</p>
              <p className='w-2/5 h-full bg-white text-center text-[23px] rounded-2xl mx-2 flex justify-center items-center border-2 border-solid'>4. Anime North Discount</p>
            </div>
          </div>
        </section>
        <div id="second-paragraph" className='w-full relative flex justify-center items-center bg-black/70 text-white self-center border-2 border-solid border-red-300'>
          {/* <img src={yamaGirl} className='abolute bottom-0 -left-2 lg:w-[300px] h-[300px] z-20 absolute scale-[0.8]' /> */}
          <div className='w-full flex h-full lg:text-[25px] text-[20px]'>
          <Link to="/team" className='lg:w-1/5 w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
            <p className='navigation'>Our Team</p>
            <AiOutlineTeam className='text-[50px] ml-4' />
          </Link>
          <Link to="/shop" className='lg:w-1/5 w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
            <p className='navigation'>View Shop</p>
            <BsFillBagFill className='text-[50px] ml-4' />
          </Link>
          <Link to="/events" className='lg:w-1/5 w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
            <p className='navigation'>Events</p>
            <IoIosCalendar className='text-[50px] ml-4' />
          </Link>
          <Link to="/gallery" className='lg:w-1/5 w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
            <p className='navigation'>Photo Gallery</p>
            <BiPhotoAlbum className='text-[50px] ml-4' />
          </Link>
          <a href="https://linktr.ee/yorkuyama" className='lg:w-1/5 w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
          <p className='navigation'>Linktree</p>
          <HiOutlineExternalLink className='text-[50px] ml-4' />
          </a>
          </div>
        </div>
        <div id="third-paragraph" className='w-full lg:h-[673px] flex justify-between items-center z-20'>
          <div id="register-paragraph" className='w-1/2 h-full flex justify-center items-center bg-tabling lg:bg-contain relative'>
            <ul id="register-list" className='w-1/2 h-[400px] z-20 text-[18px] flex flex-col justify-evenly items-start list-disc border-2 border-solid border-white/80 relative font-bold px-8 lg:ml-4'>
              <h3 className='text-[25px] z-20 underline self-center'>Registration</h3>
              <li>Full Year Membership - <span className='text-red-500'>$15</span></li>
              <li>Single Semester Membership - <span className='text-red-500'>$10</span></li>
              <li>Tabling Location: Bear Pit @Central Square</li>
              <li>Registration Updates Made in our Discord Server!</li>
            </ul>
          </div>
          <div id="contact-paragraph" className='w-1/2 h-full flex justify-center items-center relative bg-contact bg-cover bg-black/50'>
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
      {/* <section className='w-full h-1/3 flex justify-around items-center'>
        <div className='border-2 border-red-400 border-solid w-[33.3%] h-full flex flex-col justify-start items-center'>
          <h3 className='text-[25px] py-2'>Follow Our Socials</h3>
            <ul className='text-[22px] h-full w-full flex flex-col justify-evenly items-start px-4'>
              <li><a href='https://discord.com/invite/4xtzBerzXH'>Discord</a></li>
              <li><a href='https://www.instagram.com/yorkuyama/'>Instagram</a></li>
              <li><a href='https://www.tiktok.com/@yorkuyama'>Tiktok</a></li>
              <li><a href='https://www.facebook.com/groups/YorkUYAMA'>Facebook</a></li>
            </ul>
        </div>
        <div className='w-[33.3%] h-full border-2 border-red-400 border-solid flex flex-col'></div>
        <div className='w-[33.3%] h-full border-2 border-red-400 border-solid flex flex-col'></div>
        </section> */}
    </>
  )
}

export default About