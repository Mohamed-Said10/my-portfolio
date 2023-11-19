import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Home/Home.css';

interface NavbarProps {
  scrollToRef: (ref: HTMLElement) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event: any) => {
    if (!event.target.closest('#menu-button') && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="home p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center pl-4 pr-4 lg:pl-40 lg:pr-40">
        <div className="text-black">
          <h1 className="text-xl font-semibold hover:text-amber-500">
            <NavLink to="/">Mohamed Said</NavLink>
          </h1>
        </div>

        {/* Responsive menu button */}
        <div className="lg:hidden">
          <button
            id="menu-button"
            onClick={toggleMenu}
            className={`text-black focus:outline-none focus:text-amber-500 ${isMenuOpen ? 'open' : ''}`}
          >
            ☰
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`lg:flex flex-end ${isMenuOpen ? 'flex' : 'hidden'} lg:items-center absolute top-full z-10`}
          style={{
            flexDirection: window.innerWidth < 768 && isMenuOpen ? 'column' : 'row',
            position: window.innerWidth < 768 && isMenuOpen ? 'absolute' : 'static',
            right: window.innerWidth < 768 && isMenuOpen ? '0' : 'auto',
          }}
          onClick={handleOutsideClick}
        >
          <NavLink
            to="/"
            onClick={() => scrollToRef(document.getElementById('home')!)}
            className={({ isActive }) =>
              isActive
                ? 'text-amber-500 rounded-2xl  lg:px-4 font-semibold'
                : 'hover:text-amber-500 rounded-2xl lg:px-4 lg:py-2 md:px-4 font-semibold'
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => scrollToRef(document.getElementById('about')!)}
            className={({ isActive }) =>
              isActive
                ? 'text-amber-500 rounded-2xl  lg:px-4 font-semibold'
                : 'hover:text-amber-500 rounded-2xl lg:px-4 lg:py-2 md:px-4 font-semibold'
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/works"
            onClick={() => scrollToRef(document.getElementById('works')!)}
            className={({ isActive }) =>
              isActive
                ? 'text-amber-500 rounded-2xl  lg:px-4 font-semibold'
                : 'hover:text-amber-500 rounded-2xl lg:px-4 lg:py-2 font-semibold'
            }
          >
            WORK
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => scrollToRef(document.getElementById('contact')!)}
            className={({ isActive }) =>
              isActive
                ? 'text-amber-500 rounded-2xl  lg:px-4 font-semibold'
                : 'hover:text-amber-500 rounded-2xl  lg:px-4 font-semibold'
            }
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
