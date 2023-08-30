// make sure to use

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const api = `http://localhost:8080/shop`;

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(api);
      setProducts(result.data);
    }
    fetchData();
  }, [])
  return <ProductContext.Provider value={{
    products
  }}>
    {children}
  </ProductContext.Provider>
};

export default ProductProvider;
