import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);

  // item amount state
  const [itemAmount, setItemAmount] = useState(0);

  // total price
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem.price * currentItem.amount);
    }, 0)
    setTotalPrice(total)
  })

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

  // name and id are placeholders here for the real ones
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1};
    // console.log('new item', newItem);
    // console.log(`item ${product.name} with id ${id} added to the cart`);
    
  // check if item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    // console.log('checking cart item', cartItem)
  // if there is a cart item that already exists
    if (cartItem) {
    
      const newCart = [...cart].map(item => {
        // updating amount for existing if id matches
        if (item.id === id) {
          return {...item, amount: cartItem.amount + 1};
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      // whats already in the cart + new item
      setCart([...cart, newItem]);
    }
    console.log('current cart', cart)
  }
  // remove everything from cart
  const removeFromCart = (id) => {
    // return the items that don't match the id
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart);
  }

  // clear cart
  const clearCart = () => {
    setCart([]);
  }

  // increase amount
  const increaseAmount = (id) => {
    const item = cart.find(item => item.id === id);
    addToCart(item, id);
    
  }

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return {...item, amount: cartItem.amount - 1}
        } else {
          return item
        }
      })
      setCart(newCart);
      
    } 
      
    if (cartItem.amount < 2) {
        removeFromCart(id)
    }
  }

  return <CartContext.Provider value={{ 
    cart, 
    addToCart, 
    removeFromCart, 
    clearCart, 
    increaseAmount, 
    decreaseAmount, 
    itemAmount,
    totalPrice
  }}>
    {children}</CartContext.Provider>;
};

export default CartProvider;
