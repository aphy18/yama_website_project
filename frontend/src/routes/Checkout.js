import React, { useEffect, useContext, useRef, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import GetCookie from '../hooks/getCookie';
import RemoveCookie from '../hooks/removeCookie';
import emailjs from '@emailjs/browser';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import '../styles/checkout.css';

const Checkout = () => {

  let checkoutCart;
  let totalPrice;
  let [toggle, setToggle] = useState(false);
  const form = useRef();


  
  try {
    checkoutCart = JSON.parse(GetCookie('checkout'));
    totalPrice = JSON.parse(GetCookie('price'));
  } catch {
    console.log('invalid');
  }
  
  useEffect(() => {
    let confirmCart = document.querySelector('#confirm-cart');
    if (confirmCart) {
      confirmCart.style.width = `${200 * checkoutCart.length}px`;
    }
  }, [])

  useEffect(() => {
    console.log('Toggle state changed:', toggle);
    let formContainer = document.querySelector('#form-container');
    let almost = document.querySelector('#almost-done');
    let paymentNotice = document.querySelector('#payment-notice');
    if (formContainer && almost && paymentNotice) {
      formContainer.classList.toggle('toggle-container');
      almost.classList.toggle('almost-done');
      paymentNotice.classList.toggle('almost-done');
    }
  }, [toggle]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4yatryf', 'template_6xyc2ak', form.current, '_Le3fkhZWue-z19eN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    window.location.href = '/success'
  };

  if (checkoutCart) {
    return (
      <>
        <div id="main-checkout-container" className='flex flex-col justify-start items-center w-full h-auto bg-yamabackground bg-cover p-10 relative border-2 border-solid border-cyan-300'>
          <section className='big-container w-4/5 h-auto flex flex-col justify-around mt-20 bg-white z-20 px-8 border-[2px] border-solid border-orange-400 border-b-0 overflow-hidden overflow-x-scroll'>
            <h2 className='text-[25px] my-4'>Total Price: ${totalPrice}</h2>
            <div id="confirm-cart" className='w-auto flex flex justify-evenly items-center flex-wrap'>
              {checkoutCart.map(checkoutItem => {
                return <div className='w-[200px] h-[200px] flex flex-col justify-between items-center m-4 border-2 border-solid border-black'>
                <img src={checkoutItem.img_name} className='w-[150px] h-[150px]' />
                <section className='w-full h-auto flex flex-col justify-center items-center'>
                  <span className='font-bold'>{checkoutItem.name}</span>
                  <span>Amount x {checkoutItem.amount}</span>
                </section>
              </div>
            })}
            </div>
          </section>
          <section className='big-container w-4/5 h-[850px] flex flex-col justify-start items-center relative bg-white z-20 px-8 border-[2px] border-solid border-orange-400 border-t-0'>
            <div className='text-[50px] mt-8'>
              {toggle ? <BsFillArrowUpCircleFill onClick={() => setToggle(!toggle)} /> : <BsFillArrowDownCircleFill onClick={() => setToggle(!toggle)} />}
            </div>
            <div id="form-container" className='w-full h-0 border-2 border-solid border-[#e4e4e4] flex flex-col justify-evenly items-center overflow-hidden mt-32 transition-all ease duration-[1s] m-20 relative rounded-xl'>
              <span id="almost-done" className='text-[18px] absolute top-4 left-2 text-gray-500 opacity-0 transition-opacity ease duration-500'>Complete order here.</span>
              <h1 className='text-[30px] mt-12'>Submit Order:</h1>
              <form ref={form} onSubmit={sendEmail} className='w-full h-[500px] flex flex-col items-center border-2 border-solid border-black'>
                <div className='main-input-container flex w-full h-[500px] flex-col border-2 border-solid border-blue-400'>
                  <div className='input-container w-full flex flex-col justify-evenly items-center border-2 border-solid border-red-400'>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 m-[10px]' name="full_name" placeholder="Name" required/>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 m-[10px]' name="email"  placeholder="Email" required/>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 m-[10px]' name="phone_number"  placeholder="Phone Number" required/>
                  </div>
                  <div className='input-container w-full flex flex-col justify-evenly items-center border-2 border-solid border-red-400'>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 m-[10px]' name="address"  placeholder="Shipping Address" required/>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 m-[10px]' name="postal_code"  placeholder="Postal Code" required/>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 opacity-0 -z-10 m-[10px]' placeholder="Postal Code" />
                  </div>
                </div>
                <button className='w-[130px] h-[70px] bg-orange-500 text-[18px] text-white rounded-xl m-8'>Place Order</button>
              </form>
            </div>
              <p id="payment-notice" className='absolute bottom-0 m-4 text-[18px] text-gray-500 opacity-0 transition-opacity ease duration-500'>Payments are not processed on the website.</p>
          </section>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <p className='text-[35px] opacity-50'>You have nothing to checkout.</p>
        </div>  
      </>
    )
  }
}

export default Checkout;