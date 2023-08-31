import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


const Checkout = () => {

  const { checkout } = useContext(CartContext);

  console.log('the final checkout cart: ', checkout)
  return (
    <>
    <div className="border-2 border-solid border-blue-300 w-full h-auto">
     
    </div>
    </>
  )
}

export default Checkout;