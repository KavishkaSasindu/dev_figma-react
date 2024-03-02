/* eslint-disable no-unused-vars */
import React from "react";
import My from "../assets/undraw_My_universe_803e 1.png";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";

const Universe = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="w-full flex justify-center items-center  mt-8">
        <div className="w-[95%] flex justify-center items-center">
          <div className="flex flex-col w-full lg:flex-row justify-center lg:w-[80%] lg:justify-around items-center">
            <div className="space-y-4">
              <div className="flex justify-center items-center text-center text-2xl lg:text-5xl lg:text-left">
                <motion.h1
                  initial={{
                    x: -500,
                  }}
                  animate={{
                    x: 0,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                >
                  You can Practice at any time <br />
                  <span className="text-[#9A7AF1]">
                    convinent for you.
                  </span>{" "}
                </motion.h1>
              </div>
              <div>
                <p className="flex justify-center items-center text-center lg:text-left lg:text-lg">
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
            <div data-aos="zoom-in-right">
              <img src={My} alt="read-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Universe;
