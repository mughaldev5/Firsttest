import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { BsFillTagFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const iconMap = {
    FaRegUser,
    BsFillTagFill,
    FaCalendarAlt,
  
};
const PropertyDemandCard = ({data, active, setActive}) => {
    const {id, img_url, admin, fillheading, paratitle, date, read, usericon, fillicon, calendericon, } = data
    const isActive = active === id;
    const UserIcon = iconMap[usericon];
    const FillIcon = iconMap[fillicon];
    const CalenderIcon = iconMap[calendericon];
  return (
    <div
    onMouseEnter={() => setActive(id)}
     className='relative flex flex-col bg-white shadow-lg h-117 w-88'>
      <NavLink to="/NewDetail"> 

        <img className={`w-full h-60 object-cover transform transition-transform duration-300 ${ isActive ? "scale-105" : "scale-100"} `} src={img_url} alt="house" />
      </NavLink>
      <div className='flex flex-col mt-8 ml-6 gap-3'>
      <NavLink className='flex items-center gap-13' to="/">
        <div className='flex items-center gap-1.5'>
          <p className='flex text-orange-600'>
            {UserIcon && <UserIcon/>}
          </p>
         <h1 className='flex hover:text-orange-600 gap-1'>by: <span>{admin}</span></h1>
        </div>
        <div className='flex items-center gap-1.5'>
          <p className='flex text-orange-600'>
            {FillIcon && <FillIcon/>}
          </p>
          <h1 className='flex hover:text-orange-600'>{fillheading}</h1>
        </div>
      </NavLink>
      <NavLink className='flex text-2xl font-bold text-gray-800' to="/newdetail">
        <h1>
          {paratitle}
        </h1>
      </NavLink>
      <div className='underline h-0.5 w-78 bg-gray-200 flex justify-center mt-3'></div>
      <div className='relative flex items-center justify-between mt-3'>
          <div className='flex items-center gap-1.5'>
            <p className='flex text-orange-600'>
            {CalenderIcon && <CalenderIcon/>}
          </p>
          <p>{date}</p>
          </div>
          <NavLink className='flex text-orange-600' to="/newdetail">
          <h1>{read}</h1>
          </NavLink>
        </div>
        </div>
    </div>
  )
}

export default PropertyDemandCard
