/* eslint-disable no-unused-vars */
import React from "react";
import Facebook from "../assets/ant-design_facebook-outlined.png";
import Twitter from "../assets/ant-design_twitter-square-filled.png";
import Linkedin from "../assets/ant-design_linkedin-outlined.png";
import Instagram from "../assets/ant-design_instagram-outlined.png";

const About = () => {
  return (
    <>
      <div className="w-full h-[350px] flex justify-center items-center bg-[#010851] mt-10">
        <div className="w-full h-[250px] flex justify-center items-center">
          <div className="space-y-3">
            <div className="flex w-full justify-center items-center text-white">
              <div>
                <h1 className="text-white text-center text-2xl">
                  Figma Templates
                </h1>
              </div>
            </div>
            <div className="text-center text-white flex justify-center items-center ">
              <div className="">
                <p>About Figma</p>
                <p>
                  <ul>
                    <li>Responsive Design</li>
                    <li>Component Libraries</li>
                    <li>Interactive Prototyping</li>
                    <li>Collaboration and Sharing</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-white"></div>
            <div>
              <ul className="flex text-center items-center justify-center space-x-5">
                <li>
                  <img src={Facebook} alt="fb" />
                </li>
                <li>
                  <img src={Linkedin} alt="li" />
                </li>
                <li>
                  <img src={Instagram} alt="in" />
                </li>
                <li>
                  <img src={Twitter} alt="tw" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
