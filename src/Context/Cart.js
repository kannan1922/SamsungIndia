import React,{useContext}from 'react'
import { ShopContext } from './ShopContext';
import { PRODUCTS } from './Products';
import { CartItem } from './cartItem';
import { useNavigate } from "react-router-dom";
import "./cart.css"
const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout,getCount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
const totalNumber=getCount();
  const navigate = useNavigate();

  return (
    <div className="cart">
       {totalAmount > 0?(  <div className="titel">
        <h1>Your Cart Items</h1>
      </div>):''}
     

      <div className='wrap'>
    
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
           <div className="cart-Items1">Total</div>
           <div className='total'> Total: ${totalAmount} </div>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              // navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
        
      ) : (
        <div className="checkout1" >
        <h1 className="empty"> Your Shopping Cart is Empty</h1>
        <button className='shop1' onClick={() => navigate("/shop")}> Continue Shopping </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart
