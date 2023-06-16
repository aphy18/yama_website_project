import React from 'react';
import { Link } from 'react-router-dom';
// icons
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io'

const CartItem = ({ item }) => {
  const { id, name, img_name, amount, quantity, price } = item
  
  return (
    <div>
      <div className='border-2 border-black border-blue-400 w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={img_name} />
        </Link>
        <div className='w-full flex flex-col'>
          {/* title and remove icon */}
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{name}</Link>
            <div className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            { /* qty */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
            { /* remove */}
              <div className='flex-1 flex justify-center items-center cursor-pointer'>
                <IoMdRemove />
              </div>
              { /* amount */}
              <div className='h-full flex justify-center items-center px-2'>{amount}</div>
              { /* add */}
              <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdAdd />
              </div>
            </div>
            { /* item price */}
            <div className='border-2 border-solid border-blue-300'>$ {price}</div>
            { /* final price */}
            <div>$ {price * amount}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem; 
