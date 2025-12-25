import React from 'react'
import { NavLink } from 'react-router'
const LowerFooter = () => {
  return (
    <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-between items-center h-20 pr-17 pl-17 bg-gray-900'>
      <div className=' text-white'>
        <h1>All Rights Reserved @ Company 2025</h1>
      </div>
      <div className='text-white space-x-8 '>
        <NavLink className="hover:text-orange-600 " to="/terms">Terms & Conditons</NavLink>
        <NavLink className="hover:text-orange-600 " to="/claim">Claim</NavLink>
        <NavLink className="hover:text-orange-600 " to="/privacy">Privacy & Policy</NavLink>
      </div>
    </div>
  )
}

export default LowerFooter
