import React, { useEffect, useState } from 'react'
import '../scripts/logo'

function About() {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', () => {
      let yorkLogo = document.getElementById('york-logo');
      onScroll();
      if (offset > 1500) {
        yorkLogo.style.position = 'absolute';
        yorkLogo.style.top = '45%';
      } else {
        // yorkLogo.style.transform = 'translateY(-100px)'
        yorkLogo.style.position = 'fixed'
        yorkLogo.style.top = '45%';
      }
    })

    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])


  return (
    <>
    <div id="about-us" className='border-2 border-solid border-green-400 w-full h-auto flex flex-col justify-evenly items-center relative lg:pb-[300px]'>
        <div id="york-logo" className='lg:w-[500px] lg:h-[425px] bg-york bg-[length:500px_500px] bg-center -z-10 fixed transition-all ease duration-200'></div>
        <div id="intro paragraph" className='border-2 border-solid border-red-500 w-4/5 h-[300px] lg:my-20 text-[20px] z-20 flex flex-col justify-center items-center text-center bg-red-300'>
        <h2 className='text-[35px] z-20 font-bold'>About Us</h2>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
        </div>
        <div id="second paragraph" className='w-1/3 h-[400px] border-2 border-solid border-blue-500 lg:my-20 lg:ml-12 self-start'></div>
        <div id="third paragraph" className='w-3/5 h-[300px] border-2 border-solid border-blue-500 lg:my-20'></div>
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