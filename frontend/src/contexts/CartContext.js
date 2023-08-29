import React, { createContext, useState, useEffect } from 'react';
import GetCookie from '../hooks/getCookie';
import SetCookie from '../hooks/setCookie';
import RemoveCookie from '../hooks/removeCookie';
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);

  // save cart button
  // const [saveCart, setSaveCart] = useState([]);

  // item amount state
  const [itemAmount, setItemAmount] = useState(0);

  // total price
  const [totalPrice, setTotalPrice] = useState(0);

  // change amount when cart changes

  useEffect(() => {
    try {
      if (JSON.parse(GetCookie('cart')) !== undefined) {
        setCart(JSON.parse(GetCookie('cart')))
        console.log('cart on refresh', cart)
      } else {
        console.log('no cookie')
      }
    } catch {
      console.log('error')
    }
  }, [])


  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0)
    setItemAmount(amount);

    console.log('save cart:', cart)
    SetCookie('cart', JSON.stringify(cart));

  }, [cart])

  
  // change price when amount changes
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem.price * currentItem.amount);
    }, 0)
      setTotalPrice(total);
  }, [itemAmount])

  // name and id are placeholders here for the real ones
  const addToCart = async(product, id) => {

    // get the cookies
    // find the product in the cookies if it's there

    const cartItem = cart.find((item) => {
      return item.id === id;
    })

    if (cartItem) {
      const newCart = [...cart].map(item => {
        
        if (item.id === id) {
          return {...item, amount: cartItem.amount + 1};
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      const newItem = {...product, amount: 1};
      setCart([...cart, newItem]);
    }
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
    setCart,
    addToCart, 
    removeFromCart, 
    clearCart, 
    increaseAmount, 
    decreaseAmount, 
    itemAmount,
    totalPrice,
  }}>
    {children}</CartContext.Provider>;
};

export default CartProvider;
