import Project from "./Project";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import './Works.css'


const projects: Project[] = [
  {
    title: "Redesign of a web application for employee monitoring",
    description: "Redesign of a web application for monitoring employees within"+
    "the company.\n"+
    "REST architecture using Spring Boot / React.\n"+
    "Updated from JAVA 8 to JAVA 17.\n"+
    "Migrating from ANGULAR JS to REACT 18.\n"+
    "Improved performance and security",
    imageUrl: "project1.jpg",
    category: "Web Application",
    videoUrl: "https://youtu.be/iD1SifMZh14?si=FzFtJ6w_LjI1BRGc",
  },
  {
    title: "E-Ticket System Management",
    description: "UI/UX modeling, design, and development of a web application"+
    " managing customer incident tickets\n"+"Architecture REST en utilisant Spring Boot / React.",
    imageUrl: "project2.jpg",
    category: "Web Application",
    videoUrl: "https://youtu.be/WmK9gl9ynyk?si=CBQuOTI8fmdQh6Ap",
  },
  {
    title: "My Portfolio Website",
    description: "My Portfolio, developped using React and Typescript",
    imageUrl: "project3.jpg",
    category: "Web Application",
    videoUrl: "https://youtu.be/fcqP9Rhv-OU",
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
  <div key={project.title} className="bg-white inline-block w-1/3 px-8 py-6 m-2 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition duration-300">
    <div className="text-center">
      <p className="text-gray-600 font-bold mb-2">{project.category}</p>
    </div>
    <div className="flex flex-col items-center justify-center">
      <div className="w-full">
        <label className="text-gray-800 font-semibold mb-1">Title</label>
        <h2 className="bg-gray-100 p-2 rounded-md w-full text-center mb-4">{project.title}</h2>
        <label className="text-gray-800 font-semibold mb-1">Description</label>
        <p className="bg-gray-100 p-2 rounded-md w-full text-left" style={{ whiteSpace: 'pre-wrap' }}>
          {project.description.split('\n').map((line, index) => (
            <span key={index}>
              {index >= 0 && '• '}
              {line}
              <br />
            </span>
          ))}</p>
      </div>
      <div className="py-4">
        <button
          onClick={async () => {
            await openVideoDisplay(project);
            scrollToRef(document.getElementById('video')!);
          }}
          className="bg-yellow-700 text-white px-8 py-2 rounded-md mb-4 hover:scale-110 transition duration-300"
        >
          Preview
        </button>
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
