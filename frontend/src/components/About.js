import React from 'react'

function About() {
  return (
    <>
    <div id="about-us" className='border-2 border-solid border-blue-500 w-[90%] h-auto flex flex-col justify-evenly items-center relative'>
        <h2 className='text-[35px] mt-8 z-20'>About Us</h2>
        <div id="york-logo" className='lg:w-[500px] lg:h-[425px] bg-york bg-[length:500px_500px] bg-center absolute top-1/4 -z-10'></div>
        <div id="intro paragraph" className='border-2 border-solid border-red-500 w-1/2 h-[250px] lg:my-20'>
    
        </div>
        <div id="second paragraph" className='w-3/5 h-[300px] border-2 border-solid border-blue-500 lg:my-20'></div>
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