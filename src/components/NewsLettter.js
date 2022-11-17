import React from "react";
import {
  NewsLettterH1,
  NewsLettterp1,
  NewsLettterp2,
} from "../constants/constants";

const NewsLettter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">{NewsLettterH1}</h1>
          <p>{NewsLettterp1}</p>
        </div>

        <div className="my-4 sm:mt-10">
        <div className="flex flex-col sm:flex-row  justify-between items-center w-full">
            <input className="p-3 flex w-full rounded-md text-black" type="text" placeholder="Enter Email" />
            <button className="bg-[#00df9a] w-[170px]  mx-auto rounded-md px-[20px] py-[12px] ml-3 text-black font-bold">Notify Me</button>
        </div>
        <div className="mt-3">
            <p>{NewsLettterp2}</p>
            <span className="underline text-[#00df9a] font-bold">Privacy Policy.</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLettter;
