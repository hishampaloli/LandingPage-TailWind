import React from "react";
import { Hero1P, Hero2p, hero1H1, heroOpac } from "../constants/constants";
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-20px] w-full h-screen mx-auto text-center flex flex-col justify-center px-3">
        <p className="text-[#00df9a] font-bold p-1">{Hero1P}</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-5">{hero1H1}</h1>
        <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-3">{Hero2p} </p>
            <Typed className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-3" strings={[' BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 ">{heroOpac}</p>
        <button className="bg-[#00df9a] w-[150px] mt-6 mx-auto rounded-sm px-[20px] py-[15px] text-black font-bold" >Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
