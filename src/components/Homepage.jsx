import React from 'react'
import { NavLink } from 'react-router'

const Homepage = () => {
  return (
    <div className='relative flex flex-col h-dvh w-full overflow-hidden mt-6'>
    <div className='flex flex-col items-center justify-center mt-22  overflow-hidden'>
         <div className='flex justify-center items-center bg-orange-50 h-8 w-45 overflow-hidden rounded-2xl'>
         <h1 className='text-orange-600 items-center'>Apartment Sketch</h1>
         </div>
         <div className='mt-8 overflow-hidden'>
       <h1 className='text-5xl font-bold text-gray-800 overflow-hidden'>
        Apartments Plan
         </h1>
         </div>
     </div>
    <div className='flex justify-center w-full mt-20 space-x-16 overflow-hidden'>
      <NavLink to='/thestudio'>The Studio</NavLink>
      <NavLink to='/deluxeportion'>Deluxe Portion</NavLink>
      <NavLink to='/penthouse'>Penthouse</NavLink>
      <NavLink to='/topgarden'>Top Garden</NavLink>
      <NavLink to='/doubleheight'>Double Height </NavLink>
    </div>
    </div>
  )
}

export default Homepage
