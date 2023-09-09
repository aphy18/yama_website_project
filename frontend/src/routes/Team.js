import React, { useEffect, useState } from 'react';
import '../styles/team.css'

function Team() {

  const [offset, setOffset] = useState(0);
  const [indice, setIndice] = useState(0);
  const [evenState, setEvenState] = useState(0);

  let allShiftsArr = Array.from(document.querySelectorAll('.shift-box'));
  let storeIds = [];
  storeIds.length = allShiftsArr.length;

  
 // [1,2,3,4,5,6]

  const shiftBoxes = (currentIndex) => {
    //  sort boxes first

    
    if (currentIndex % 2 === 0) {
      allShiftsArr[currentIndex].classList.add('shift-left');
      if (currentIndex !== 0) {
        allShiftsArr[evenState].style.opacity = '0';
      
      }
    } else {
      allShiftsArr[currentIndex].classList.add('shift-right');
    }
    // allShiftsArr[prevIndex].style.display = 'none';
    allShiftsArr[currentIndex + 2].style.display = 'inline';
    console.log('looking at array', allShiftsArr)
  }

 
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', () => {
      onScroll();
        if (offset >= 200 && offset < 700) {
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
    })

    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

    // window.addEventListener('scroll', () => {
    // setOffset(window.pageYOffset);
    // console.log('offset', offset)
    // })
 

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
        <section className='border-2 border-solid border-red-500 w-[90%] h-1/2 flex justify-between items-center relative'>
          
            <div id="0" className='shift-box w-1/2 h-full border-2 border-solid border-black absolute -left-1/2 transition-all duration-[0.3s] ease'>
              TEXT 1
            </div>
            <div id="1" className='shift-box w-1/2 h-full -z-10 border-2 border-solid border-black absolute -right-1/2 transition-all duration-[0.3s] ease'>
            TEXT 2
            </div>
            <div id="2" className='shift-box w-1/2 h-full -z-20 border-2 border-solid border-green-500 absolute -left-1/2 transition-all duration-[0.3s] ease hidden'>
            TEXT 3
            </div>
            <div id="3" className='shift-box w-1/2 h-full border-2 border-solid border-black absolute -right-1/2 transition-all duration-[0.3s] ease hidden'>
            TEXT 4
            </div>
            <div id="4" className='shift-box w-1/2 h-full -z-10 border-2 border-solid border-black absolute -left-1/2 transition-all duration-[0.3s] ease hidden'>
            TEXT 5
            </div>
            <div id="6" className='shift-box w-1/2 h-full -z-20 border-2 border-solid border-green-500 absolute -right-1/2 transition-all duration-[0.3s] ease hidden'>
            TEXT 6
            </div>
      
        </section>
      </div>
      <div className='w-1/2 h-[420vh] border-2 border-solid border-red-300'>
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