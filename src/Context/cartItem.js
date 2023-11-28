import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "./ShopContext";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const [inputValue, setInputValue] = useState(cartItems[id] || 0);
  useEffect(() => {
    setInputValue(cartItems[id] || 0);
  }, [cartItems[id]]);

  const handleInputChange = (e) => {
    const newValue = Number(e.target.value);
    setInputValue(newValue);
    updateCartItemCount(newValue, id);
  };

  return (
    <>
      <div className="cartItem">
        <img src={productImage} />
        <div className="description">
          <div>
            <p>
              <b>{productName}</b>
            </p>

            <div className="countHandler">
              <button onClick={() => removeFromCart(id)}> - </button>
              <input
                value={inputValue}
                onChange={handleInputChange}
              />
              <button onClick={() => addToCart(id)}> + </button>
            </div>
          </div>
          <div className="price">
            <p> Price: ${price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
