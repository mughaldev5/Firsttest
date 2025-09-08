import React from 'react'
import HomeData from '../api/HomeData.json'

const DeluxePortion = () => {
  return (
    <div className="flex p-6 w-full min-h-screen rounded-lg text-white space-x-2">
      {HomeData.homedeluxe?.map((item, index) => (
        <div key={index} className="relative flex items-center flex-col">
          
          {/* Content Box */}
          <div className=" inset-0 bg-orange-600 flex flex-col justify-center items-start p-6 space-y-4 overflow-hidden">
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="mt-2">{item.para}</p>

            <div className="flex items-center w-full">
              <span className="whitespace-nowrap">{item.label}</span>
              <span className="flex-1 border-b border-dotted- border-white mx-2"></span>
              <span className="whitespace-nowrap:">{item.value}</span>
            </div>
          </div>

          {/* Image */}
          <div className=" mt-4">
            <img src={item.img_url} alt="home sketch" className=" inset-0 w-[600px] h-auto object-cover" />
          </div>

        </div>
      ))}
    </div>
  )
}

export default DeluxePortion
