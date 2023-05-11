import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async() => {
      const res = await fetch();
    }
  }, [])
  return <ProductContext.ProductProvider>
    {children}
  </ProductContext.ProductProvider>
};

export default ProductContext;
