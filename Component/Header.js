import React from 'react'
import Food from '../foodlogo.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName,setbtnName]=useState("Login")
  useEffect(()=>{

  },[btnName])
  return (
    <div className="Header">
    <div className="logo-container">
        <img className="logo" src={Food} alt="food App"/>
    </div> 
   <div className=" nav-Items">
      <ul>
        <li>
          <Link to='/'>Home</Link>
          </li>
        <li>
          <Link to='/About'>About</Link>  </li>
        <li> 
          <Link to='/contact'>Contact Us</Link></li>
        <li>
        <Link to='/cart'>Cart</Link></li>
        <button className="login" onClick={()=>{
          btnName=="Login"?setbtnName("Logout"):setbtnName("Login")
        }}>{btnName}</button>
      </ul>
   </div>
   </div>
  )
}

export default Header