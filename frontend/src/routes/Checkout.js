import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import GetCookie from '../hooks/getCookie';


const Checkout = () => {

  const { cart } = useContext(CartContext);
  let checkoutCart = null;

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
              <h1>Submit Order:</h1>
              <form className='w-1/2 border-2 border-solid border-black h-[400px] flex'>
                <div className='w-1/2 h-full border-2 border-solid border-red-400 flex flex-col justify-evenly items-center'>
                  <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4' placeholder="Name" />
                  <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4' placeholder="Email" />
                  <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4' placeholder="Phone Number" />
                </div>
                <div className='w-1/2 border-2 border-solid border-red-400 flex flex-col justify-evenly items-center'>
                  <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4' placeholder="Shipping Address" />
                  <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4' placeholder="Postal Code" />
                  <input type="text" className='border-2 border-solid rounded-xl h-[30px] text-[22px] p-4 opacity-0 -z-10' placeholder="Postal Code" />
                </div>
              </form>
              <button>Place Order</button>
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