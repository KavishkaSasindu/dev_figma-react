/* eslint-disable no-unused-vars */
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { FaEarthAsia } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* main navbar */}
      <div className="w-full h-[90px] flex justify-center items-center">
        <div className="w-[95%] h-[80px] flex justify-center items-center">
          <div className="flex justify-between items-center w-full h-full">
            <div className="w-full h-full flex items-center">
              <div className="w-[55px] h-[55px] sm:w-[75px] sm:h-[75px] bg-gradient-to-r  from-[#EE9AE5] to-[#2400FF] rounded-lg"></div>
              <div className="text-black font-bold ">
                <span className="text-2xl sm:text-3xl md:text-4xl ml-5">
                  DEV
                </span>
              </div>
              <div className="hidden md:flex  md:ml-3 lg:ml-10">
                <ul className="flex items-center text-[20px] lg:text-xl ">
                  <li className="ml-4 lg:ml-16 hover:px-2 hover:py-2 cursor-pointer hover:bg-[#9A7AF1] hover:transition ease-in duration-150 rounded-md hover:text-white">
                    Overview
                  </li>
                  <li className="ml-4 lg:ml-16 hover:px-2 hover:py-2 cursor-pointer hover:bg-[#9A7AF1] hover:transition ease-in duration-150 rounded-md hover:text-white">
                    Feature
                  </li>
                  <li className="ml-4 lg:ml-16 hover:px-2 hover:py-2 cursor-pointer hover:bg-[#9A7AF1] hover:transition ease-in duration-150 rounded-md hover:text-white">
                    About
                  </li>
                  <li className="ml-4 lg:ml-16 hover:px-2 hover:py-2 cursor-pointer hover:bg-[#9A7AF1] hover:transition ease-in duration-150 rounded-md hover:text-white">
                    Pricing
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:hidden font-bold text-3xl z-50">
              <button onClick={toggleNav}>
                {openNav ? (
                  <IoCloseSharp className="text-3xl font-bold cursor-pointer" />
                ) : (
                  <RxHamburgerMenu className="text-3xl font-bold cursor-pointer" />
                )}
              </button>
            </div>
            <div className="hidden md:flex md:items-center text-[20px] lg:text-xl">
              <div className="flex items-center hover:px-2 hover:py-2  cursor-pointer hover:bg-[#9A7AF1] hover:transition ease-in duration-150 rounded-md hover:text-white">
                <FaEarthAsia className="mr-2" />
                <h1>Explore</h1>
              </div>
              <div className="ml-4 lg:ml-8">
                <button className=" hover:px-2 hover:py-2 cursor-pointer hover:bg-[#9A7AF1] hover:transition ease-in duration-150 rounded-md hover:text-white">
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {openNav ? (
          <div className="h-screen w-full fixed bg-opacity-50 bg-black fixed top-0"></div>
        ) : (
          ""
        )}
      </div>

      {/* mobile responsive navbar */}
      <div className="w-full h-[40vh] flex justify-center items-center md:hidden absolute top-[90px]">
        {openNav ? (
          <motion.div
            className="w-full h-full bg-[#EE9AE5] flex justify-center items-center shadow-md rounded-lg"
            initial={{
              y: -100,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="w-full h-[35vh]">
              <div className="flex flex-col justify-center items-center w-full h-[30vh] ">
                <div>
                  <ul>
                    <li className="mt-6 text-xl hover:px-1 flex justify-center items-center hover:py-2 cursor-pointer hover:bg-[#9A7AF1] hover:transition ease-in duration-150 rounded-md hover:text-white">
                      Overview
                    </li>
                    <li className="mt-6 text-xl hover:px-1 flex justify-center items-center hover:py-2 cursor-pointer hover:bg-[#9A7AF1] hover:transition ease-in duration-150 rounded-md hover:text-white">
                      Feature
                    </li>
                    <li className="mt-6 text-xl hover:px-1 flex justify-center items-center hover:py-2 cursor-pointer hover:bg-[#9A7AF1] hover:transition ease-in duration-150 rounded-md hover:text-white">
                      About
                    </li>
                    <li className="mt-6 text-xl hover:px-1 flex justify-center items-center hover:py-2 cursor-pointer hover:bg-[#9A7AF1] hover:transition ease-in duration-150 rounded-md hover:text-white">
                      Pricing
                    </li>
                  </ul>
                  <div>
                    <div className="mt-6  text-xl flex items-center justify-center text-justify hover:px-2 hover:py-2 cursor-pointer hover:bg-[#9A7AF1] hover:transition ease-in duration-150 rounded-md hover:text-white">
                      <FaEarthAsia className=" text-xl " />
                      <h2 className="ml-2 ">Explore</h2>
                    </div>
                    <div>
                      <button className="mt-6 text-xl  px-3 py-2 bg-[#9A7AF1]  rounded-xl text-white hover:px-2 hover:py-2  hover:transition ease-in duration-150  ">
                        SIgn Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
