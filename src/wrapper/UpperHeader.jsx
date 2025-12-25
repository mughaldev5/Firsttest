import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LuDribbble } from "react-icons/lu";
import { NavLink } from "react-router-dom";


const UpperHeader = () => {
    return (

        <header className='relative flex flex-col justify-center items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-row 2xl:items-center xl:items-center lg:items-center md:items-center 2xl:justify-around xl:justify-around lg:justify-around md:justify-evenly 2xl:h-10 xl:h-10 lg:h-10 md:h-10 h-35 pb-15 2xl:pb-0 xl:pb-0 lg:pb-0 md:pb-0 gap-1.5 w-full font-sans font-medium bg-gray-800 text-white '>
            <div className='relative flex justify-center items-center gap-6 2xl:right-10 xl:right-10'>
                <div className='flex items-center gap-3'>
                    <span className='flex items-center text-orange-600 text-lg font-extrabold'><MdOutlineEmail /></span>
                    <NavLink to="mailto:ahmadmughal9274@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover:text-orange-600'
                    >
                        info@webmail.com
                    </NavLink>
                </div>
                <div className='flex items-center gap-x-3'>
                    <span className='flex items-center text-orange-600 text-lg font-extrabold'><MdOutlineLocationOn /></span>
                    <NavLink className='hover:text-orange-600' to="/Nest">15/A Nest Tower NYC</NavLink>
                </div>
            </div>
            <div className='relative flex justify-center items-center gap-x-8 2xl:left-10 xl:left-10 '>
                <div className='flex items-center gap-x-4'>
                    <a href="https://www.facebook.com/yourprofile"
                        target="_blank" rel="noopener noreferrer"
                        className='hover:text-orange-600'
                    >
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank"
                        rel="noopener noreferrer"
                        className='hover:text-orange-600'
                    >
                       <FaTwitter />
                    </a>
                    <a  href="https://www.instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover:text-orange-600 font-extrabold'
                    >
                        <FaInstagram />
                    </a>
                    <a  href="https://www.drbbble.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover:text-orange-600 font-extrabold'
                    >
                        <LuDribbble />
                    </a>
                </div>
                <div className=" relative bg-orange-600 2xl:px-15 2xl:py-5 xl:px-15 xl:py-5 lg:px-15 lg:py-5 md:py-5 md:px-15 py-5 px-15 ">
                    <NavLink className="absolute inset-0 hover:bg-orange-500 flex justify-center items-center" to="/addlist">Add Listing</NavLink>
                </div>
            </div>
        </header>

    );
}

export default UpperHeader
