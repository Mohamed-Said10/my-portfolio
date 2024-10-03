import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Slide in from left to original position
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 }, // Start faded and slightly smaller
    visible: {
      opacity: 1,
      scale: 1, // Scale up to full size
      transition: { duration: 1, ease: 'easeOut' }, // 1 second duration
    },
  };

  return (
    <div
      className="bg-gradient-to-r from-[#F2E3C3] to-[#F2E3C3] via-stone-300 section h-screen overflow-hidden"
      id="home"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 h-full">
        <div className="col-span-1 flex justify-center items-center font-sans ">
          <div className="mx-auto text-center md:text-left">
            <motion.h1
              className="text-4xl lg:text-5xl font-bold"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Hi There,
            </motion.h1>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold mt-8"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ delay: 0.5 }}
            >
              I'm Mohamed Said
            </motion.h1>
            <motion.h3
              className="text-4xl lg:text-5xl font-thin italic mt-8"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ delay: 1 }}
            >
              Software Engineer
            </motion.h3>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-end relative">
          <div className="home2 absolute h-screen w-full inset-0 z-1">
            {/* Background will be here, but not affecting the image */}
          </div>

          {/* Image positioned at the bottom center of the right div */}
          <motion.div
            className="absolute bottom-0 lg:left-32 lg:transform lg:translate-x-1/2 z-2"
            initial={{ opacity: 0, scale: 0.9 }} // Animation start values
            animate={{ opacity: 1, scale: 1 }} // Animation end values
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            variants={imageVariants}
          >
            <img
              src="/assets/photo3.png"
              className="lg:max-w-[150%] md:max-w-[80%] sm:max-w-[10%] h-auto"
              alt="myimage"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
