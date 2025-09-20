import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
const iconMap = {
  RiDoubleQuotesL
};
const AgentReview = ({data}) => {
  const {id, icon, para, img_url, name, agent} = data
  const Icon = iconMap[icon];
  return (
    <div className='flex flex-col h-80 w-95 pl-10 pr-10 text-start bg-white shadow-lg '>
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
    </div>
  )
}

export default AgentReview
