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
        <div className='flex flex-col justify-evenly items-center w-full border-2 border-solid border-black'>
          <section className='w-full h-auto border-2 border-solid border-red-400 flex flex-col justify-around items-center'>
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
          <section className='border-2 border-solid border-green-400 w-full h-[800px]'>

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