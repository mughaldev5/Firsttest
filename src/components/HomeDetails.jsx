import React from 'react'
import { MdBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { BsTextarea } from "react-icons/bs";

const HomeDetails = ({ data }) => {
  const { id, title, para, live, boat, stylemusic, music, rom, rom1, parking, square, img_url, img_url1, img_url2, img_url3, img_url4, img_url5 } = data
  return (
    <div className='relative flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-center md:items-center sm:items-center items-center pt-30 sm:space-x-15 md:space-x-15 md:gap-y-6 sm:gap-y-6 gap-y-6 overflow-hidden'>
      <div className='relative 2xl:w-xl xl:w-xl lg:w-110 md:w-116 sm:w-108 w-87  '>
        <div className='flex justify-center items-center bg-orange-100 h-8 w-32  rounded-2xl'>
          <h1 className='text-orange-600 items-center'>About Us</h1>
        </div>
        <div className='mt-3'>
          <h1 className='2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-3xl font-bold text-gray-800'>{title}</h1>
        </div>
        <div className='2xl:w-116 xl:w-116 lg:w-116 md:w-116 sm:w-103 w-85 text-gray-400 mt-6'>
          <p>{para}</p>
        </div>
        <div className='flex flex-col text-gray-400  mt-6 space-y-4'>
          <div className='flex items-center space-x-3'>
            <div className='underline h-0.5 w-5 bg-orange-500'></div>
            <h1>{live}</h1>
          </div>
          <div className='flex items-center space-x-3'>
            <div className='underline h-0.5 w-5 bg-orange-500'></div>
            <h1>{boat}</h1>
          </div>
          <div className='flex items-center space-x-3 '>
            <div className='underline h-0.5 w-5 bg-orange-500'></div>
            <h1>{stylemusic}</h1>
          </div>
          <div className='flex items-center space-x-3'>
            <div className='underline h-0.5 w-5 bg-orange-500'></div>
            <h1>{music}</h1>
          </div>
        </div>
        <div className='flex sm:space-x-4 md:space-x-4 space-x-2 mt-6'>
          <div className='flex items-center justify-center text-gray-400 '>
            <div className='flex flex-col justify-center'>
              <h1 className='flex items-center sm:font-bold md:font-bold'>3<MdBed /></h1>
              <p className=''>{rom}</p>
            </div>
          </div>
          <div className='flex items-center justify-center text-gray-400 sm:space-x-4 md:space-x-4 space-x-2 '>
            <div className='underline h-15 w-0.5 bg-gray-400'></div>
            <div>
              <h1 className='flex items-center sm:font-bold md:font-bold'>2<FaBath /></h1>
              <p className=''>{rom1}</p>
            </div>
          </div>
          <div className='flex items-center justify-center text-gray-400 sm:space-x-4 md:space-x-4 space-x-2'>
            <div className='underline h-15 w-0.5 bg-gray-400'></div>
            <div>
              <h1 className='flex items-center sm:font-bold md:font-bold space-x-2'>2 <FaCar /></h1>
              <p className=''>{parking}</p>
            </div>
          </div>
          <div className='flex items-center justify-center text-gray-400 sm:space-x-4 md:space-x-4 space-x-2'>
            <div className='underline h-15 w-0.5 bg-gray-400'></div>
            <div>
              <h1 className='flex items-center font-boldsm:font-bold md:font-bold'>3450<BsTextarea /></h1>
              <p className=''>{square}</p>
            </div>
          </div>
        </div>
        <div className='relative flex space-x-2 mt-7 '>
          <div className='sm:size-45 md:size-45 size-36'>
            <img src={img_url3} alt="HOuse" />
          </div>
          <div className='sm:size-39 md:size-39 size-30'>
            <img src={img_url4} alt="HOuse" />
          </div>
          <div className='sm:size-45 md:size-45 size-36'>
            <img src={img_url5} alt="HOuse" />
          </div>
        </div>
      </div>
      <div className='relative h-148 2xl:w-xl xl:w-xl lg:w-110 md:w-110 sm:w-102 w-98 flex overflow-hidden border-15 md:border-15 sm:border-15 border-white shadow-lg gap-1'>
        <div className='flex flex-col w-1/2 h-full'>
          <img className=' h-full' src={img_url2} alt="House" />
        </div>
        <div className='flex flex-col w-1/2  gap-1'>
          <img className="h-1/2 w-full object-cover"
            src={img_url4} alt="House" />
          <img className="h-1/2 w-full object-cover"
            src={img_url1} alt="House" />
        </div>
      </div>
    </div>
  )
}

export default HomeDetails
