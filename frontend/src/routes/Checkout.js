import React, { useContext, useRef } from 'react';
import { CartContext } from '../contexts/CartContext';
import GetCookie from '../hooks/getCookie';
import emailjs from '@emailjs/browser';


const Checkout = () => {

  const { cart } = useContext(CartContext);
  let checkoutCart = null;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4yatryf', 'template_6xyc2ak', form.current, '_Le3fkhZWue-z19eN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  try {
    checkoutCart = JSON.parse(GetCookie('checkout'));
    console.log('checkout', checkoutCart)
  } catch {
    console.log('invalid');
  }

  if (checkoutCart) {
    return (
      <>
        <div className='flex flex-col justify-start items-center w-full h-auto border-2 border-solid border-black'>
          <section className='w-full h-auto border-2 border-solid border-red-400 flex flex-col justify-around items-center mt-20'>
            <h2 className='text-[40px]'>Your Cart:</h2>
            <div className='border-2 border-solid border-blue-500 w-auto flex justify-center items-center flex-wrap'>
              {checkoutCart.map(checkoutItem => {
                return <div className='border-2 border-solid border-black w-[300px] h-[300px] flex flex-col justify-between items-center m-4'>
                <img src={checkoutItem.img_name} className='w-[200px] h-[200px]' />
                <section className='w-full h-auto flex flex-col justify-center items-center'>
                  <span className='font-bold'>{checkoutItem.name}</span>
                  <span>Amount x {checkoutItem.amount}</span>
                </section>
              </div>
            })}
            </div>
          </section>
          <section className='border-2 border-solid border-green-400 w-full h-[800px] flex flex-col justify-evenly items-center'>
              <h1 className='text-[30px]'>Submit Order:</h1>
              <form ref={form} onSubmit={sendEmail} className='w-1/2 border-2 border-solid border-[#e4e4e4] h-[400px] flex flex-col items-center'>
                <div className='w-full h-3/4 flex'>
                  <div className='w-1/2 h-full flex flex-col justify-evenly items-center'>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4' name="full_name" placeholder="Name" required/>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4' name="email"  placeholder="Email" required/>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4' name="phone_number"  placeholder="Phone Number" required/>
                  </div>
                  <div className='w-1/2 flex flex-col justify-evenly items-center'>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4' name="address"  placeholder="Shipping Address" required/>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4' name="postal_code"  placeholder="Postal Code" required/>
                    <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 opacity-0 -z-10' placeholder="Postal Code" />
                  </div>
                </div>
                <button className='w-[130px] h-[70px] bg-orange-500 text-[18px] text-white rounded-xl'>Place Order</button>
              </form>
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