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
    `${isActive ? 'bg-white shadow-md' : 'bg-white'} fixed w-full z-30 transition-all py-4 text-black`
  }>
    <div className='w-full container mx-auto flex items-center w-full h-full justify-around lg:text-[18px]'>

      <Link to={'/'} className='transition-transform duration-100 ease-in hover:-translate-y-1 lg:px-14 md:px-10 mx-4'>
        <p>Home</p>
      </Link>

      {/* <Link to={'/about'} className='transition-transform duration-100 ease-in hover:-translate-y-1 lg:px-12 px-8'>
        <p>About</p>
      </Link> */}

      <Link to={'/events'} className='transition-transform duration-100 ease-in hover:-translate-y-1 lg:px-14 md:px-10 mx-4'>
        <p>Events</p>
      </Link>

      <Link to={'/team'} className='transition-transform duration-100 ease-in hover:-translate-y-1 lg:px-14 md:px-10 mx-4'>
        <p>Team</p>
      </Link>

      <Link to={'/gallery'} className='transition-transform duration-100 ease-in hover:-translate-y-1 lg:px-14 md:px-10 mx-4'>
        <p>Gallery</p>
      </Link>

      {/* header banner */}
      <Link to={'/shop'} className='transition-transform duration-100 ease-in hover:-translate-y-1 lg:px-14 md:px-10 mx-4'>
        {/* <div>
          <TbHanger className='text-[30px]' />
        </div> */}
        <p>Shop</p>
      </Link>

      <div className="cursor-pointer flex relative justify-center items-center mr-4" onClick={() => setIsOpen(!isOpen)}><BsBag className='text-2xl'/>
      <div className='bg-red-500 absolute -right-4 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
    </div>
  </header>;
};

export default Header;
