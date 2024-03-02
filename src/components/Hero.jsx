/* eslint-disable no-unused-vars */
import React from "react";
import Image1 from "../assets/undraw_fashion_blogging_re_fhi5 1.png";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";

export const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="w-full h-[800px] md:h-[800px] lg:h-[600px] flex justify-center mt-5">
        <div className="w-[95%] h-full bg-gradient-to-r  from-[#EE9AE5] to-[#5961F9] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[200px]">
          <div className=" w-[95%] lg:w-[80%] h-[100%] flex  flex-col justify-center items-center lg:flex-row lg:justify-between space-y-5">
            <div className="w-full space-y-3 lg:w-[100%] ">
              {/* hero title */}
              <div className="flex justify-center items-center">
                <motion.h1
                  className="text-white text-[40px] md:text-[50px] md:p-5 lg:text-[50px] 2xl:text-[60px] text-center lg:text-left"
                  initial={{ y: -500 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.5,
                  }}
                >
                  Develop your skills <br /> without diligence
                </motion.h1>
              </div>

              {/* hero paragraph */}
              <div className="flex justify-center items-center">
                <p className="text-white text-[16px] text-center md:p-5 lg:text-left">
                  A good example of a paragraph contains a topic sentence,
                  details and a <br /> conclusion. There are many different
                  kinds of animals that live in China.
                </p>
              </div>

              {/* hero button */}
              <div className="flex flex-row justify-center items-center text-white">
                <button className="flex justify-center items-center px-2 py-2 lg:px-3 md:py-2 md:text-lg lg:text-xl m-4 bg-[#9A7AF1]">
                  Get Started
                </button>
                <button className="flex justify-center items-center px-2 py-2 lg:px-3 md:py-2 md:text-lg lg:text-xl m-4 bg-[#9A7AF1]">
                  Discount
                </button>
              </div>
            </div>
            <div>
              {/* hero image */}
              <motion.div
                className="w-[300px] h-[300px] md:h-[400px] md:ml-20 md:w-[400px]"
                initial={{
                  x: -1000,
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
              >
                <img src={Image1} alt="img-1" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
