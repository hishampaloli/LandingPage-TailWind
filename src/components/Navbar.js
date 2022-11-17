import React, { useState } from "react";
import { navUls } from "../constants/constants";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    const [nav, setNav] = useState(true); 

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full  text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex ">
        {navUls.map((el) => {
          return (
            <li key={el}>
              <button className="p-4 w-40 text-center cursor-pointer rounded-md border-gray-50 focus:bg-green-400">{el}</button>                
              </li>
          );
        })}
      </ul>

      <div className="cursor-pointer block md:hidden ml-auto scale-100">
      {!nav ?  <AiOutlineClose onClick={handleNav} size={20} /> :  <AiOutlineMenu onClick={handleNav} size={20} />}
       
      </div>

       <div className={!nav ? 'fixed left-0 top-20 h-full bg-black border-r-gray-900 bg-[#00300] ease-in-out duration-1000 md:hidden' : 'fixed top-0 w-[60%] h-full left-0 opacity-0 ease-in-out duration-700'}>
        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1> */}

        <ul className="p-4 uppercase flex-col">
          {navUls.map((el) => {
            return (
              <li key={el}>
              <button className="p-4 w-40 text-left cursor-pointer rounded-md border-gray-50 focus:bg-green-400">{el}</button>
                
              </li>
            );
          })}
        </ul>
      </div>

      
    </div>
  );
};

export default Navbar;
