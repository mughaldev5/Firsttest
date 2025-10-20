import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
const NewsletterFooter = () => {
  return (
    <div className='flex flex-col text-white gap-6'>
     <h1 className='text-2xl text-white font-bold'>Newsletter</h1>
     <div className='w-78'>
        <p>
           Subscribe to our weekly Newsletter and re-ceive updates via email.
        </p>
     </div>
     <div className='flex justify-between bg-white h-17 w-78 '>
        <input className='text-gray-500 ml-6 w-57.5 outline-none' type="email" placeholder='email*' />
        <button className='bg-orange-600 w-14 text-white flex items-center justify-center'><FaLocationArrow /></button>
     </div>
     <div>
        <h1 className='text-2xl font-bold'>We Accept</h1>
     </div>
     <div>
        <img  src="image/payment-4.png" alt="payment company" />
     </div> 
    </div>
  )
}

export default NewsletterFooter
