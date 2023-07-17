import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { TbHanger } from 'react-icons/tb';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return <header className={
    `${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-30 transition-all`
  }>
    <div className='w-full container mx-auto flex items-center justify-evenly w-full h-full'>

      <Link to={'/'} className='transition-transform duration-100 ease-in hover:-translate-y-1'>
        <p>Home</p>
      </Link>

      <Link to={'/about'} className='transition-transform duration-100 ease-in hover:-translate-y-1'>
        <p>About</p>
      </Link>

      <Link to={'/events'} className='transition-transform duration-100 ease-in hover:-translate-y-1'>
        <p>Events</p>
      </Link>

      {/* header banner */}
      <Link to={'/shop'} className='transition-transform duration-100 ease-in hover:-translate-y-1'>
        {/* <div>
          <TbHanger className='text-[30px]' />
        </div> */}
        <p>Shop</p>
      </Link>

      <div className="cursor-pointer flex relative justify-center items-center" onClick={() => setIsOpen(!isOpen)}><BsBag className='text-2xl'/>
      <div className='bg-red-500 absolute -right-4 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
    </div>
  </header>;
};

export default Header;
