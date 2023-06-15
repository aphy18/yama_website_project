import joker from '../images/joker.jpg';
import jacket from '../images/jacket.png';
import keychain from '../images/keychain.png';
import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import axios from 'axios';
const api = `http://localhost:8080`;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const images = [joker, jacket, keychain];

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(api);
        console.log('result -->', result.data);
        setProducts(result.data);
        console.log('image result', products.img);
      }
      fetchData();
    }, [])
    return (
        <div>
          <section className='py-16'>
            <div className='container mx-auto border-2 border-solid border-red-500'>
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
    )
  };
  
export default Shop;
