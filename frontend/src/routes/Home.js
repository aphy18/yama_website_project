import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import axios from 'axios';
const api = `http://localhost:8080`;



const Home = () => {
  const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(api);
        console.log('result -->', result.data);
        setProducts(result.data);
      }
      fetchData();
    }, [])
    return (
        <div>
          <section className='py-16'>
            <div className='container mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-5'> 
                {products.map(product => {
                  return <Product product={product} key={product.id} />
                })}
              </div>
            </div>
          </section>
        </div>
    )
  };
  
export default Home;
