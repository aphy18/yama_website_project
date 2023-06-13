import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // name and id are placeholders here for the real ones
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1};
    console.log(newItem);
    console.log(`product id ${id}`);
    console.log(`item ${product.name} added to the cart`);
  }
  return <CartContext.Provider value={{ addToCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
