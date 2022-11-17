import React from "react";
import { cardCards } from "../constants/constants";

const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8  ">
        {cardCards.map((el, idx) => {
          return (
            <>
            <div key={idx} className={el.styel}>
            <div className="bg-slate-300 w-40 h-40  mt-[-4rem] mx-auto p-5 rounded-full flex items-center justify-center">
            <img className="w-20 mx-auto  bg-transparent" src={el.img} alt="" />
            </div>
              
              <h2 className="text-2xl font-bold text-center py-8">{el.type}</h2>
              <p className="text-center text-4xl font-bold">{el.price}</p>
              <div className="text-center font-medium mt-6">
                {el.det.map((el, idx) => {
                  return <p className="py-2 mx-8" key={idx}>{el}</p>;
                })}
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
