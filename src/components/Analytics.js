import React from "react";
import { analyticsp1, analyticsH1, analyticsp2 } from "../constants/constants";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src="https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/laptop.jpg?raw=true"
          alt=""
        />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">{analyticsp1}</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">{analyticsH1}</h1>
          <p>{analyticsp2}</p>
          <button className="w-[150px] bg-[#000300] text-white font-bold py-[15px] rounded-md  md:mt-5 mt-3">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
