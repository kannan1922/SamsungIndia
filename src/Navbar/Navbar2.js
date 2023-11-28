import React,{useContext}from 'react'
import { ShopContext } from '../Context/ShopContext';
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar1.css"

 const Navbar2 = () => {
    const { getCount } = useContext(ShopContext);
  const totalNumber=getCount();
  return (
    <div className="navbar13">
      <div className='links1'>
      <Link to="/home">Home</Link>
      </div>
      <div className="links">
      
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <p className='batch' >{totalNumber}</p>
      </div>
    </div>
  );
};
export default Navbar2;