import React from 'react'
import { BiHomeCircle } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import { FiPhoneCall } from "react-icons/fi";
import { TiMail } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { NavLink } from 'react-router'
const StateFooter = () => {
  return (
    <div className='text-white'>
      <div className='flex items-center'>
        <BiHomeCircle className=" text-5xl text-orange-600"/>
      <h1 className='text-2xl font-bold'>Quarter</h1>
      </div>
      <div className='w-70 mt-1.5 leading-6.5'>
        <p>
         Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
         </p>
      </div>
      <div className='flex flex-col gap-4 mt-7'>
        <div className='flex items-center gap-2.5'>
        <VscLocation className='text-xl' />
        <h1>Lahore, Karachi, Islambad</h1>
      </div>
      <div className='flex items-center gap-2.5 hover:text-orange-600'>
        <FiPhoneCall className='text-xl' />
        <NavLink className="hover:text-orange-600" to='tel:923013928713'><h1>0301-3928713</h1></NavLink>
      </div>
      <div className='flex items-center gap-2.5 hover:text-orange-600'>
        <TiMail className='text-xl' />
        <NavLink className="hover:text-orange-600" to="https://email.com"><h1>example@example.com</h1></NavLink>
      </div>
      </div>
      <div className='flex gap-5.5 mt-7'>
        <NavLink className="hover:text-orange-600" to="https://facebook.com" target="_blank"><FaFacebookF className='' /></NavLink>
        <NavLink className="hover:text-orange-600" to="https://twitter.com" target="_blank"><FaTwitter className=''/></NavLink>
        <NavLink className="hover:bg-orange-600" to="https://linkidIn.com" target="_blank"><FaLinkedinIn  className='bg-white text-gray-950 hover:bg-orange-600' /></NavLink>
        <NavLink className="hover:text-orange-600" to="https://youtube.com" target="_blank"><IoLogoYoutube className='' /></NavLink>
        
      </div>
    </div>
  )
}

export default StateFooter