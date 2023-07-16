import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs'


// import cart context
import { CartContext } from '../contexts/CartContext';

// product and img are the keys
const Product = ({ product, img }) => {
  // using addtocart function from cardcontext
  const { addToCart } = useContext(CartContext)
  
  const { id, name, category, quantity, price, sold_out } = product;

  return (
    <div>
      <div className='border border-2 border-[#e4e4e4] h-[300px] m-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* Add to Cart */}
          <div className='absolute top-6 -right-11 p-2 opacity-0 flex flex-col items-center gap-y-2 group-hover:opacity-100 group-hover:right-1 transition-all duration-300 z-20'>
            <button onClick={() => addToCart(product, id)}>
              <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                <BsPlus className='text-3xl'></BsPlus>
              </div>
            </button>
            <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
              <BsEyeFill />
            </Link>
          </div>
          {/* image */}
          <img className='max-h-[160px] group-hover:scale-110 transition-all duration-300' src={img} alt='' />
        </div>
      </div>
      {/* product info */}
      <div className='ml-4 h-auto'>
      <Link to={`/product/${id}`}>
        <p className='text-sm capitalize text-gray-500 mb-1'>{category}</p>
        <h2 className='font-semibold mb-1'>{name}</h2>
        <p>${price}</p>
      </Link>
      </div>
    </div>
  );
};

export default Product;
