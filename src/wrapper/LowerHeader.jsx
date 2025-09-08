import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiHomeCircle } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Dropdown from '../components/Dropdown';
import HeaderData from '../api/HeaderData.json';
const LowerHeader = () => {
  const { homeLinks, aboutLinks, propertyLinks, newsLinks } = HeaderData;
  return (
    <header className='raltive flex justify-around items-center h-30 bg-white text-gray-900'>
      <div className=' flex items-center text-4xl space-x-2 font-bold overflow-hidden'>
        <span className='text-4xl text-orange-600 font-bold'><BiHomeCircle /></span>
        <h1>Quarter</h1>
      </div>
      <nav className='relative flex items-center space-x-65'>
        <div className='flex items-center space-x-8  '>
          {homeLinks && <Dropdown title="Home+" links={homeLinks} />}
          {aboutLinks && <Dropdown title="About+" links={aboutLinks} />}
          {propertyLinks && <Dropdown title="Property+" links={propertyLinks} />}
          {newsLinks && <Dropdown title="News+" links={newsLinks} />}

          <NavLink className='hover:text-orange-600' to="/pages">Pages+</NavLink>
          <NavLink className='hover:text-orange-600' to="/contact">Contact</NavLink>
        </div>
        <div className='flex items-center space-x-2 '>
          <NavLink className='bg-white shadow-blue-100 shadow-lg  py-5 px-4 hover:bg-orange-600 ' to="/search">
            <IoSearchSharp />
          </NavLink>
          <NavLink className='bg-white shadow-blue-100 shadow-lg  py-5 px-4 hover:bg-orange-600' to="/loginform">
            <FaUser />
          </NavLink>
          <NavLink className='bg-white shadow-blue-100 shadow-lg  py-5 px-4 hover:bg-orange-600' to="/salespropty">
            <FaShoppingCart />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
export default LowerHeader

