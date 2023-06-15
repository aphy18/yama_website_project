import React from 'react';

const CartItem = ({ item }) => {
  const { name, amount, quantity, price } = item
  return <div>{name}</div>;
};

export default CartItem;
