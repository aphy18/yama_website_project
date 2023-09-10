import React, { useEffect, useState } from 'react';
import '../styles/team.css'

function Team() {

  const [offset, setOffset] = useState(0);
  let [lastScroll, setLastScroll] = useState(0);
  let allShiftsArr = Array.from(document.querySelectorAll('.shift-box'));

  useEffect(() => {
    // Get the page offset when the component is mounted (i.e., when the page is loaded)
    const pageOffset = window.pageYOffset || document.documentElement.scrollTop;
    console.log('Page offset when loaded:', pageOffset);
    setOffset(pageOffset);
  }, []);


  const shiftBoxes = (currentIndex) => {
    //  sort boxes first
    if (currentIndex % 2 === 0) {
      allShiftsArr[currentIndex].classList.add('shift-left');
    } else {
      allShiftsArr[currentIndex].classList.add('shift-right');
    }
    try {
      allShiftsArr[currentIndex + 2].style.display = ''; // Empty string to reset to default
    } catch {
      console.log('invalid')
    }
  }

  const resetBoxes = (currentIndex) => {
    // Remove the 'shift-left' or 'shift-right' class
    allShiftsArr[currentIndex].classList.remove('shift-left');
    allShiftsArr[currentIndex].classList.remove('shift-right');
  
    // Set the display style back to its original value (e.g., 'block' or 'inline-block')
    try {
      allShiftsArr[currentIndex + 2].style.display = ''; // Empty string to reset to default
    } catch {
      console.log('invalid')
    }
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', () => {
      onScroll();
      if (offset > lastScroll) {
        if (offset >= 200 && offset < 600) {
          shiftBoxes(0);
        } else if (offset >= 600 && offset < 1000) {
          shiftBoxes(1);
        } else if (offset >= 1000 && offset < 1400) {
          shiftBoxes(2);
        } else if (offset >= 1400 && offset < 1800) {
          shiftBoxes(3);
        } else if (offset >= 1800 && offset < 2200) {
          shiftBoxes(4);
        }  else if (offset >= 2200 && offset < 2600) {
          shiftBoxes(5);
        }
      } else {
        if (offset < 300) {
          resetBoxes(0);
        } else if (offset < 600) {
          resetBoxes(1);
        } else if (offset < 1000) {
          resetBoxes(2);
        } else if (offset < 1400) {
          resetBoxes(3);
        } else if (offset < 1800) {
          resetBoxes(4);
        } else if (offset < 2400) {
          resetBoxes(5);
        }
      }
      setLastScroll(offset);
    })
    console.log('OFFSET 89', offset)
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  

 

  // find something broken, email ifix for approval, do your proposal
  // cc prof
  // proposal due next week 
  // proposal with 6 steps
  // make sure to work on forum


  return (
    <>
    <div className='w-full h-auto flex justify-end relative'>
      <div className='flex flex-col justify-center items-center w-1/2 h-full bg-white-300 border-2 border-solid border-blue-400 fixed top-0 left-0'>
        <h1>Y.A.M.A. Executives 2023-2024</h1>
        <section className='border-2 border-solid border-red-500 w-[90%] h-1/2 flex justify-between items-center relative overflow-hidden'>
          
            <div id="0" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-black absolute -left-1/2 transition-all ease'>
              TEXT 1
            </div>
            <div id="1" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-black absolute -right-1/2 transition-all ease'>
            TEXT 2
            </div>
            <div id="2" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-green-500 absolute -left-1/2 transition-all ease'>
            TEXT 3
            </div>
            <div id="3" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-black absolute -right-1/2 transition-all ease '>
            TEXT 4
            </div>
            <div id="4" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-black absolute -left-1/2 transition-all ease'>
            TEXT 5
            </div>
            <div id="5" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-green-500 absolute -right-1/2 transition-all ease '>
            TEXT 6
            </div>
      
        </section>
      </div>
      <div className='w-1/2 h-auto border-2 border-solid border-red-300'>
        <p>Meet the Executive Team of Yama 2023 - 2024</p>
        <div id="box-1" className='w-full h-[60vh]'></div>
        <div id="box-2" className='border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-3"className='border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-4" className='border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-5" className='border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-6" className='border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
        <div id="box-7" className='border-[5px] border-solid border-blue-300 w-full h-[60vh]'></div>
      </div>
    </div>
    </>
  )
}

export default Team