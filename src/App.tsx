import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import "./App.css";
import Navbar from "./components/Layout/Navbar";

function App() {
  
  const scrollToRef = (ref: HTMLElement) => {
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar scrollToRef={scrollToRef} />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="works">
        <Works />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
