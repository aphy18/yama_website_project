import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowFoward } from 'react-icons/io';
import { FiTrash2 } from 'react-icon/fi';
import { SidebarContext } from '../contexts/SidebarContext';
import CartItem from '../components/CartItem';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  return <div className={`${isOpen ? 'right-0' : '-right-full'} w-full border-2 border-solid border-blue-500 bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px[35px] bg-red-500`}>Sidebar</div>;
};

export default Sidebar;
