import React, { useState, useEffect} from 'react'
import HomeData from '../api/HomeData.json'
import PropertyRentCard from './PropertyRentCard'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { data } from 'react-router';
const PropertyRentMap = () => {

 const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const totalCards = HomeData.homerent.length;

  const nextSlide = () => {
    
      setCurrentIndex(currentIndex === totalCards-1 ? 0 : currentIndex + 1);
      };

  const prevSlide = () => {
     
      setCurrentIndex(currentIndex === 0 ? totalCards-1 : currentIndex - 1);
    
  };

  return (
    
      <div className='relative flex  justify-center h-11/12 w-full bg-white overflow-hidden'>
      <div className='absolute flex flex-col items-center justify-center mt-28  overflow-hidden'>
         <div className='flex justify-center items-center bg-orange-100 h-8 w-32 overflow-hidden rounded-2xl'>
         <h1 className='text-orange-600 items-center'>Properties</h1>
         </div>
         <div className='mt-8 overflow-hidden'>
       <h1 className='text-5xl font-bold text-gray-800 overflow-hidden'>
        Featured Listings
         </h1>
         </div>
     </div>
     <div className="relative w-full overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-3/4 -translate-y-1/2 z-10 p-3 bg-white shadow-lg rounded-full hover:bg-orange-600 hover:text-white"
      >
        <FaArrowLeft />
      </button>

      {/* Slider Track */}
      <div className="flex transition-transform duration-500 "
        style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
       
      >
        {HomeData.homerent.map((curElem) => (
            
          <div key={curElem.id}  className='flex items-center justify-center flex-shrink-0 w-1/3 mt-75 overflow-hidden '>
         <PropertyRentCard  data={curElem} />
         </div>
         
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-3/4 -translate-y-1/2 z-10 p-3 bg-white shadow-lg rounded-full hover:bg-orange-600 hover:text-white"
      >
        <FaArrowRight />
      </button>
    </div>
     </div>
    
  )
}

export default PropertyRentMap
