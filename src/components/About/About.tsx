const About = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-auto md:h-screen min-h-screen section lg:mb-28" id="about">
      <div className="col-span-1 flex flex-col justify-center items-center py-10 md:py-24 md:order-2 sm:h-full md:h-auto">
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl text-center font-bold mb-8 lg:mb-16 text-yellow-700">
            What do I help?
          </h1>
          <p className="text-lg lg:text-2xl font-semibold px-4 lg:ml-8 text-center md:ml-auto">
            I help businesses improve their ROI by creating well-designed, efficient, and user-friendly software            
          </p>
        </div>
        <div className="w-full lg:w-2/3 mt-8 lg:mt-48 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-yellow-700">
            10+
          </h1>
          <h5 className="text-3xl lg:text-5xl font-semibold mt-2 lg:mt-4 text-yellow-700">
            Projects Completed
          </h5>
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center md:order-1">
        <div className="flex flex-col w-full lg:w-2/3 p-6 lg:p-3 bg-white-200 shadow-xl lg:mt-16 mb-8 lg:mb-12">
          <div className="flex h-24 w-24 bg-yellow-700 rounded-full m-auto mb-4">
            <img src="/assets/Disign_Icon.png" className="w-14 m-auto" alt="Design Icon" />
          </div>
          <h3 className="text-xl lg:text-2xl font-semibold text-center">
            Design
          </h3>
        </div>
        <div className="flex flex-col w-full lg:w-2/3 p-6 lg:p-3 bg-white-200 shadow-xl mb-8 lg:mb-12">
          <div className="flex h-24 w-24 bg-yellow-700 rounded-full m-auto mb-4">
            <img src="/assets/Development.png" className="w-14 m-auto" alt="Development Icon" />
          </div>
          <h3 className="text-lg lg:text-2xl font-semibold text-center">
            Development
          </h3>
        </div>
        <div className="flex flex-col w-full lg:w-2/3 p-6 lg:p-3 bg-white-200 shadow-xl">
          <div className="flex h-24 w-24 bg-yellow-700 rounded-full m-auto mb-4">
            <img src="/assets/Testing.png" className="w-14 m-auto" alt="Testing Icon" />
          </div>
          <h3 className="text-xl lg:text-2xl font-semibold text-center">
            Testing
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;