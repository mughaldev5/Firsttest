// src/components/Dropdown.jsx
import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ title, links }) => {
    const [open, setOpen] = useState(false);
    const timerRef = useRef(null)

    const handleMouseEnter = () => {
        if (timerRef.current) clearTimeout(timerRef.current)
        setOpen(true)
    }

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            setOpen(false)
        }, 100) // 5 sec delay
    }
    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="hover:text-orange-600">{title}</button>

            {open && (
                <div className="absolute top-5 left-0 flex flex-col items-start mt-3 w-53 border-t-4 border-orange-600 bg-white shadow-lg z-50 ">
                    {links.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.to}
                            className="block px-4 py-2 text-gray-800 hover:text-orange-600"
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
