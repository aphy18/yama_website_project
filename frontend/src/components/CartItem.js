import React from 'react';
import { Link } from 'react-router-dom';


const CartItem = ({ item }) => {
  const { id, name, img_name, amount, quantity, price } = item
  
  return (
    <div>
      <div className='border-2 border-black border-blue-400 w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img src={img_name} />
        </Link>
        <div>

        </div>
      </div>
    </div>
  )
};

export default CartItem; 
