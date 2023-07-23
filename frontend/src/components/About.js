import React, { useEffect, useState } from 'react'
import '../scripts/logo'
import yamaGirl from '../images/yamagirl.png';
import yamaClubPhoto from '../images/yamaclubphoto.png';

function About() {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', () => {
      let yamaLogo = document.getElementById('yama-logo');
      onScroll();
      if (offset > 3000) {
        yamaLogo.style.position = 'absolute';
        yamaLogo.style.bottom = '0%';
      } else {
        // yamaLogo.style.transform = 'translateY(-100px)'
        yamaLogo.style.position = 'fixed'
        yamaLogo.style.top = '35%';
      }
    })

    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])


  return (
    <>
    <div id="about-us" className='w-full h-auto flex flex-col justify-evenly items-start relative pb-32'>
        <div id="yama-logo" className='lg:w-[500px] lg:h-[425px] bg-yama bg-[length:500px_500px] bg-center -z-10 fixed transition-all ease duration-200 self-center'></div>
        <section id="first-section" className='z-20 w-full lg:h-auto flex items-center'>
          <div id="intro paragraph" className='w-1/3 h-full lg:my-20 text-[18px] flex flex-col justify-center items-center text-center bg-white px-12'>
            <h2 className='text-[30px] z-20 font-bold mb-8 underline'>About Us</h2>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
          </div>
          <img src={yamaClubPhoto} className='' />
        </section>
        <div id="second paragraph" className='w-full lg:h-[500px] border-2 border-solid bg-white relative flex flex-col justify-evenly items-center'>
          <img src={yamaGirl} className='abolute bottom-0 left-12 lg:w-[200px] h-[300px] z-20 absolute' />
          <h2 className='text-[40px] z-20 font-bold mb-8 underline'>Explore</h2>
          <div className='border-2 border-solid border-black lg:w-4/5 lg:h-1/2'></div>
        </div>
        <div id="third paragraph" className='w-1/4 h-[500px] border-2 border-solid lg:my-20 bg-white lg:mr-44 self-end'></div>
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
        <div className='w-[33.3%] h-full border-2 border-red-400 border-solid'></div>
        <div className='w-[33.3%] h-full border-2 border-red-400 border-solid'></div>
        </section> */}
    </>
  )
}

export default About