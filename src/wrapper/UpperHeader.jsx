import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { NavLink } from "react-router-dom";


const UpperHeader = () => {
    return (

        <header className='flex items-center justify-around h-10 w-full  bg-gray-800 text-white'>
            <div className='flex items-center gap-x-6'>
                <div className='flex items-center gap-x-3'>
                    <span className='flex items-center text-orange-600 text-xl font-light'><CiMail /></span>
                    <a href="mailto:ahmadmughal9274@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover:text-orange-600'
                    >
                        info@webmail.com
                    </a>
                </div>
                <div className='flex items-center gap-x-3'>
                    <span className='flex items-center text-orange-600 text-xl font-light'><CiLocationOn /></span>
                    <NavLink className='hover:text-orange-600' to="/Nest">15/A Nest Tower NYC</NavLink>
                </div>
            </div>
            <div className='flex items-center gap-x-14'>
                <div className='flex items-center gap-x-3'>
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
                        <CiTwitter />
                    </a>
                    <a href="https://www.instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='hover:text-orange-600'
                    >
                        <CiInstagram />
                    </a>
                </div>
                <div className=" relative bg-orange-600 px-14 py-5">
                    <NavLink className="absolute inset-0 hover:bg-orange-500 flex justify-center items-center" to="/addlist">Add Listing</NavLink>
                </div>
            </div>
        </header>

    );
}

export default UpperHeader
