import React, { useContext } from 'react';

const Product = ({ product }) => {
  //destructure product
  console.log('product from products page:', product)
  const { id, sold_out, image } = product;
  return (
    <div>
      <div className='border border-2 border-black h-[300px] m-4 relative overflow-hidden group transition'>

      </div>
    </div>
  );
};

export default Product;
