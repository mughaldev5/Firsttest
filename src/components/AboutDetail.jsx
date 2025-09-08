import React from 'react'
import { BiHomeCircle } from "react-icons/bi";
import { GiConcentricCrescents } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import { SiSecurityscorecard } from "react-icons/si";
const AboutDetail = ({ data }) => {
  const { id, img_url, title, para, design, sence, style, security, para1 } = data
  return (
    <div className=' flex h-lvh w-6xl m-auto pt-45 space-x-20 '>

      <div className='  border-15 border-white shadow-lg'>
        <img className='h-147 w-xl' src={img_url} alt="" />
      </div>
      <div className='w-2xl '>
        <div className='flex justify-center items-center bg-orange-100 h-8 w-32  rounded-2xl'>
          <h1 className='text-orange-600 items-center'>About Us</h1>
        </div>
        <div className='mt-3'>
          <h1 className='text-5xl font-bold text-gray-800'>{title}</h1>
        </div>
        <div className='w-116 text-gray-500 mt-6'>
          <p>{para}</p>
        </div>
        <div className='flex flex-wrap text-gray-800 font-bold mt-8 space-x-15 space-y-5'>
          <div className='flex items-center space-x-3'>
            <h2 className='flex items-center justify-center text-2xl font-bold h-10 w-10 text-orange-600 bg-orange-100 rounded-full'><BiHomeCircle /></h2>
            <h1>{design}</h1>
          </div>
          <div className='flex items-center space-x-3'>
            <h2 className='flex items-center justify-center font-bold h-10 w-10 text-orange-600 bg-orange-100 rounded-full'><GiConcentricCrescents /></h2>
            <h1>{sence}</h1>
          </div>
          <div className='flex items-center space-x-3 pt-4'>
            <h2 className='flex items-center justify-center text-2xl font-bold h-10 w-10 text-orange-600 bg-orange-100 rounded-full'><IoIosFitness /></h2>
            <h1>{style}</h1>
          </div>
          <div className='flex items-center space-x-3'>
            <h2 className='flex items-center justify-center font-bold h-10 w-10 text-orange-600 bg-orange-100 rounded-full'><SiSecurityscorecard /></h2>
            <h1>{security}</h1>
          </div>
        </div>
        <div className='flex items-center bg-orange-50 space-x-5 mt-6'>
          <div className='underline h-27 w-1.5 bg-orange-600'></div>
          <p className='w-2/3'>{para1}</p>
        </div>
        <div className="z-10 mt-5">
          <button className="relative overflow-hidden h-16 w-52 flex items-center justify-center uppercase  group bg-transparent hover:border hover:border-gray-500 ">
            <span className="relative z-10 text-white transition-colors duration-500 group-hover:text-black ">
              OUR SERVICE
           </span>
            <span className="absolute inset-0 bg-orange-600 transform translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-out z-0"></span>
          </button>
         </div>
      </div>
    </div>
  )
}

export default AboutDetail
