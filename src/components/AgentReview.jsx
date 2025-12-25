import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
const iconMap = {
  RiDoubleQuotesL
};
const AgentReview = ({data, active, setActive}) => {
  const {id, icon, para, img_url, name, agent} = data
  const Icon = iconMap[icon];
  const isActive = active === id;
  return (
    <div
    onMouseEnter={() => setActive(id)}
     className='relative flex flex-col pl-10 pr-10 text-start bg-white shadow-lg group mx-3 '>
      <div className='text-4xl font-bold mt-7'>
        <p className=''>
        {Icon && <Icon/>}
        </p>
         </div>
         <div className=''>
          <p className='leading-7.5'>{para}</p>
        </div>
        <div className='flex mt-5 gap-2 '>
          <div className='flex h-16 w-16 rounded-full'>
            <img className='rounded-full' src={img_url} alt="agent" />
          </div>
        <div className='flex flex-col leading-8.5'>
          <h1 className='text-2xl  '>
            {name}
          </h1>
          <h1>
            {agent}
          </h1>
        </div>
        
        </div>
        <span className={`absolute bottom-0 left-0 h-[3px] transition-all duration-500 ${isActive ? "w-full bg-orange-600" : "w-0 bg-transparent"}`} />
    </div>
  )
} ;

export default AgentReview ;
