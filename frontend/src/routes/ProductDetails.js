import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import axios from 'axios';
const api = `http://localhost:8080`;

const ProductDetails = () => {

  const [products, setProducts] = useState([]);
  // const images = [joker, jacket, keychain, piece];
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); 
  console.log('id product detail', id);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(api);
      console.log('PRODUCT DETAIL RESULT -->', result.data);
      setProducts(result.data);
    }
    fetchData();
  }, [])

  const product = products.find((item) => {
    return item.id === parseInt(id);
  })
  console.log('product -->', product)

  if (!product) {
    return <section className='h-screen flex justify-center items-center'>
      Loading...
    </section>
  }

  const { name, img_name, category, quantity, price, sold_out } = product;
  return <section className='border-2 border-solid border-black h-[1200px] flex flex-col justify-center'>
    <div className='container mx-auto border-2 border-solid border-red-400'>
        {/* image and text wrapper*/}
        <div className='flex flex-col lg:flex-row items-center'>
            <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 bg-purple-200'>
            {/* image*/}
                <img className='max-w-[200px] lg:max-w-sm' src={img_name} />
            </div>
            {/* text */}
            <div className='flex-1 text-center lg:text-left'>
                <h1 className='text-[26px] font-medium mb-2 max-w-[450px]'>{name}</h1>
                <div className='text-xl text-red-500 font-medium'>$ {price}</div>
                <p className='mb-8'>{category}</p>
            </div>
        </div>
    </div>
  </section>
};

export default ProductDetails;
