import React from "react";
import ProjectCard from "./project-card";
import project from "./project.json";
import "./project.css";
import { Fade } from "react-awesome-reveal";

const Project = () => {
  return (
    <>
      <div id="project" className="container">
        <div className="h-screen bg-project-bg bg-no-repeat bg-cover bg-center overflow-x-hidden w-screen">
          <div>
            <Fade duration={2000}>
              <h1 className="heigth-title text-center">Project</h1>
              {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 */}
              {/* <div className="flex flex-wrap justify-center gap-4 px-9 heigth">
               */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-10 pt-6 text-center">
                {project.map((ele) => {
                  return (
                    <div className="flex-1 bg-white" key={ele.id}>
                      <ProjectCard
                        title={ele.title}
                        description={ele.description}
                        url={ele.url}
                        image={ele.image}
                      />
                    </div>
                  );
                })}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
