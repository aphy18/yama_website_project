import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

import photoOne from '../images/sliderphoto1.jpg';
import photoTwo from '../images/sliderphoto2.jpg';
import photoThree from '../images/sliderphoto3.png';

// const spanStyle = {
//     padding: '20px',
//     background: '#efefef',
//     color: '#000000'
//   }
  
//   const divStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundSize: 'cover',
//     height: '400px'
//   }
//   const slideImages = [
//     {
//       url: 'C:\Users\scout\Desktop\yama_website_project\frontend\src\images\sliderphoto1.jpg',
//       caption: 'Slide 1'
//     },
//     {
//       url: photoTwo,
//       caption: 'Slide 2'
//     },
//     {
//       url: photoThree,
//       caption: 'Slide 3'
//     },
//   ];

function HomeSlider() {
  return (
    <img src={photoThree} className='rounded-xl scale-[0.95]' />
  )
}

export default HomeSlider