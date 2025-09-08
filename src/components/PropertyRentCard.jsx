import React from 'react'
import { MdBed } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { BsTextarea } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { IoCameraSharp } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { BsArrowsAngleContract } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
const iconMap = {
  MdBed,
  FaBath,
  IoLocation,
  IoCameraSharp,
  MdLocalMovies,
  BsArrowsAngleContract,
  IoHeartOutline,
  IoIosAddCircleOutline,
  BsTextarea,
};
const PropertyRentCard = ({ data }) => {
  const { id, img_url, req, location, locationicon, cameraicon, videoicon, price, title, para, rom, roomicon, rom1icon, rom1, squareicon, square, img_url1, name, profetion, icon1, icon2, icon3 } = data;

  const RoomIcon = iconMap[roomicon];
  const BathIcon = iconMap[rom1icon];
  const SquareIcon = iconMap[squareicon];
  const LocationIcon = iconMap[locationicon];
  const CameraIcon = iconMap[cameraicon];
  const VideoIcon = iconMap[videoicon];
  const Icon1 = iconMap[icon1];
  const Icon2 = iconMap[icon2];
  const Icon3 = iconMap[icon3];
  return (
    <div className='relative flex flex-col h-162 w-105 bg-white shadow-gray-300 shadow-lg space-y-4 overflow-hidden'>
      <div className='relative h-68 w-105 '>
        <div className='absolute h-full w-full overflow-hidden'>
          <img src={img_url} alt="house" />
        </div>
        <div className='absolute top-5 right-6 flex items-center justify-center overflow-hidden bg-green-400 h-7 w-25 text-sm text-white'>
          <h1>{req}</h1>
        </div>
        <div className='absolute bottom-3 left-1 flex items-center justify-between w-full overflow-hidden'>
        <div className=' flex items-center text-white '>
          <h2 className='font-extrabold text-xl'>{LocationIcon && <LocationIcon/>}</h2>
          <h1>{location}</h1>
        </div>
        <div className=' flex items-center justify-center  space-x-2 mr-3 text-white overflow-hidden '>
          <h1 className='flex items-center bg-gradient-to-t from-white/70 to-transparent px-2 py-1.5 text-sm hover:text-orange-600'> {CameraIcon && <CameraIcon/>}4</h1>
          <h1 className='flex items-center bg-gradient-to-t from-white/60 to-transparent px-2 py-1.5 text-sm hover:text-orange-600'> {VideoIcon && <VideoIcon/>}2</h1>
        </div>
        </div>
      </div>
      <div className='relative flex flex-col  overflow-hidden'>
        <div className='flex items-end text-orange-600 mt-3 ml-5 overflow-hidden'>
          <h1 className='font-bold'>{price}</h1>
          <span className='text-sm'>/Month</span>
        </div>
        <div className='flex mt-2 ml-5'>
          <h1 className='text-2xl font-bold text-gray-800'>{title}</h1>
        </div>
        <div className='flex text-gray-400 mt-4 ml-5 w-80'>
          <p>{para}</p>
        </div>
        <div className='flex space-x-4 mt-6 ml-5'>
          <div className='flex items-center justify-center text-gray-400 '>
            <div className='flex flex-col justify-center'>
              <h1 className='flex items-center font-bold'>3{RoomIcon && <RoomIcon/>}</h1>
              <p className=''>{rom}</p>
            </div>
          </div>
          <div className='flex items-center justify-center text-gray-400 space-x-4 '>
            <div className='underline h-15 w-0.5 bg-gray-400'></div>
            <div>
              <h1 className='flex items-center font-bold'> 2 {BathIcon && <BathIcon />}</h1>
              <p className=''>{rom1}</p>
            </div>
          </div>
          <div className='flex items-center justify-center text-gray-400 space-x-4'>
            <div className='underline h-15 w-0.5 bg-gray-400'></div>
            <div>
              <h1 className='flex items-center font-bold'>3450{SquareIcon && <SquareIcon/>}</h1>
              <p className=''>{square}</p>
            </div>
          </div>
        </div>
        <hr className='mt-4 text-gray-200'/>
        <div className='relative flex items-center justify-between mt-2 h-20 overflow-hidden'>
          <div className='flex space-x-1.5 ml-2'>
            <div>
              <img  className='flex h-12 w-12 rounded-full' src={img_url1} alt="Agent" />
            </div>
            <div className='flex flex-col space-x-1 '>
              <h1 className='font-bold'>{name}</h1>
              <h1 className='text-xm text-gray-400'>{profetion}</h1>
            </div>
          </div>
          <div className=' flex items-center absolute right-4 space-x-2 '>
            <div className='flex items-center justify-center h-10 w-10  bg-white shadow-lg hover:bg-orange-600 hover:text-white'>
              <p>{Icon1 && <Icon1/>}</p>
            </div>
            <div className='flex items-center justify-center h-10 w-10  bg-white shadow-lg hover:bg-orange-600 hover:text-white'>
            <p>{Icon2 && <Icon2/>}</p>
            </div>
            <div className='flex items-center justify-center  h-10 w-10  bg-white shadow-lg hover:bg-orange-600 hover:text-white'>
            <p>{Icon3 &&<Icon3/>}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyRentCard
