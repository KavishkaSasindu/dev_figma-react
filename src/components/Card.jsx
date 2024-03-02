/* eslint-disable no-unused-vars */
import React from "react";
import Reading from "../assets/undraw_Reading_time_re_phf7 2.png";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";

const Card = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="w-full flex justify-center items-center  mt-8">
        <div className="w-[95%] flex justify-center items-center">
          <div className="flex flex-col w-full lg:flex-row justify-center lg:w-[80%] lg:justify-around items-center">
            <div data-aos="zoom-in-right">
              <img src={Reading} alt="read-1" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-center items-center text-center text-2xl lg:text-5xl lg:text-left">
                <motion.h1
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 3,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                >
                  We have been improving <br /> our product{" "}
                  <span className="text-[#9A7AF1]">
                    for many <br /> years.
                  </span>{" "}
                </motion.h1>
              </div>
              <div>
                <p className="flex justify-center items-center text-center lg:text-left">
                  A good example of a paragraph contains a topic conclusion.{" "}
                  <br />
                  There are many different kinds of animals that live in China.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className="px-3 py-3 bg-[#9A7AF1] text-white flex justify-center items-center">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
