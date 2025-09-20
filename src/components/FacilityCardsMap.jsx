import React from 'react'
import { data } from 'react-router';
import FacilityCard from './FacilityCard';



const homefacility= [
    {
      id:"0",
    icon:"IoCarSportOutline",
    title:"Parking Space",
    arrowicon:"IoIosArrowRoundForward"
    },
    {
      id:"1",
    icon:"LiaSwimmingPoolSolid",
    title:"Swimming Pool",
    arrowicon:"IoIosArrowRoundForward"
    },
    {
      id:"2",
    icon:"IoShieldCheckmarkOutline",
    title:"Private Security",
    arrowicon:"IoIosArrowRoundForward"
    },
    {
      id:"3",
    icon:"LiaStethoscopeSolid",
    title:"Medical Center",
    arrowicon:"IoIosArrowRoundForward"
    },
    {
      id:"4",
    icon:"TbBooks",
    title:"Library Area",
    arrowicon:"IoIosArrowRoundForward"
    },
    {
      id:"5",
    icon:"MdOutlineKingBed",
    title:"King Size Beds",
    arrowicon:"IoIosArrowRoundForward"
    },
    {
      id:"6",
    icon:"RiHomeHeartLine",
    title:"Smart Homes",
    arrowicon:"IoIosArrowRoundForward"
    },
    {
      id:"7",
    icon:"HiMiniBuildingOffice2",
    title:"Flaticon-Slider",
    arrowicon:"IoIosArrowRoundForward"
    }
  ]
const FacilityCardsMap = () => {
  return (
    <div className="w-full bg-white py-16 relative">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <div className="mx-auto bg-orange-100 h-8 w-32 rounded-2xl flex items-center justify-center">
          <h1 className="text-orange-600">Our Aminities</h1>
        </div>
        <h1 className="mt-8 text-5xl font-bold text-gray-800">
          Building Aminities 
        </h1>
      </div>
    <div className='flex flex-wrap justify-center w-7xl m-auto gap-x-4 gap-y-7'>
      {
        homefacility.map((item) => (
        <div key={item.id} className='flex '>
          <FacilityCard data={item} />  
        </div>
        ))}
    </div>
    </div>
  )
}

export default FacilityCardsMap
