import React, { useState, useEffect } from 'react';
import axios from 'axios';
const api = `http://localhost:3000`;



const Home = () => {
  const [products, setProducts] = useState([])
    useEffect(() => {
      const fetchData = async() => {
        const result = await axios.get(api);
        setProducts(result);
        console.log(products)
      }
      fetchData();
    }, [])
    return (
        <p>Hello world</p>
    )
  };
  
export default Home;
