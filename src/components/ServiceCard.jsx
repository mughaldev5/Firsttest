import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceCard = ({ data, active, setActive }) => {

    const { id, img_url, demand, para, ready, } = data
    const isActive = active === id;
    return (

        <div
            onMouseEnter={() => setActive(id)}
            className=" relative flex flex-col items-center justify-center w-90 h-110 bg-white  shadow-lg p-4  overflow-hidden">
            <div className="flex justify-center text-3xl pt-9">
                <img src={img_url} alt="logo" />
            </div>
            <div className="flex justify-center text-2xl text-gray-800 font-semibold mt-7">
                <h1>{demand}</h1>
            </div>
            <div className="text-center text-sm text-gray-400 mt-4 px-2">
                <p className="text-gray-600">{para}</p>
            </div>
            <div className={`flex mt-3  font-medium transition-colors duration-300 ${isActive ? "text-orange-600" : "text-gray-400"}`}>
                <h1>{ready}</h1>
                <h1 className='mt-1 text-xl'><IoIosArrowRoundForward /></h1>
            </div>
            <span className={`absolute bottom-0 left-0 h-[3px] transition-all duration-500 ${isActive ? "w-full bg-orange-600" : "w-0 bg-transparent"}`} />

        </div>

    );
};

export default ServiceCard
