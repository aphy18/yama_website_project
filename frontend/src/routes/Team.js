import React, { useEffect, useState } from 'react';
import '../styles/team.css'

function Team() {

  let [lastScroll, setLastScroll] = useState(0);
  const [shiftStates, setShiftStates] = useState([false, false, false, false, false, false]);


  useEffect(() => {
   
  }, []);

  const shiftBoxes = (currentIndex) => {
    let allShiftsArr = Array.from(document.querySelectorAll('.shift-box'));
    const updatedStates = [...shiftStates];
    updatedStates[currentIndex] = currentIndex % 2 === 0 ? 'shift-left' : 'shift-right';
    setShiftStates(updatedStates);
    console.log(`element ${currentIndex}`, allShiftsArr[currentIndex]);
    allShiftsArr[currentIndex].classList.add(shiftStates[currentIndex]);
  }


  const resetBoxes = (currentIndex) => {
    let allShiftsArr = Array.from(document.querySelectorAll('.shift-box'));
    const updatedStates = [...shiftStates];
    updatedStates[currentIndex] = false;
    setShiftStates(updatedStates);
    console.log(`element ${currentIndex}`, allShiftsArr[currentIndex]);
    allShiftsArr[currentIndex].classList.remove(shiftStates[currentIndex]);
  };

  useEffect(() => {
    const onScroll = () => {
      const newOffset = window.pageYOffset;
      if (newOffset > lastScroll) {
        if (newOffset >= 300 && newOffset < 600) {
          shiftBoxes(0);
        } else if (newOffset >= 600 && newOffset < 1000) {
          shiftBoxes(1);
        } else if (newOffset >= 1000 && newOffset < 1400) {
          shiftBoxes(2);
        } else if (newOffset >= 1400 && newOffset < 1800) {
          shiftBoxes(3);
        } else if (newOffset >= 1800 && newOffset < 2300) {
          shiftBoxes(4);
        } else if (newOffset > 2300) {
          shiftBoxes(5);
        }
      } else {
        if (newOffset < 300) {
          resetBoxes(0);
        } else if (newOffset < 600) {
          resetBoxes(1);
        } else if (newOffset < 1000) {
          resetBoxes(2);
        } else if (newOffset < 1400) {
          resetBoxes(3);
        } else if (newOffset < 1800) {
          resetBoxes(4);
        } else if (newOffset < 2400) {
          resetBoxes(5);
        }
      }
      setLastScroll(newOffset);
    };

    console.log('updated state', shiftStates)
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScroll]);

  

 

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
          
            <div id="0" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-black absolute -left-1/2 duration-[0.25s] transition-all'>
              TEXT 1
            </div>
            <div id="1" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-black absolute -right-1/2 duration-[0.25s] transition-all'>
            TEXT 2
            </div>
            <div id="2" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-green-500 absolute -left-1/2 duration-[0.25s] transition-all'>
            TEXT 3
            </div>
            <div id="3" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-black absolute -right-1/2 duration-[0.25s] transition-all'>
            TEXT 4
            </div>
            <div id="4" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-black absolute -left-1/2 duration-[0.25s] transition-all'>
            TEXT 5
            </div>
            <div id="5" className='bg-white shift-box w-1/2 h-full border-2 border-solid border-green-500 absolute -right-1/2 duration-[0.25s] transition-all'>
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