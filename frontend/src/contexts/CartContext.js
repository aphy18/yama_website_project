import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // name and id are placeholders here for the real ones
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1};
    console.log('new item', newItem);
    console.log(`item ${product.name} with id ${id} added to the cart`);
    
  // check if item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    console.log('checking cart item', cartItem)
  // if there is a cart item that already exists
    if (cartItem) {
    
      const newCart = [...cart].map(item => {
        // updating amount for existing if id matches
        if (item.id === id) {
          return {...item, amount: cartItem.amount + 1};
        }
      });
      setCart(newCart);
    } else {
      // whats already in the cart + new item
      setCart([...cart, newItem]);
    }
    console.log('current cart', cart)
  }
  // remove from cart
  const removeFromCart = (id) => {
    // return the items that don't match the id
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart);
  }

  const clearCart = () => {
    setCart([]);
  }

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
