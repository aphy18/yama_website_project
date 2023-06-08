import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import joker from '../images/joker.jpg';




const Product = ({ product }) => {
  //destructure product
  console.log('product from products page:', product)
  const { id, name, quantity, sold_out, image } = product;
  
  return (
    <div>
      <div className='border border-2 border-[#e4e4e4] h-[300px] m-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          {/* Add to Cart */}
          <div className='absolute top-6 -right-11 bg-red-500/40 p-2 opacity-0 flex flex-col items-center gap-y-2 group-hover:opacity-100 group-hover:right-1 transition-all duration-300'>
            <button>
              <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                <BsPlus className='text-3xl'></BsPlus>
              </div>
            </button>
            <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
              <BsEyeFill />
            </Link>
          </div>
          {/* image */}
          <img className='max-h-[160px] group-hover:scale-110 transition-all duration-300' src={joker} alt='' />
        </div>
      </div>
      {/* product info */}
      <div className='border-2 border-solid border-black h-auto'>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{name}</h2>

      </Link>
      </div>
    </div>
  );
};

export default Product;
