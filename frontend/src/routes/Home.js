import React, { useState, useEffect } from 'react';
import axios from 'axios';
const api = `http://localhost:8080`;



const Home = () => {
  const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(api);
        console.log('result -->', result);
      }
      fetchData();
    }, [])
    return (
        <p>Hello world</p>
    )
  };
  
export default Home;
