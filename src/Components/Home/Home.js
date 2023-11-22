import React from "react";
import "./home.css";
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <>
      <div id="home" className="container">
        <div className="w-screen h-screen bg-blue-bg bg-cover bg-no-repeat bg-center overflow-x-hidden px-2">
          <div className="height-top">
            <div className="flex justify-evenly">
              <div className="text-left  ">
                <Fade delay={200}>
                  <p className="text-8xl line-height-max">Hi,</p>
                  <p className="text-6xl line-height-min">
                    My name is Rishav Surana
                  </p>
                  <p className="text-6xl line-height-min">
                    I am a Full Stack Developer
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
