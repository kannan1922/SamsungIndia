import React,{useContext}from 'react'
import { ShopContext } from '../Context/ShopContext';
import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react";
import "./Navbar1.css"

 const Navbar1 = () => {
  const { cartItems,checkout,getCount } = useContext(ShopContext);
const totalNumber=getCount();
  return (
    <div className="navbar12">
      <div className='links1'>
      <Link to="/home">Home</Link>
      </div>
      <div className="links">
      
        <Link to="/feedback">feedback</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        
        </Link>
        <p className='batch' >{totalNumber}</p>
      </div>
    </div>
  );
};
export default Navbar1;