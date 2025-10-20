import React from "react";

const MenuDropdown = () => {
    return (
        <div className="absolute  left-0 right-0 mx-auto z-20 -mt-18 flex items-center justify-around w-6xl h-36 bg-white shadow-gray-100 shadow-lg space-x-6 ">
            <div className=" flex space-x-16  ">
                <select className="flex items-center border-2 border-gray-800 h-16 w-58">
                    <option className="bg-white space-y-3 hover:bg-gray-50" value="Choose Area ">Choose Area</option>
                    <option value="Lahore ">Lahore</option>
                    <option value="Islamabad ">Islamabad</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Multan">Multan</option>
                    <option value="Multan">Pashawar</option>
                </select>
                <select className="flex items-center border-2 border-gray-800 h-16 w-58">
                    <option value="Property Status ">Property Status</option>
                    <option value="Open House ">Open House</option>
                    <option value="Rent">Rent</option>
                    <option value="Sale">Sale</option>
                    <option value="Sold">Sold</option>
                </select>
                <select className="flex items-center border-2 border-gray-800 h-16 w-58">
                    <option value="Property Type ">Property Type</option>
                    <option value="Apartment ">Apartment</option>
                    <option value="Co-op">Co-op</option>
                    <option value="Condo">Condo</option>
                    <option value="Single Family House">Single Family House</option>
                </select>
            </div>
            <div className="z-10">
  <button className="relative overflow-hidden h-14 w-35 flex items-center justify-center uppercase  group bg-transparent hover:border hover:border-gray-500 ">
    <span className="relative z-10 text-white transition-colors duration-500 group-hover:text-gray-400 hover:font-bold ">
      FIND NOW
    </span>
    <span className="absolute inset-0 bg-orange-600 transform translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-out z-0"></span>
  </button>
</div>
        </div>
    )
}
export default MenuDropdown;

