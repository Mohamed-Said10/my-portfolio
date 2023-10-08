import Project from "./Project";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    imageUrl: "project1.jpg",
    category: "Web Application",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    imageUrl: "project2.jpg",
    category: "Web Application",
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    imageUrl: "project3.jpg",
    category: "Web Application",
  },
  {
    title: "Project 4",
    description: "Description of Project 4",
    imageUrl: "project4.jpg",
    category: "Web Application",
  },
];

const slideLeft = () => {
  let slider = document.getElementById('slider')
  slider ? slider.scrollLeft = slider.scrollLeft - 600 : null
}

const slideRight = () => {
  let slider = document.getElementById('slider')
  slider ? slider.scrollLeft = slider.scrollLeft + 600 : null
}

const ProjectCarousel = () => {
  return (
    <>
    <h1 className="text-center w-full mt-20 text-3xl font-bold">My Latest Works</h1>
    <div className="relative flex items-center justify-center my-32">
      <AiOutlineLeft className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideLeft} size={40}/>
    <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
      {projects.map((project) => (
          <div key={project.title} className="bg-white inline-block w-1/3 px-20 py-40 m-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
            <h2 className="w-full text-center">{project.title}</h2>
            <p>{project.description}</p>
            <button className="bg-blue-400 px-2 rounded-sm">Preview</button>
          </div>
        ))}
    </div>
    <AiOutlineRight className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight} size={40}/>
    </div> 
    </>
  );
};

export default ProjectCarousel;
