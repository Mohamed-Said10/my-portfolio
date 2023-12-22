import { useState } from "react";
import Project from "./Project";
import ProjectCarousel from "./ProjectCarousel";
import "./Works.css";
import VideoPlayer from "./VideoPlayer";

const Works = () => {
  const [, setVideoVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openVideoDisplay = (project: Project) => {
    setSelectedProject(project);
    setVideoVisible(true);
  };

  const closeVideoDisplay = () => {
    setSelectedProject(null);
    setVideoVisible(false);
  };

  const scrollToRef = (ref: HTMLElement) => {
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="background min-h-screen flex flex-col justify-center items-center section"
        id="works"
      >
        <div className="mb-2">
          <ProjectCarousel
            openVideoDisplay={openVideoDisplay}
            scrollToRef={scrollToRef}
          />
        </div>
        {selectedProject && (
          <div className="mt-8 sm:mt-16 mb-8 w-3/4 h-screen" id="video">
            <h2 className="bg-white p-2 rounded-md text-xl lg:text-2xl font-semibold mb-2">
              {selectedProject.title}
            </h2>
            <VideoPlayer videoUrl={selectedProject.videoUrl} />
            <p className="bg-white p-2 rounded-md w-full text-left mt-2"
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        {selectedProject.description.split("\n").map((line, index) => (
                          <span key={index}>
                            {index >= 0 && "• "}
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
            <div className="flex justify-center">
              <button
                onClick={closeVideoDisplay}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Works;
