import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Works from './components/Works/Works';
import './App.css';
import Navbar from './components/Layout/Navbar';


function App() {



  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/works" element={<Works/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    <About/>
    <Works/>
    <Contact/>
    </>
  )
}

export default App
