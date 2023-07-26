import React, { useEffect, useState } from 'react'
import '../scripts/logo';
import '../styles/home.css';
import yamaGirl from '../images/yamagirl.png';
import { IoIosCalendar } from 'react-icons/io';
import { BsFillBagFill } from 'react-icons/bs';
import { HiOutlineExternalLink } from 'react-icons/hi';
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
    <div id="about-us" className='w-full h-auto flex flex-col justify-evenly items-start relative pb-32'>
        <div id="yama-logo" className='lg:w-[500px] lg:h-[425px] bg-yama bg-[length:500px_500px] bg-center fixed transition-all ease duration-200 self-center'></div>
        <section id="first-section" className='z-20 w-full lg:h-auto flex lg:flex-row items-center my-4'>
          <div id="intro-paragraph" className='lg:w-[600px] h-full lg:my-20 text-[18px] flex flex-col justify-center items-center text-center bg-white px-12'>
            <h2 className='text-[40px] z-20 font-bold mb-8 underline'>About Us</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
          </div>
          <HomeSlider />
        </section>
        <div id="second paragraph" className='w-full lg:h-[325px] relative flex flex-col justify-center items-center bg-black/70 text-white self-center'>
          {/* <img src={yamaGirl} className='abolute bottom-0 -left-2 lg:w-[300px] h-[300px] z-20 absolute scale-[0.8]' /> */}
          <h2 className='text-[40px] z-20 font-bold mb-8 underline'>Explore</h2>
          <div className='lg:w-[85%] lg:h-3/5 flex text-[34px] border-2 border-solid border-black mb-4'>
          <div className='w-[35%] h-full flex justify-center items-center border-2 border-solid border-red-300'>
            <p>View Shop</p>
            <BsFillBagFill className='text-[50px] ml-4' />
          </div>
          <div className='w-[35%] h-full flex justify-center items-center'>
            <p>Upcoming Events</p>
            <IoIosCalendar className='text-[50px] ml-4' />
          </div>
          <div className='w-[35%] h-full flex justify-center items-center'>
          <p>Join Our Community</p>
          <HiOutlineExternalLink className='text-[50px] ml-4' />
          </div>
          </div>
        </div>
        <div id="third paragraph" className='w-full lg:h-[700px] flex justify-around items-center z-20'>
          <div className='border-2 border-solid border-blue-400 w-1/4 h-[500px] flex flex-col justify-evenly items-center'>
            <h2 className='text-[35px] z-20 font-bold mb-8 underline'>Registration</h2>
            <ul className='border-2 border-blue-500 border-solid w-full h-[400px]'>
              <li>asasss</li>
              <li>asasaa</li>
              <li>dsdsdsd</li>
            </ul>
          </div>
          <div className='border-2 border-solid border-blue-400 w-1/4 h-[500px] flex flex-col justify-evenly items-center'>
            <h2 className='text-[35px] z-20 font-bold mb-8 underline'>Inquiries</h2>
            <ul className='border-2 border-blue-500 border-solid w-full h-[400px]'>
              <li>asasss</li>
              <li>asasaa</li>
              <li>dsdsdsd</li>
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