import React from "react";
import skills from "../../skillInfo.json";
import SkillCard from "./skill-card";
import "./skill.css";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <>
      <div id="skills" className="container">
        <div className="h-screen bg-skill-bg bg-no-repeat bg-cover bg-center overflow-x-hidden w-screen">
          <Fade duration={2000}>
            <h1 className="height-title text-center">Skills</h1>
            <div
              className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-10 text-center
            "
            >
              {skills.map((ele) => {
                return (
                  <div key={ele.id}>
                    {<SkillCard title={ele.title} image={ele.image} />}
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Skills;
