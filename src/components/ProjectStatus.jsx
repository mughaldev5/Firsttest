import React from 'react'
import { FaChartArea } from "react-icons/fa";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { PiCraneBold } from "react-icons/pi";
import { FaCouch } from "react-icons/fa";
const ProjectStatus = () => {
    return (
        <div className='flex items-center justify-center h-108 w-full bg-gray-200 pt-16 mt-28'>
            <div className='flex items-center justify-between w-4xl m-auto'>
                <div className='flex flex-col justify-center space-y-4'>
                    <div className='flex justify-center text-6xl font-bold text-orange-600'>
                        <FaChartArea />
                    </div>
                    <div className=' font-bold space-y-4 text-gray-800'>
                        <h1 className='flex justify-center text-3xl font-bold space-y-4'>560+</h1>
                        <h1>Total Area Sq</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center space-y-4'>
                    <div className='flex justify-center text-6xl font-bold text-orange-600'>
                        <PiBuildingApartmentFill />
                    </div>
                    <div className='font-bold space-y-4 text-gray-800'>
                        <h1 className='flex justify-center text-3xl font-bold space-y-4'>197K+</h1>
                        <h1>Apartments Sold</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center space-y-4'>
                    <div className='flex justify-center text-6xl font-bold text-orange-600'>
                        <PiCraneBold />
                    </div>
                    <div className=' font-bold space-y-4 text-gray-800'>
                        <h1 className='flex justify-center text-3xl font-bold space-y-4'>268+</h1>
                        <h1>Total Contructions</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center space-y-4'>
                    <div className='flex justify-center text-6xl font-bold text-orange-600'>
                        <FaCouch />
                    </div>
                    <div className=' font-bold space-y-4 text-gray-800'>
                        <h1 className='flex justify-center text-3xl font-bold space-y-4'>340+</h1>
                        <h1>Apartio Rooms</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProjectStatus
