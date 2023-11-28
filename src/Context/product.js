
import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
const Product = (props)=> {
  const { addToCart, cartItems } = useContext(ShopContext);
  const {id,productName,price,productImage}=props.data;
  const cartItemCount = cartItems[id];

  return (
    <div className="bg">
    <div className='product'>
        <img className="image" src={productImage}/>
        <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₹{price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart 
        {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
        </div>
    </div>
    </div>
  )
}

export default Product