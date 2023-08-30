import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward, IoMdTrash } from "react-icons/io";
// import { FiTrash2 } from 'react-icon/fi';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext'; 
import CartItem from '../components/CartItem';
import '../styles/sidebar.css'

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, setCart, clearCart, totalPrice, itemAmount, checkout, setCheckout } = useContext(CartContext)
  const { products } = useContext(ProductContext);

  let [quantityError, setQuantityError] = useState('');

  function checkCartQuantity() {
    let clear = true;

    if (cart.length === 0) {
      setQuantityError('Unable to checkout, cart is empty.');
      clear = false;
    } else {
      products.forEach(product => {
        cart.forEach(item => {
          if (product.id === item.id) {
            if (product.quantity < item.amount) {
              setQuantityError('Unable to checkout, quantity requested is not available.');
              clear = false;
            }
          }
          if (!clear) {
            return;
          }
        })
      })
    }
    if (clear) {
      // once on checkout, check checkout w the cookie currently stored
      setCheckout(cart);
      window.location.href = '/checkout'
    }
  }
  
  return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px[35px]`}>
    <div className='flex justify-between items-center py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
      <div onClick={() => handleClose()} className='cursor-pointer w-8 h-8 flex justify-center items-center'><IoIosArrowRoundForward className="text-4xl" /></div>
    </div>
    <div id="cart-item-container" className='flex flex-col gap-y-2 h-[500px] overflow-y-auto overflow-x-hidden border-b overflow-y-scroll'>{cart.map(item => {
      return <CartItem item={item} key={item.id} />
    })}
    </div>
    <div id="checkout-container" className='flex flex-col gap-y-3 py-4 mt-3'>
      <div className='w-full h-1/2 flex justify-between items-center py-2'>
        {/* total */}
        <div className='uppercase font-semibold'>
          <span className='mr-2'>Total:</span>$ {totalPrice}
        </div>
        {/* clear cart icon */}
        <div className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl' onClick={() => clearCart()}>
          <IoMdTrash />
        </div>
      </div>
        <div className='w-full h-14 flex justify-evenly items-center'>
          <button onClick={() => checkCartQuantity()} className='bg-primary border-2 border-solid border-primary text-white w-[150px] h-[50px] m-2'>Checkout</button>
        </div>
        <p className='text-red-400 self-center'>{quantityError}</p>
    </div>
  </div>;
};

export default Sidebar;
