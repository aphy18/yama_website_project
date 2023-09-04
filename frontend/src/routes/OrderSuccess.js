import React from 'react';
import { useEffect, useContext } from 'react';
import RemoveCookie from '../hooks/removeCookie';
import { CartContext } from '../contexts/CartContext';

function OrderSuccess() {
    const { cart, setCart } = useContext(CartContext);
    
    useEffect(() => {
        setCart([]);
        RemoveCookie('checkout');
    }, [])

    return (
        <>
          <div className='w-full h-[100vh] flex justify-center items-center'>
              <p className='text-[25px] opacity-50'>Thank you for your support! Please email yorkuyamako@gmail.com for instructions on receiving your order.</p>
          </div>  
        </>
    )
}

export default OrderSuccess