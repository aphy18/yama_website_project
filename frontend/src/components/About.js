import React, { useEffect, useState } from 'react'
import '../scripts/logo';
import '../styles/home.css';
import yamaContact from '../images/contact.png';
import { IoIosCalendar } from 'react-icons/io';
import { BsFillBagFill } from 'react-icons/bs';
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
    <div id="about-us" className='w-full h-auto flex flex-col justify-evenly items-start relative'>
        <div id="yama-logo" className='lg:w-[500px] lg:h-[425px] bg-yama bg-[length:500px_500px] bg-center fixed transition-all ease duration-200 self-center'></div>
        <section className='first-section z-20 w-full lg:h-auto flex lg:flex-row items-center my-4'>
          <div id="intro-paragraph" className='h-full lg:my-8 text-[22px] flex flex-col justify-center items-center text-center bg-white px-4'>
            <h2 className='lg:text-[40px] text-[35px] z-20 font-bold underline mb-8'>About Us</h2>
            <p className='lg:mb-20 mb-8'>Welcome to the YAMA Anime and Manga Association, a vibrant community committed to sharing our love of anime, manga, and beyond Our mission is to create a friendly and inclusive atmosphere where like-minded fans may connect and share their passions. At YAMA, we take pleasure in providing a lively setting for our members through our wide variety of activities and events. Join YAMA today to make new friends and fun memories!</p>
          </div>
          <HomeSlider />
        </section>
        <section className='first-section z-20 w-full lg:h-[400px] flex lg:flex-row items-center my-4 border-2 border-solid border-black'>
            <ul className='h-full border-2 border-solid border-black list-disc text-[22px]'>
            <h2 className='lg:text-[40px] text-[35px] z-20 font-bold underline mb-8'>YAMA Membership</h2>
              <li>Access to the YAMA Discord</li>
              <li>Membership Exclusive Events and Showing</li>
              <li>Manga Library</li>
              <li>Anime North Discount</li>
            </ul>
        </section>
        <div id="second paragraph" className='w-full lg:h-[250px] relative flex justify-center items-center bg-black/70 text-white self-center'>
          {/* <img src={yamaGirl} className='abolute bottom-0 -left-2 lg:w-[300px] h-[300px] z-20 absolute scale-[0.8]' /> */}
          <div className='lg:w-full lg:h-full flex text-[25px] border-white'>
          <div className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
            <p>Our Team</p>
            <AiOutlineTeam className='text-[50px] ml-4' />
          </div>
          <div className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
            <p>View Shop</p>
            <BsFillBagFill className='text-[50px] ml-4' />
          </div>
          <div className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
            <p>Upcoming Events</p>
            <IoIosCalendar className='text-[50px] ml-4' />
          </div>
          <div className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
            <p>Photo Gallery</p>
            <BiPhotoAlbum className='text-[50px] ml-4' />
          </div>
          <div className='w-1/5 h-full flex justify-center items-center transition-all ease duration-200 hover:bg-white/70 hover:text-black'>
          <p>Linktree</p>
          <HiOutlineExternalLink className='text-[50px] ml-4' />
          </div>
          </div>
        </div>
        <div id="third paragraph" className='w-full lg:h-[685px] flex justify-between items-center z-20'>
          <div className='w-1/2 h-full flex justify-center items-center bg-tabling bg-contain relative'>
            <ul id="register-paragraph" className='w-1/2 h-[400px] z-20 text-[18px] flex flex-col justify-evenly items-start list-disc border-2 border-solid border-white/80 relative font-bold px-8 ml-4'>
              <h3 className='text-[25px] z-20 underline self-center'>Registration</h3>
              <li>Full Year Membership - <span className='text-red-500'>$15</span></li>
              <li>Single Semester Membership - <span className='text-red-500'>$10</span></li>
              <li>Tabling Location: Bear Pit @Central Square</li>
              <li>Registration Updates Made in our Discord Server!</li>
            </ul>
          </div>
          <div id="contact-paragraph" className='w-1/2 h-full flex justify-center items-center relative bg-contact bg-cover bg-black/50'>
            <ul className='w-3/5 h-4/5 z-20 text-[28px] flex flex-col justify-evenly items-start list-disc relative font-bold px-8 text-white ml-8'>
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