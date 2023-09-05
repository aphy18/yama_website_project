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

  const form = useRef();
  let [toggle, setToggle] = useState(false);

  
  try {
    checkoutCart = JSON.parse(GetCookie('checkout'));
    totalPrice = JSON.parse(GetCookie('price'));
  } catch {
    console.log('invalid');
  }
  

  useEffect(() => {
    console.log('Toggle state changed:', toggle);
    let formContainer = document.querySelector('#form-container');
    let almost = document.querySelector('#almost-done');
    if (toggle) {
      formContainer.classList.add('toggle-container');
      almost.classList.add('almost-done');
    } else {
      formContainer.classList.remove('toggle-container');
      almost.classList.remove('almost-done');
    }
  }, [toggle]);

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_4yatryf', 'template_6xyc2ak', form.current, '_Le3fkhZWue-z19eN')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    window.location.href = '/success'
  };

  if (checkoutCart) {
    return (
      <>
        <div className='flex flex-col justify-start items-center w-full h-auto border-2 border-solid border-black'>
          <section className='w-full h-auto flex flex-col justify-around items-center mt-20'>
            <h2 className='text-[25px] mb-4'>Total Price: ${totalPrice}</h2>
            <div className='w-auto flex justify-center items-center flex-wrap'>
              {checkoutCart.map(checkoutItem => {
                return <div className='w-[300px] h-[300px] flex flex-col justify-between items-center m-4'>
                <img src={checkoutItem.img_name} className='w-[200px] h-[200px]' />
                <section className='w-full h-auto flex flex-col justify-center items-center'>
                  <span className='font-bold'>{checkoutItem.name}</span>
                  <span>Amount x {checkoutItem.amount}</span>
                </section>
              </div>
            })}
            </div>
          </section>
          <section className='w-full h-[800px] flex flex-col justify-start items-center'>
            <div className='text-[50px] mt-12'>
              {toggle ? <BsFillArrowDownCircleFill onClick={() => setToggle(!toggle)} /> : <BsFillArrowUpCircleFill onClick={() => setToggle(!toggle)} />}
            </div>
            <div id="form-container" className='w-3/4 h-0 border-2 border-solid border-[#e4e4e4] flex flex-col justify-evenly items-center overflow-hidden mt-32 transition-all ease duration-[1s] m-20 relative rounded-xl'>
              <span id="almost-done" className='text-[18px] absolute top-4 left-2 text-gray-500 opacity-0 transition-opacity ease duration-500'>Complete order here.</span>
              <h1 className='text-[30px] mt-12'>Submit Order:</h1>
              <form ref={form} onSubmit={sendEmail} className='w-full h-[500px] flex flex-col items-center'>
                <div className='w-full h-[300px] flex'>
                  <div className='w-1/2 flex flex-col justify-evenly items-center'>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 m-[10px]' name="full_name" placeholder="Name" required/>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 m-[10px]' name="email"  placeholder="Email" required/>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 m-[10px]' name="phone_number"  placeholder="Phone Number" required/>
                  </div>
                  <div className='w-1/2 flex flex-col justify-evenly items-center'>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 m-[10px]' name="address"  placeholder="Shipping Address" required/>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 m-[10px]' name="postal_code"  placeholder="Postal Code" required/>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 opacity-0 -z-10 m-[10px]' placeholder="Postal Code" />
                  </div>
                </div>
                <button className='w-[130px] h-[70px] bg-orange-500 text-[18px] text-white rounded-xl m-8'>Place Order</button>
              </form>

            </div>
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