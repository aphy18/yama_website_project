import React, { useEffect } from 'react';
import { MdArrowBackIos,  MdArrowForwardIos } from "react-icons/md";
import '../styles/home.css'

function AboutSlideShow() {

  useEffect(() => {
    let index = 0;
    const displayImages = () => {
    let i;
    let images = document.querySelectorAll('.fade');
    for (let i=0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
    index++;
    if (index > images.length) {
      index = 1;
    }
    images[index-1].style.display = "inline-block";
    console.log('on index:', index)
    setTimeout(displayImages, 3000)
  }

  displayImages();

  }, [])

  return (
    
    <>
    <div id="slideshow" className='xl:w-1/2 lg:w-1/2 w-full xl:min-h-[48rem] lg:min-h-[48rem] min-h-[30rem] relative flex justify-center items-end'>
      <div className='fade w-full h-full absolute min-w-full min-h-full top-0 left-0 bg-photo3 bg-cover'></div>
      <div className='fade w-full h-full absolute min-w-full min-h-full top-0 left-0 bg-photo2 bg-cover'></div>
      <div className='fade w-full h-full absolute min-w-full min-h-full top-0 left-0 bg-photo1 bg-cover'></div>
    </div>
    </>
  )
}

export default AboutSlideShow