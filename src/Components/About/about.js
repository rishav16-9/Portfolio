import React from "react";
import "./about.css";
import { Fade } from "react-awesome-reveal";
import Navbar from "../Navbar/navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about" className="container">
        <div className="h-screen bg-about-bg bg-no-repeat bg-cover bg-center overflow-x-hidden w-screen">
          <Fade duration={2000}>
            <div className="text-center">
              <h1 className="heigth-title">About Me</h1>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start pt-8 md:pt-36">
              <div className="w-64 h-44 bg-image-bg bg-cover bg-center bg-no-repeat md:w-1/2 md:h-60 border-black border-2"></div>
              <p className="lg:text-lg md:text-base sm:text-sm max-w-lg pl-2">
                I'm currently working for <b>Infosys</b> as
                <b> Full Stack Developer </b> and have completed my Bachelor's
                degree from Jain University, Bangalore in the year 2022. I am
                enthusiastic about web development, mobile development and new
                frameworks. Other then that I have hobbies like playing cricket,
                table-tennis, travelling.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
