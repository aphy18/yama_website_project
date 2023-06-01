import React, { useState, useEffect } from 'react';
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
              <div className='flex flex-col lg: flex-row md:flex-row max-w-sm mx-auto'> 
                {products.map(product => {
                  return <div className='w-full h-[300px] bg-pink-200 mb-4' key={product.id}>{product.name}</div>
                })}
              </div>
            </div>
          </section>
        </div>
    )
  };
  
export default Home;
