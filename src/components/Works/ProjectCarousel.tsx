import Project from "./Project";
import {
  AiOutlineDown,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineUp,
} from "react-icons/ai";
import "./Works.css";
import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { motion } from "framer-motion";

const projects: Project[] = [
  {
    title: "My Travel Agency Web Application",
    description:
      "Design and development of my Travel Agency Web Application.\n" +
      "UI/UX designed using Figma.\n" +
      "Developped using Next.js, React and Typescript.\n" +
      "Built with vite.\n" +
      "Deployed on Vercel.",
    imageUrl: "project3.jpg",
    category: "Web Application",
    videoUrl: "https://youtu.be/iFgaxnsLPjQ",

    photos: [
      "/assets/figma.ico",
      "/assets/react.ico",
      "/assets/typescript.ico",
      "/assets/supabase.png",
      "/assets/vercel.png",
    ],
  },
  {
    title: "My Portfolio Website",
    description:
      "Design and development of my Portfolio application.\n" +
      "UI/UX designed using Figma.\n" +
      "Developped using React and Typescript.\n" +
      "Built with vite.\n" +
      "Deployed on AWS Amplify.",
    imageUrl: "project3.jpg",
    category: "Web Application",
    videoUrl: "https://youtu.be/fcqP9Rhv-OU",
    photos: [
      "/assets/figma.ico",
      "/assets/react.ico",
      "/assets/typescript.ico",
      "/assets/aws.ico",
      "/assets/Amplify.png",
    ],
  },
  {
    title: "Redesign of a web application for employee monitoring",
    description:
      "Redesign of a web application for monitoring employees within " +
      "the company.\n" +
      "REST architecture using Spring Boot / React.\n" +
      "Updated from JAVA 8 to JAVA 17.\n" +
      "Migrating from ANGULAR JS to REACT 18.\n" +
      "Improved performance and security",
    imageUrl: "project1.jpg",
    category: "Web Application",
    videoUrl: "https://youtu.be/iD1SifMZh14?si=FzFtJ6w_LjI1BRGc",
    photos: [
      "/assets/spring-boot.png",
      "/assets/react.ico",
      "/assets/java.ico",
      "/assets/angular.ico",
    ],
  },
  {
    title: "E-Ticket Management System",
    description:
      "UI/UX modeling using Adobe XD\n" +
      "Design, and development of a web application " +
      "Managing customer incident tickets\n" +
      "REST architecture using Spring Boot for the backend and React for the frontend.",
    imageUrl: "project2.jpg",
    category: "Web Application",
    videoUrl: "https://youtu.be/WmK9gl9ynyk?si=CBQuOTI8fmdQh6Ap",
    photos: [
      "/assets/adobe-xd.ico",
      "/assets/react.ico",
      "/assets/spring-boot.png",
    ],
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


const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  openVideoDisplay,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [expandedVideoIndex, setExpandedVideoIndex] = useState<string | null>(
    null
  );

  

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slideUp = () => {
    let slider = document.getElementById("slider");
    slider ? (slider.scrollTop -= 200) : null;
  };

  const slideDown = () => {
    let slider = document.getElementById("slider");
    slider ? (slider.scrollTop += 200) : null;
  };

  const scrollToRef = (ref: HTMLElement) => {
    if (ref && isSmallScreen){
    const navbarHeight = 260; // Adjust this value according to your navbar height
    const topOffset = ref.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  } else if(!isSmallScreen){
    window.scrollTo({ top: ref.offsetTop - 50, behavior: "smooth" });
  }
  };
  
  

  return (
    <>
      <h1 className="text-center w-full mt-20 text-3xl font-bold">
        My Latest Works
      </h1>
      <div className="relative flex flex-col items-center justify-center my-16">
        {isSmallScreen && (
          <>
            <div className="flex items-center justify-center">
              <AiOutlineUp
                className="opacity-50 cursor-pointer hover:opacity-100"
                onClick={slideUp}
                size={40}
              />
            </div>
            <div
              id="slider"
              className="w-full h-full overflow-y-scroll scroll whitespace-nowrap scrollbar-hide"
            >
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-white w-fit px-6 py-6 m-2 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition duration-300"
                >
                  <div className="text-center">
                    <p className="text-gray-600 font-bold mb-2">
                      {project.category}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-full">
                      <label className="text-gray-800 font-semibold mb-1">
                        Title
                      </label>
                      <h2
                        className="bg-gray-100 p-2 rounded-md w-full text-center mb-4 font-semibold"
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        {project.title}
                      </h2>
                      <label className="text-gray-800 font-semibold mb-1">
                        Description
                      </label>
                      <p
                        className="bg-gray-100 p-2 rounded-md w-full text-left"
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        {project.description.split("\n").map((line, index) => (
                          <span key={index}>
                            {index >= 0 && "• "}
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                      {project.photos.map((photoUrl) => (
                        <img
                          key={photoUrl}
                          src={photoUrl}
                          alt={`Photo of ${project.title}`}
                          className="w-8 h-8 object-cover rounded-md m-2  inline-block"
                        />
                      ))}
                    </div>
                    {expandedVideoIndex !== project.videoUrl && (
                      <div className="py-4">
                         <motion.button
                          onClick={async () => {
                            await setExpandedVideoIndex(project.videoUrl);
                            const closeElement = document.getElementById("close");
                            if (closeElement) {
                              scrollToRef(closeElement);
                            }
                          }}
                          className="bg-yellow-700 text-white px-8 py-2 rounded-md mt-4 relative overflow-hidden"
                          animate={{
                            boxShadow: [
                              "0 0 0px rgba(255, 223, 0, 0.6)",
                              "0 0 20px rgba(255, 223, 0, 0.8)",
                              "0 0 40px rgba(255, 223, 0, 1)",
                              "0 0 60px rgba(255, 223, 0, 0.8)",
                              "0 0 20px rgba(255, 223, 0, 0.6)",
                              "0 0 0px rgba(255, 223, 0, 0.6)",
                            ], // Shadow pulses out and back
                          }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                          }}
                        >
                          Watch The Demo
                        </motion.button>
                      </div>
                    )}
                    {expandedVideoIndex === project.videoUrl && (
                      <div className="py-4">
                        <button
                          onClick={() => {
                            setExpandedVideoIndex(null);
                          }}
                          className="bg-red-700 text-white px-8 py-2 rounded-md mt-4 hover:scale-110 transition duration-300"
                          id="close"
                        >
                          Close The Demo
                        </button>
                      </div>
                    )}
                  </div>
                  {expandedVideoIndex === project.videoUrl && (
                    <div id="smallvideo" className="">
                      <VideoPlayer videoUrl={project.videoUrl} />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <AiOutlineDown
                className="opacity-50 cursor-pointer hover:opacity-100"
                onClick={slideDown}
                size={40}
              />
            </div>
          </>
        )}
        {!isSmallScreen && (
          <>
            <div className="relative flex items-center justify-center">
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
                    className="bg-white inline-block w-1/3 px-8 py-6 m-2 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition duration-300"
                  >
                    <div className="text-center">
                      <p className="text-gray-600 font-bold mb-2">
                        {project.category}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-full">
                        <label className="text-gray-800 font-semibold mb-1">
                          Title
                        </label>
                        <h2 className="bg-gray-100 p-2 rounded-md w-full text-center mb-4">
                          {project.title}
                        </h2>
                        <label className="text-gray-800 font-semibold mb-1">
                          Description
                        </label>
                        <p
                          className="bg-gray-100 p-2 rounded-md w-full text-left"
                          style={{ whiteSpace: "pre-wrap" }}
                        >
                          {project.description
                            .split("\n")
                            .map((line, index) => (
                              <span key={index}>
                                {index >= 0 && "• "}
                                {line}
                                <br />
                              </span>
                            ))}
                        </p>
                        {project.photos.map((photoUrl) => (
                          <img
                            key={photoUrl}
                            src={photoUrl}
                            alt={`Photo of ${project.title}`}
                            className="w-12 h-12 object-cover rounded-md m-2 inline-block"
                          />
                        ))}
                      </div>
                      <div className="py-2">
                      <motion.button
                          onClick={async () => {
                            await openVideoDisplay(project);
                            const videoElement = document.getElementById("video");
                            if (videoElement) {
                              scrollToRef(videoElement);
                            }
                          }}
                          className="bg-yellow-700 text-white px-8 py-2 rounded-md mt-4 relative overflow-hidden"
                          animate={{
                            boxShadow: [
                              "0 0 0px rgba(255, 223, 0, 0.6)",
                              "0 0 20px rgba(255, 223, 0, 0.8)",
                              "0 0 40px rgba(255, 223, 0, 1)",
                              "0 0 60px rgba(255, 223, 0, 0.8)",
                              "0 0 20px rgba(255, 223, 0, 0.6)",
                              "0 0 0px rgba(255, 223, 0, 0.6)",
                            ],
                          }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                          }}
                        >
                          Watch The Demo
                        </motion.button>
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
        )}
      </div>
    </>
  );
};

export default ProjectCarousel;
