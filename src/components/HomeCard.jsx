import React from 'react'
import { BiHomeCircle } from "react-icons/bi";
const HomeCard = ({ data }) => {
    const { id, title, dream, para, img_url } = data;
    return (
        <div className='relative flex bg-gray-200 pt-18 w-full h-lvh'>
            <div className=' flex w-7xl m-auto'>
                <div className='flex flex-col pt-13 ml-17 space-y-8 '>
                    <div className='flex items-center space-x-2 text-gray-950 font-bold'>
                        <span className='text-orange-600'><BiHomeCircle /></span>
                        <h1 >{title}</h1>
                    </div>
                    <div className='text-7xl font-bold text-gray-900'>
                        <h1>{dream}</h1>
                    </div>
                    <div className='flex w-110 space-x-6 text-gray-600'>
                        <div className=' underline w-0.5 h-12 bg-gray-500 '></div>
                        <p>{para}</p>
                    </div>
  <div className="z-10">
  <button className="relative overflow-hidden h-16 w-52 flex items-center justify-center uppercase  group bg-transparent hover:border hover:border-gray-500 ">
    <span className="relative z-10 text-white transition-colors duration-500 group-hover:text-gray-500 ">
      Make An Enquiry
    </span>
    <span className="absolute inset-0 bg-orange-600 transform translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-out z-0"></span>
  </button>
</div> 
   </div>
  <div className='w-6xl'>
   <img src={img_url} alt={img_url} />
     </div>
    </div>
 </div>

    )
}

export default HomeCard
