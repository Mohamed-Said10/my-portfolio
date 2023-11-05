const Contact = () => {
  return (
    <>
      <div className="flex items-center h-screen">
        <div className="w-1/2 p-4 ">
          <h1 className="text-3xl font-semibold text-center">
            Let’s Make Something <br />
            Amazing Together
          </h1>
          <h1 className="text-3xl italic font-semibold mt-20 text-center">
            Start by <span className="text-yellow-700">saying hi</span>
          </h1>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-yellow-700 mt-auto">
            Information
          </h1>
          <div className="flex w-full p-5 justify-start items-center ml-72">
            <div className="h-10 w-10 bg-white rounded-full">
              <img
                src="../src/assets/gmail.png"
                className="w-10 m-auto shadow-xl"
                alt="Monitor Icon"
              />
            </div>
            <h3 className="ml-3 text-xl font-semibold w-20">
              <a href="mailto:erguibi.mohamed.said21@gmail.com" target="_blank">erguibi.mohamed.said21@gmail.com</a></h3>
          </div>
          <div className="flex w-full p-5 justify-start items-center ml-72">
            <div className="h-12 w-12 bg-white rounded-full">
              <img
                src="../src/assets/linkedin.png"
                className="w-10 m-auto shadow-xl"
                alt="Monitor Icon"
              />
            </div>
            <h3 className="ml-3 text-xl font-semibold w-full">
              <a href="https://www.linkedin.com/in/mohamed-said-er/" target="_blank">https://www.linkedin.com/in/mohamed-said-er/</a>
            </h3>
          </div>
          <div className="flex w-full p-5 justify-start items-center ml-72">
            <div className="h-12 w-12 bg-white rounded-full">
              <img
                src="../src/assets/github.png"
                className="w-10 m-auto shadow-xl"
                alt="Monitor Icon"
              />
            </div>
            <h3 className="ml-3 text-xl font-semibold w-full">
              <a href="https://github.com/Mohamed-Said10" target="_blank">https://github.com/Mohamed-Said10</a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
