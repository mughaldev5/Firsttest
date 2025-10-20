import React from 'react'
import { NavLink } from 'react-router'

const CompanyFooter = () => {
  return (
    <div className='flex flex-col text-white gap-6'>
      <h1 className='text-2xl font-bold text-white'>Company</h1>
      <NavLink className="relative pl-0 transition-all duration-300 ease-in-out hover:translate-x-10 hover:text-orange-500 before:content-['//'] before:absolute before:left-[-40px] before:opacity-0 hover:before:opacity-100 hover:before:text-orange-500 " to='/about'>About</NavLink>
      <NavLink className="relative pl-0 transition-all duration-300 ease-in-out hover:translate-x-10 hover:text-orange-500 before:content-['//'] before:absolute before:left-[-40px] before:opacity-0 hover:before:opacity-100 hover:before:text-orange-500 " to='/blog'>Blog</NavLink>
      <NavLink className="relative pl-0 transition-all duration-300 ease-in-out hover:translate-x-10 hover:text-orange-500 before:content-['//'] before:absolute before:left-[-40px] before:opacity-0 hover:before:opacity-100 hover:before:text-orange-500 " to='/allproduct'>All Products</NavLink>
      <NavLink className="relative pl-0 transition-all duration-300 ease-in-out hover:translate-x-10 hover:text-orange-500 before:content-['//'] before:absolute before:left-[-40px] before:opacity-0 hover:before:opacity-100 hover:before:text-orange-500 " to='/locationmap'>Locations Map</NavLink>
      <NavLink className="relative pl-0 transition-all duration-300 ease-in-out hover:translate-x-10 hover:text-orange-500 before:content-['//'] before:absolute before:left-[-40px] before:opacity-0 hover:before:opacity-100 hover:before:text-orange-500 " to='/faq'>FAQ</NavLink>
      <NavLink className="relative pl-0 transition-all duration-300 ease-in-out hover:translate-x-10 hover:text-orange-500 before:content-['//'] before:absolute before:left-[-40px] before:opacity-0 hover:before:opacity-100 hover:before:text-orange-500 " to='/contactus'>Contact us</NavLink>
    </div>
  )
}

export default CompanyFooter
