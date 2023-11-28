// CartPage.js
import React,{useContext} from 'react';
import Cart from './Cart';
import { ShopContext } from './ShopContext';
const CartPage = () => {
  const { cartItems } = useContext(ShopContext);

  if (!cartItems) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <Cart />
    </div>
  );
};

export default CartPage;
