import React from 'react' 
import { FaChartArea } from "react-icons/fa";
 import { PiBuildingApartmentFill } from "react-icons/pi";
  import { PiCraneBold } from "react-icons/pi"; 
  import { FaCouch } from "react-icons/fa";

 const ProjectStatus = () => {

   return ( <div className='relative flex items-center justify-center 2xl:h-108 xl:h-108 lg:h-108 md:h-108 sm:h-108 h-180 w-full bg-gray-200 pt-16 overflow-hidden'> 
     <div className='flex items-center justify-between 2xl:flex-row xl:flex-row md:flex-row sm:flex-col flex-col 2xl:gap-40 xl:gap-40 lg:gap-25 md:gap-15 sm:gap-y-10 gap-y-4'>
     <div className='relative flex sm:flex-row flex-col 2xl:gap-40 xl:gap-40 lg:gap-25 md:gap-15 sm:gap-20'>
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
          </div>
           
           <div className='relative flex sm:flex-row flex-col 2xl:gap-40 xl:gap-40 lg:gap-25 md:gap-15 sm:gap-20'>
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
       <FaCouch /> </div> <div className=' font-bold space-y-        4 text-gray-800'> 
       <h1 className='flex justify-center text-3xl font-bold space-y-4'>340+</h1>
        <h1>Apartio Rooms</h1>
         </div> 
         </div>
         </div> 
         </div> 
         </div>
          ) };

 export default ProjectStatus