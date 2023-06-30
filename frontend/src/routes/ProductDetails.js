import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import Footer from '../components/Footer'

import joker from '../images/joker.jpg';
import jacket from '../images/jacket.png';
import keychain from '../images/keychain.png';
import piece from '../images/piece.jpg';

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
  return <div></div>;
};

export default ProductDetails;
