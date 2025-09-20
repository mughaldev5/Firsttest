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
  const {id, title,  arrowicon, icon} =data
  const Icon = iconMap[icon];
  const ArrowIcon = iconMap[arrowicon];
  
  return (
    <div
     className='relative group flex items-center justify-center h-65 w-70 rounded-2xl  shadow-lg bg-white  hover:bg-orange-600 cursor-pointer'>
      
   <NavLink
      to="/PropertyDetails"
    >
      <div className="flex flex-col items-center mt-10 gap-y-7">
        <p className="flex items-center justify-center text-5xl h-27 w-27  rounded-full text-orange-600 bg-orange-50">
          {Icon && <Icon  />}
        </p>
        <h1 className='text-2xl font-bold group-hover:text-white transition-colors duration-300'>{title}</h1>
      </div>
      <p className="flex items-center justify-center text-3xl h-12 w-12 bg-white shadow-lg rounded-full top-[calc(260px-24px)] left-0 right-0 mx-auto mt-10 text-gray-500 group-hover:text-orange-500 transition-colors duration-300">
      {ArrowIcon && <ArrowIcon  />}
      </p>
    </NavLink>     
    
    </div>
  )
}

export default FacilityCard
