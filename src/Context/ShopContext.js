import { createContext, useEffect, useState } from "react";
import { PRODUCTS} from "./Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
// const getCount = () => {
//   let count=0;
//   for (let i = 1; i < PRODUCTS.length + 1; i++) {
//     cart[i] += count;
//   }
//   return count;
// };




const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getCount = () => {
    let count=0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        count += cartItems[item];
      }
    }
    return count;
  };



  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newCount, itemId) => {
    newCount = Math.max(0, newCount);
    newCount = isNaN(newCount) ? 0 : newCount;
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [itemId]: newCount,
    }));
  };
  

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    getCount
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;