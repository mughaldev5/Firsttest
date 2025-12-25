import React from 'react'
import { NavLink } from 'react-router'
const CustomercareFooter = () => {
  return (
    <div className='flex flex-col text-white gap-6'>
     <h1 className='text-2xl font-bold text-white'>Customer Care</h1>
      <NavLink className="relative pl-0 transition-all duration-300 ease-in-out hover:translate-x-10 hover:text-orange-500 before:content-['//'] before:absolute before:left-[-40px] before:opacity-0 hover:before:opacity-100 hover:before:text-orange-500 " to="/login">Login</NavLink>
      <NavLink className="relative pl-0 transition-all duration-300 ease-in-out hover:translate-x-10 hover:text-orange-500 before:content-['//'] before:absolute before:left-[-40px] before:opacity-0 hover:before:opacity-100 hover:before:text-orange-500 " to="/myaccount">My Account</NavLink>
      <NavLink className="relative pl-0 transition-all duration-300 ease-in-out hover:translate-x-10 hover:text-orange-500 before:content-['//'] before:absolute before:left-[-40px] before:opacity-0 hover:before:opacity-100 hover:before:text-orange-500 " to="/ordert">Wish List</NavLink>
      <NavLink className="relative pl-0 transition-all duration-300 ease-in-out hover:translate-x-10 hover:text-orange-500 before:content-['//'] before:absolute before:left-[-40px] before:opacity-0 hover:before:opacity-100 hover:before:text-orange-500 " to="/ordertracking">Order Tracking</NavLink>
      <NavLink className="relative pl-0 transition-all duration-300 ease-in-out hover:translate-x-10 hover:text-orange-500 before:content-['//'] before:absolute before:left-[-40px] before:opacity-0 hover:before:opacity-100 hover:before:text-orange-500 " to="/faq">FAQ</NavLink>
      <NavLink className="relative pl-0 transition-all duration-300 ease-in-out hover:translate-x-10 hover:text-orange-500 before:content-['//'] before:absolute before:left-[-40px] before:opacity-0 hover:before:opacity-100 hover:before:text-orange-500 " to="/contactus">Contact us</NavLink> 
    </div>
  )
};

export default CustomercareFooter ;
