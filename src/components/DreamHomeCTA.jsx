import React from 'react'
import { FaArrowRightLong} from "react-icons/fa6";

const DreamHomeCTA = () => {
  return (
    <div className='absulote bottom-0 left-0 right-0 mx-auto flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-between items-center h-50 2xl:w-7xl xl:w-6xl lg:w-5xl md:w-4xl pr-18 pl-18 bg-orange-600 shadow-lg z-20 -mb-25'>
      <div className='flex flex-col gap-4'>
        <div className='text-3xl text-white font-bold'>
            <h1>Looking for a dream home?</h1>
        </div>
        <div className='text-gray-50'>
            <p>We can help you realize your dream of a new home </p>
        </div>
      </div>
      <div>
        <div className=" z-10">
  <button className="relative overflow-hidden h-14 w-60 flex items-center justify-center font-sans  group bg-black hover:border hover:border-gray-500 ">
    <span className="relative flex justify-center items-center text  gap-1 z-10 text-black transition-colors duration-500 group-hover:text-white  ">
      Explore Properties <span className='text-gray-700'><FaArrowRightLong /></span>
    </span>
    <span className="absolute inset-0 bg-white transform translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-out z-0"></span>
  </button>
</div>
      </div>
    </div>
  )
};

export default DreamHomeCTA ;
