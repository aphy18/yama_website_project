import React, { useEffect, useState } from 'react';
import '../styles/team.css';


// not sending them pdfs anymore, send them email with a link to your guide
// follow peer review process
// 2 things when u submit to eclass, do research and offer a reflection
// find how to guide that's image heavy, evaluate it
// date you've submitted

function Team() {

  const [lastScroll, setLastScroll] = useState(0);
  const [shiftStates, setShiftStates] = useState([false, false, false, false, false, false]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const shiftBoxes = (currentIndex) => {
    let allShiftsArr = Array.from(document.querySelectorAll('.shift-box'));
    const updatedStates = [...shiftStates];
    updatedStates[currentIndex] = currentIndex % 2 === 0 ? 'shift-left' : 'shift-right';
    allShiftsArr[currentIndex].classList.add(shiftStates[currentIndex]);
    setShiftStates(updatedStates);
  }


  const resetBoxes = (currentIndex) => {
    let allShiftsArr = Array.from(document.querySelectorAll('.shift-box'));
    const updatedStates = [...shiftStates];

    allShiftsArr[currentIndex].classList.remove(updatedStates[currentIndex]);
    updatedStates[currentIndex] = false;
    setShiftStates(updatedStates);
    // console.log(`element ${currentIndex}`, allShiftsArr[currentIndex]);
  };

  useEffect(() => {
    const onScroll = () => {
      const newOffset = window.pageYOffset;
     
      if (newOffset > lastScroll) {
        if (newOffset >= 300 && newOffset < 700) {
          shiftBoxes(0);
        } else if (newOffset >= 700 && newOffset < 1100) {
          shiftBoxes(1);
        } else if (newOffset >= 1100 && newOffset < 1500) {
          shiftBoxes(2);
        } else if (newOffset >= 1500 && newOffset < 2000) {
          shiftBoxes(3);
        } else if (newOffset >= 2000 && newOffset < 2400) {
          shiftBoxes(4);
        } else if (newOffset > 2400) {
          shiftBoxes(5);
        }
      } else {
        if (newOffset < 300) {
          resetBoxes(0);
        } else if (newOffset < 700) {
          resetBoxes(1);
        } else if (newOffset < 1100) {
          resetBoxes(2);
        } else if (newOffset < 1500) {
          resetBoxes(3);
        } else if (newOffset < 2000) {
          resetBoxes(4);
        } else if (newOffset < 2400) {
          resetBoxes(5);
        }
      }
      setLastScroll(newOffset);
    };

    // console.log('updated state', shiftStates)
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScroll]);

  

  return (
    <>
    <div className='border-2 border-solid border-black w-full h-auto flex flex-row justify-end relative'>
      <div className='border-2 border-solid border-black flex flex-col justify-center items-center w-1/2 h-full bg-white-300 fixed top-0 left-0'>
        <h1 className='text-[30px]'>Executives 2023-2024</h1>
        <section className='w-[90%] h-1/2 flex justify-between items-center relative overflow-hidden'>
          
            <div id="0" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-black absolute -left-[100%] md:duration-[0.6s] opacity-0 transition-all'>
              TEXT 1
            </div>
            <div id="1" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-black absolute -right-[100%] md:duration-[0.6s] opacity-0 transition-all'>
            TEXT 2
            </div>
            <div id="2" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-green-500 absolute -left-[100%] md:duration-[0.6s] opacity-0 transition-all'>
            TEXT 3
            </div>
            <div id="3" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-black absolute -right-[100%] md:duration-[0.6s] opacity-0 transition-all'>
            TEXT 4
            </div>
            <div id="4" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-black absolute -left-[100%] md:duration-[0.6s] opacity-0 transition-all'>
            TEXT 5
            </div>
            <div id="5" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-green-500 absolute -right-[100%] md:duration-[0.6s] opacity-0 transition-all'>
            TEXT 6
            </div>
      
        </section>
      </div>
      <div className='w-1/2 h-auto'>
        <p>Meet the Executive Team of Yama 2023 - 2024</p>
        <div id="box-1" className='w-full h-[60vh]'></div>
        <div id="box-2" className='scroll-box border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-3"className='scroll-box border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-4" className='scroll-box border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-5" className='scroll-box border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-6" className='scroll-box border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-7" className='scroll-box border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
      </div>
    </div>
    </>
  )
}

export default Team