import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
// import { FiTrash2 } from 'react-icon/fi';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext)
  console.log(useContext(CartContext))

  return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full border-2 bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-30 px-4 lg:px[35px] bg-red-500 `}>
    <div className='flex justify-between items-center py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
      <div onClick={() => handleClose()} className='cursor-pointer w-8 h-8 flex justify-center items-center'><IoIosArrowRoundForward className="text-4xl" /></div>
    </div>
    <div>{cart.map(item => {
      return <CartItem item={item} key={item.id} />
    })}</div>
  </div>;
};

export default Sidebar;
