/* eslint-disable no-unused-vars */
import React from "react";
import Green from "../assets/green-circle.png";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-[90%]">
          <div>
            {/* Pricing title */}
            <div className="space-y-5">
              <div
                data-aos="zoom-in"
                className="flex justify-center items-center text-5xl"
              >
                <h1 className="flex justify-center items-center text-center">
                  Here are all our plans
                </h1>
              </div>
              <div>
                <p className="flex justify-center items-center text-center text-lg">
                  A simple paragraph is comprised of three major components. The{" "}
                  <br /> which is often a declarative sentence.
                </p>
              </div>
            </div>
            {/* pricing cards */}
            <div className="lg:mt-10 lg:mb-5">
              <div className="grid grid-cols-1 lg:grid-cols-3 lg:space-x-5 space-y-5 mt-10">
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="space-y-5 shadow-xl rounded-lg px-2 py-3"
                >
                  <div>
                    <h1 className="flex justify-center items-center text-center font-bold text-3xl">
                      Start
                    </h1>
                  </div>
                  <div>
                    <p className="flex justify-center items-center text-center text-lg">
                      A common form of Lorem ipsum <br /> reads: Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div>
                    <h1 className="flex justify-center items-center text-center font-bold text-6xl text-[#9A7AF1]">
                      50$
                    </h1>
                  </div>
                  <div>
                    <ul className="space-y-6 text-lg">
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Videos of lessons
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Homework Check
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Additional practical Check
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Monthly Conference
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Personal advice from teachers
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="px-9 py-3 text-lg bg-[#9A7AF1] text-white flex justify-center items-center">
                      Buy
                    </button>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="space-y-5 shadow-xl rounded-lg px-2 py-3"
                >
                  <div>
                    <h1 className="flex justify-center items-center text-center font-bold text-3xl">
                      Advance
                    </h1>
                  </div>
                  <div>
                    <p className="flex justify-center items-center text-center text-lg">
                      A common form of Lorem ipsum <br /> reads: Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div>
                    <h1 className="flex justify-center items-center text-center font-bold text-6xl text-[#9A7AF1]">
                      85$
                    </h1>
                  </div>
                  <div>
                    <ul className="space-y-6 text-lg">
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Videos of lessons
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Homework Check
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Additional practical Check
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Monthly Conference
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Personal advice from teachers
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="px-9 py-3 text-lg bg-[#9A7AF1] text-white flex justify-center items-center">
                      Buy
                    </button>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="space-y-5 shadow-xl rounded-lg px-2 py-3"
                >
                  <div>
                    <h1 className="flex justify-center items-center text-center font-bold text-3xl">
                      Premium
                    </h1>
                  </div>
                  <div>
                    <p className="flex justify-center items-center text-center text-lg">
                      A common form of Lorem ipsum <br /> reads: Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div>
                    <h1 className="flex justify-center items-center text-center font-bold text-6xl text-[#9A7AF1]">
                      150$
                    </h1>
                  </div>
                  <div>
                    <ul className="space-y-6 text-lg">
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Videos of lessons
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Homework Check
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Additional practical Check
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Monthly Conference
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-center items-center">
                          <img src={Green} alt="green-1" className="mr-8" />
                          Personal advice from teachers
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="px-9 py-3 text-lg bg-[#9A7AF1] text-white flex justify-center items-center">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
