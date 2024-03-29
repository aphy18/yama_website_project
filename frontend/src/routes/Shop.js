import React, { useContext, useState, useEffect } from 'react';
import joker from '../images/joker.jpg';
import jacket from '../images/jacket.png';
import keychain from '../images/keychain.png';
import piece from '../images/piece.jpg';
import Product from '../components/Product';
import { ProductContext } from '../contexts/ProductContext';

const Shop = ({}) => {

  // for rendering the images
  const images = [joker, jacket, keychain, piece];
  const { products } = useContext(ProductContext);
    
    return (
      <>
        <div className='h-auto max-h-auto min-h-[100vh]'>
          <section className='py-16'>
            <div className='container mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-5'> 
                {products.map(product => {
                  return <Product product={product} key={product.id} img={images.find(img => {
                    if (img === product.img_name) {
                      return img;
                    }
                  })} />
                })}
              </div>
            </div>
          </section>
        </div>
      </>
    )
  };
  
export default Shop;
