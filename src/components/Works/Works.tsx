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
      ref.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="background min-h-screen flex flex-col justify-center items-center section" id="works">
      <div className="">
        <ProjectCarousel openVideoDisplay={openVideoDisplay} scrollToRef={scrollToRef}/>
      </div>
      {selectedProject && (
        <div className="mb-8 w-3/4" id="video">
          <h2 className="text-2xl font-semibold mb-2">
            {selectedProject.title}
          </h2>
          <VideoPlayer videoUrl={selectedProject.videoUrl} />
          <p className="text-gray-700">{selectedProject.description}</p>
          <button
            onClick={closeVideoDisplay}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default Works;
