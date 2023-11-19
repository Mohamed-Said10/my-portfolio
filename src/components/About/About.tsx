const About = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen section" id="about">
        <div className="col-span-1 flex flex-col justify-center items-center">
          <div className="flex w-2/3 p-10 bg-white-200 shadow-xl">
            <div className="flex h-24 w-24 bg-yellow-700 rounded-full">
              <img src="../src/assets/monitor.png" className="w-10 m-auto" />
            </div>
            <h3 className="m-auto text-4xl font-semibold">Design</h3>
          </div>
          <div className="flex w-2/3 p-10 bg-white-200 my-12 shadow-xl">
            <div className="flex h-24 w-24 bg-yellow-700 rounded-full">
              <img src="../src/assets/monitor.png" className="w-10 m-auto" />
            </div>
            <h3 className="m-auto text-3xl font-semibold">Development</h3>
          </div>
          <div className="flex w-2/3 p-10 bg-white-200 shadow-xl">
            <div className="flex h-24 w-24 bg-yellow-700 rounded-full">
              <img src="../src/assets/monitor.png" className="w-10 m-auto" />
            </div>
            <h3 className="m-auto text-4xl font-semibold">Test</h3>
          </div>
        </div>
        <div className="col-span-1 py-24">
          <div className="">
            <h1 className="w-2/3 text-6xl font-bold text-center mb-16 text-yellow-700">
              What do I help?
            </h1>
            <p className="w-2/3 text-2xl font-semibold text-left ml-8">
              I help businesses improve their ROI by creating software that is
              well-designed, efficient, and user-friendly.
            </p>
          </div>
          <div>
            <h1 className="w-2/3 text-6xl font-bold text-center mt-48 text-yellow-700">
              10+
            </h1>
            <h5 className="w-2/3 text-5xl text-center font-semibold mt-4 text-yellow-700">
              Projects Completed
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
