import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { footerUl1, footerUl2, footerUl3 } from "../constants/constants";

const Footer = () => {
  return (
    <div className="w-full bg-[#000300] py-[4rem] px-6 text-white">
      <div className="max-w-[1240px] mx-auto flex flex-col ">
        <div>
          <h1 className="font-bold text-3xl text-[#00df9a]">React.</h1>
          <p className=" sm:w-[100%] md:w-[100%] mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            commodi provident dicta maxime quos modi nam enim. Dolore eum
            voluptates, minima, minus vel pariatur ducimus officia rem magni
            delectus nostrum?
          </p>
        </div>
        <div className="mt-[50px] sm:ml-[0px] md:ml-[-45px] w-full max-w-[600px] flex justify-around">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
        <div className="w-full max-w-[700px] mt-10 flex justify-between">
          <div>
            <h6 className="font-medium text-gray-400 mb-4">Solutions</h6>
            <ul>
              {footerUl1.map((el, idx) => {
                return (
                  <li className="py-2 text-sm" key={idx}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 mb-4">Support</h6>
            <ul>
              {footerUl2.map((el, idx) => {
                return (
                  <li className="py-2 text-sm" key={idx}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 mb-4">Company</h6>
            <ul>
              {footerUl3.map((el, idx) => {
                return (
                  <li className="py-2 text-sm" key={idx}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
