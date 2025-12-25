import React from "react";

const MenuDropdown = () => {
    return (
        
            <div className="relative mx-auto z-20 -mt-18 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col items-center justify-center 2xl:w-6xl xl:w-5xl lg:w-5xl md:w-3xl sm:w-full w-full 2xl:h-36 xl:h-36 lg:h-36 md:h-65 sm:h-auto lg:space-x-0 lg:space-y-0 md:space-y-9 sm:space-y-10 space-y-10 bg-white shadow-gray-100 shadow-lg  overflow-hidden ">
                <div className="relative flex 2xl:flex-row xl:flex-row lg:flex-row lg:justify-center lg:items-center md:flex-row md:justify-center  sm:flex-col flex-col items-center lg:space-x-6  md:space-x-6 sm:gap-y-10 gap-y-10 sm:w-full w-full ">
                  <select className="flex items-center border-2 border-gray-800 h-16 2xl:w-58 xl:w-58 lg:w-58 md:w-70 sm:w-full w-full">
                    <option className="bg-white hover:bg-gray-50" value="Choose Area ">Choose Area</option>
                    <option value="Lahore ">Lahore</option>
                    <option value="Islamabad ">Islamabad</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Multan">Multan</option>
                    <option value="Multan">Pashawar</option>
                </select>
                <select className="flex items-center border-2 border-gray-800 h-16 2xl:w-58 xl:w-58 lg:w-58 md:w-70 sm:w-full w-full">
                    <option value="Property Status ">Property Status</option>
                    <option value="Open House ">Open House</option>
                    <option value="Rent">Rent</option>
                    <option value="Sale">Sale</option>
                    <option value="Sold">Sold</option>
                </select>
                </div>
               <div className="relative flex 2xl:flex-row xl:flex-row lg:flex-row lg:justify-center lg:items-center md:flex-row  lg:ml-0 md:ml-45 sm:flex-col flex-col items-center lg:space-x-6  md:space-x-14 sm:gap-y-10 gap-y-10 sm:w-full w-full">
                  <select className="flex items-center border-2 border-gray-800 h-16 2xl:w-58 xl:w-58 lg:w-58 md:w-70 sm:w-full w-full">
                    <option value="Property Type ">Property Type</option>
                    <option value="Apartment ">Apartment</option>
                    <option value="Co-op">Farm House</option>
                    <option value="Condo">smart Living</option>
                    <option value="Single Family House">Single Family House</option>
                </select>
            <div className="z-10 overflow-hidden">
           <button className="relative overflow-hidden h-14 w-35 flex items-center justify-center uppercase  group bg-transparent hover:border hover:border-gray-500 ">
            <span className="relative z-10 text-white transition-colors duration-500 group-hover:text-gray-400 hover:font-bold ">
               FIND NOW
           </span>
          <span className="absolute inset-0 bg-orange-600 transform translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-out z-0"></span>
        </button>
         </div>
            </div>
            </div>
        
    )
}
export default MenuDropdown;

