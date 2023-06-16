import React from 'react';
import { Link } from 'react-router-dom';
// icons
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io'

const CartItem = ({ item }) => {
  const { id, name, img_name, amount, quantity, price } = item
  
  return (
    <div className='border-b border-gray-200 gap-x-4 py-2 lg:px-6 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
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
            <div className='flex-1 flex justify-around items-center'>$ {price}</div>
            { /* final price */}
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem; 
