import React from 'react';
import { Link } from 'react-router-dom';
// import joker from '../images/joker.jpg';

const CartItem = ({ item }) => {
  const { id, name, amount, quantity, price } = item
  
  return (
    <div>
      <div className='border-2 border-black border-blue-400 w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          {/* <img src={} /> */}
        </Link>
        <div>

        </div>
      </div>
    </div>
  )
};

export default CartItem; 
