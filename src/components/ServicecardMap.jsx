import React from 'react'
import ServiceCard from './ServiceCard'
  const service = [
    {
      id: 0,
      img_url: " /image/logo4.png",
      demand: "Buy a home",
      para: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
      ready: "Find a home"
    },
    {
      id: 1,
      img_url: " /image/logo3.png",
      demand: "Rent a home",
      para: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
      ready: "Find a home"
    },
    {
      id: 2,
      img_url: " /image/logo2.png",
      demand: "Sell a home",
      para: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
      ready: "Find a home"
    }
  ]
const ServicecardMap = ({ active, setActive }) => {
  return (
    <div>
      <div className='relative flex  justify-center h-lvh w-full bg-gray-100 overflow-hidden'>
                    <div className='absolute flex flex-col items-center justify-center mt-24  overflow-hidden'>
                        <div className='flex justify-center items-center bg-orange-100 h-8 w-32 overflow-hidden rounded-2xl'>
                            <h1 className='text-orange-600 items-center'>Our Servicr</h1>
                        </div>
                        <div className='mt-8 overflow-hidden'>
                            <h1 className='text-5xl font-bold text-gray-800 overflow-hidden'>
                                Our Main Focus
                            </h1>
                        </div>
                    </div>
                    <div className='flex  mt-68 space-x-9 overflow-hidden'>
                        {
                            service.map((curElem) => (
                                <ServiceCard key={curElem.id} data={curElem} active={active} setActive={setActive} />
                            ))
                        }
                    </div>
                </div>
    </div>
  )
}

export default ServicecardMap
