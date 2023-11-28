import React from 'react'
import "./shop.css"
import { PRODUCTS } from './Products';
import Product from './product';
import Navbar1 from '../Navbar/Navbar1';
const Shop = () => {
    return (
      <>
      <Navbar1/>
      <div className="shop">
        <div className="shopTitle">
          <h1>Samsung Shop</h1>
          <p></p>
        </div>
        
        <div className="shopTitle">
          <h1>This Week's Highlights</h1>
        </div>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
      </>
    );
  };
  export default Shop;