import React from "react";
import { Fade } from "react-awesome-reveal";
import "./work.css";

const Work = () => {
  const imageStyle = {
    maxWidth: "100%", // Make sure the image does not exceed the card's width
    height: "100px", // Maintain the image's aspect ratio
  };
  return (
    <>
      <div id="work" className="container">
        <div className="h-screen bg-work-bg bg-no-repeat bg-cover bg-center overflow-x-hidden w-screen">
          <div>
            <Fade>
              <h1 className="heigth-title text-center">Work Experience</h1>
              <div className="flex justify-center pt-28 p-5">
                <div className=" max-w-2xl flex gap-6">
                  <img
                    src="image/infosys.png"
                    alt="Infosys"
                    style={imageStyle}
                  />
                  <div>
                    <p className="font-bold">July 2022-Present</p>
                    <p>
                      I am working as <b>Full stack developer</b> for web and
                      also have worked on the mobile application development. I
                      have worked closely with the client to deliver the
                      product.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
