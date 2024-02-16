import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkranda");
  if (state.succeeded) {
    
  }

  return (
    <>
      <div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center h-screen"
          id="contact"
        >
          <div className="lg:p-4">
            <h1 className="text-3xl font-semibold text-center">
              Let’s Make Something <br />
              Amazing Together
            </h1>
            <h1 className="text-3xl italic font-semibold mt-20 text-center">
              Start by <span className="text-yellow-700">saying hi</span>
            </h1>
            <div className="flex justify-center mt-8">
              <button
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-md mr-4"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/mohamed-said-er/")
                }
              >
                LinkedIn
              </button>
              <button
                className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-md shadow-md"
                onClick={() => window.open("https://github.com/Mohamed-Said10")}
              >
                GitHub
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-yellow-700 mb-8">
              Get in touch
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center"
            >
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-80 border border-gray-300 rounded-md p-2 focus:outline-none mb-4"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                className="w-80 h-40 border border-gray-300 rounded-md p-2 focus:outline-none mb-4"
                placeholder="Your message..."
                id="message"
                name="message"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                type="submit"
                className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-md shadow-md"
                disabled={state.submitting}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
