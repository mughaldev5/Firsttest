import React from 'react'
import { IoCarSportOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { RiHomeHeartLine } from "react-icons/ri";
import { MdOutlineKingBed } from "react-icons/md";
import { TbBooks } from "react-icons/tb";
import { LiaStethoscopeSolid } from "react-icons/lia";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { NavLink } from 'react-router';

const iconMap ={
  IoCarSportOutline,
  HiMiniBuildingOffice2,
  IoIosArrowRoundForward,
  RiHomeHeartLine,
  MdOutlineKingBed,
  TbBooks,
  LiaStethoscopeSolid,
  IoShieldCheckmarkOutline,
  LiaSwimmingPoolSolid,
};
const FacilityCard = ({data,}) => {
  const {title,  arrowicon, icon} =data
  const Icon = iconMap[icon];
  const ArrowIcon = iconMap[arrowicon];
  
  return (
    <div
     className='relative group flex items-center justify-center 2xl:h-65 xl:h-65 lg:h-58 md:h-58 sm:h-55 h-55 2xl:w-70 xl:w-70 lg:w-60 md:w-50 sm:w-60 w-60 rounded-2xl  shadow-lg bg-white  hover:bg-orange-600 cursor-pointer'>
      
   <NavLink
      to="/PropertyDetails"
    >
      <div className="flex flex-col items-center 2xl:mt-10 xl:mt-10 lg:mt-15 md:mt-15 sm:mt-15 mt-15 gap-y-7">
        <p className="flex items-center justify-center text-5xl 2xl:h-27 xl:h-27 lg:h-21 md:h-17 sm:h-15 h-15 2xl:w-26 xl:w-26 lg:w-21 md:w-17 sm:w-15 w-15 rounded-full text-orange-600 bg-orange-50">
          {Icon && <Icon  />}
        </p>
        <h1 className='lg:text-2xl md:text-xl font-bold group-hover:text-white transition-colors duration-300'>{title}</h1>
      </div>
      <p className="flex items-center justify-center text-3xl h-12 w-12 bg-white shadow-lg rounded-full top-[calc(260px-24px)] left-0 right-0 mx-auto mt-10 text-gray-500 group-hover:text-orange-500 transition-colors duration-300">
      {ArrowIcon && <ArrowIcon  />}
      </p>
    </NavLink>     
    
    </div>
  )
}

export default FacilityCard
