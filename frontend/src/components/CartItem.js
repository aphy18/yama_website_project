import React from 'react';
import { Link } from 'react-router-dom';
// icons
import { IoMdClose } from 'react-icons/io'

const CartItem = ({ item }) => {
  const { id, name, img_name, amount, quantity, price } = item
  
  return (
    <div>
      <div className='border-2 border-black border-blue-400 w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={img_name} />
        </Link>
        <div className='border-2 border-solid border-black w-full flex flex-col'>
          {/* title and remove icon */}
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{name}</Link>
            <div className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          { /* qty */}
          <div>quantity</div>
          { /* item price */}
          <div>item price</div>
          { /* final price */}
          <div>final price</div>
        </div>
      </div>
    </div>
  )
};

export default CartItem; 
