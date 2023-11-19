import Project from "./Project";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import './Works.css'

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    imageUrl: "project1.jpg",
    category: "Web Application",
    videoUrl: "https://www.youtube.com/watch?v=cZCm9RkRiGs&t=68s",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    imageUrl: "project2.jpg",
    category: "Web Application",
    videoUrl: "",
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    imageUrl: "project3.jpg",
    category: "Web Application",
    videoUrl: "",
  },
  {
    title: "Project 4",
    description: "- Design and development of an e-commerce web application."+'\n'+
    "- MVC architecture using Laravel."+'\n'+
    "- Manage authentication using sessions",
    imageUrl: "project4.jpg",
    category: "Web Application",
    videoUrl: "",
  },
];

interface ProjectCarouselProps {
  openVideoDisplay: (project: Project) => void;
  scrollToRef: (ref: HTMLElement) => void;
}


const slideLeft = () => {
  let slider = document.getElementById("slider");
  slider ? (slider.scrollLeft = slider.scrollLeft - 600) : null;
};

const slideRight = () => {
  let slider = document.getElementById("slider");
  slider ? (slider.scrollLeft = slider.scrollLeft + 600) : null;
};


const ProjectCarousel:React.FC<ProjectCarouselProps> = ({ openVideoDisplay, scrollToRef }) => {
  
  return (
    <>
      <h1 className="text-center w-full mt-20 text-3xl font-bold">
        My Latest Works
      </h1>
      <div className="relative flex items-center justify-center my-32">
        <AiOutlineLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white inline-block w-1/3 px-20 m-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
              <div className="py-8 w-full">
                <h1 className="w-full text-center text-lg font-semibold top-0">
                  {project.category}
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center h-full w-full">
              <div className="py-8 w-full">
                <h2 className="w-full bg-slate-100 my-4 p-2">{project.title}</h2>
                <textarea className="p-2 bg-slate-100 w-full h-32 no-underline	">{project.description}</textarea>
              </div>
                <div className="py-4">
                  <button onClick={async () => {
                    await openVideoDisplay(project);
                    scrollToRef(document.getElementById('video')!);
                  }
                    } className="bg-yellow-700 text-white px-8 py-1 rounded-sm mb-4 hover:scale-110 ease-in-out duration-300">Preview</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <AiOutlineRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
        
    </>
  );
};

export default ProjectCarousel;
