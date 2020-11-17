import React from 'react';
import { useSelector } from 'react-redux';

const Cart: React.FC = () => {
  const cart = useSelector((state) => state);

  console.log(cart);

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody />
    </table>
  );
};

export default Cart;
