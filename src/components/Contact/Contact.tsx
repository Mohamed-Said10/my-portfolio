const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 items-center h-screen" id="contact">
        <div className="col-span-1 p-4">
          <h1 className="text-3xl font-semibold text-center">
            Let’s Make Something <br />
            Amazing Together
          </h1>
          <h1 className="text-3xl italic font-semibold mt-20 text-center">
            Start by <span className="text-yellow-700">saying hi</span>
          </h1>
        </div>
        <div className="col-span-1 flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-yellow-700 mb-8">
            Get in touch
          </h1>
          <div className="flex w-full p-5 items-center">
            <div className="h-10 w-10 bg-white rounded-full">
              <img
                src="/assets/gmail.png"
                className="w-10 m-auto shadow-xl"
                alt="Monitor Icon"
              />
            </div>
            <h3 className="ml-3 text-xl font-semibold w-80">
              <a href="mailto:erguibi.mohamed.said21@gmail.com" target="_blank" rel="noopener noreferrer">erguibi.mohamed.said21@gmail.com</a>
            </h3>
          </div>
          <div className="flex w-full p-5 items-center">
            <div className="h-12 w-12 bg-white rounded-full">
              <img
                src="/assets/linkedin.png"
                className="w-10 m-auto shadow-xl"
                alt="Monitor Icon"
              />
            </div>
            <h3 className="ml-3 text-xl font-semibold w-80">
              <a href="https://www.linkedin.com/in/mohamed-said-er/" target="_blank" rel="noopener noreferrer">Find me on linkedIn</a>
            </h3>
          </div>
          <div className="flex w-full p-5 items-center">
            <div className="h-12 w-12 bg-white rounded-full">
              <img
                src="/assets/github.png"
                className="w-10 m-auto shadow-xl"
                alt="Monitor Icon"
              />
            </div>
            <h3 className="ml-3 text-xl font-semibold w-80">
              <a href="https://github.com/Mohamed-Said10" target="_blank" rel="noopener noreferrer">Take a look on my GitHub</a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
