/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Card from "./components/Card";
import Universe from "./components/Universe";
import Pricing from "./components/Pricing";
import End from "./components/End";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Universe />
      <Pricing />
      <End />
      <About />
    </>
  );
};

export default App;
