import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Home/Home.css";

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !document.getElementById("menu-button")?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const scrollToRef = (ref: HTMLElement) => {
    if (!ref) return;
    const navbarHeight = 50; // Adjust this value according to your navbar height
    const topOffset = ref.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
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
        <div className="lg:hidden mr-4">
          <button
            id="menu-button"
            onClick={(event) => {
              event.preventDefault(); // Prevent default action
              toggleMenu(); // Toggle menu
            }}
            className={`text-black focus:outline-none focus:text-amber-500 ${
              isMenuOpen ? "open" : ""
            }`}
          >
            <div className="bg-white rounded-full px-2 py-1 text-center">
            {isMenuOpen ? (
                <span>✕</span>
              ) : (
                <span>☰</span>
              )}
            </div>
          </button>
        </div>

        {/* Navigation links */}
        <div
          ref={menuRef}
          className={`lg:flex mr-4 ${
            isMenuOpen ? "flex" : "hidden"
          } items-center absolute top-full z-10 home ${
            windowWidth < 768 && isMenuOpen ? "w-full" : "w-auto"
          }`}
          style={{
            flexDirection:
              window.innerWidth < 768 && isMenuOpen ? "column" : "row",
            position:
              window.innerWidth < 768 && isMenuOpen ? "absolute" : "static",
            right: window.innerWidth < 768 && isMenuOpen ? "0" : "auto",
          }}
        >
          <NavLink
            to="/"
            onClick={() => {
              handleLinkClick("home");
              scrollToRef(document.getElementById("home")!);
            }}
            className={`${activeLink === "home" ? "text-amber-500 bg-white" : ""} 
              rounded-2xl lg:px-4 xsm:px-8 xsm:py-4 xsm:text-xl xsm:w-full xsm:border-b-white xsm:border-b-2 xsm:border-t-white xsm:border-t-2 font-semibold text-center`}
          >
            HOME
          </NavLink>
          <NavLink
            to="/"
            onClick={() => {
              handleLinkClick("about");
              scrollToRef(document.getElementById("about")!);
            }}
            className={`${
              activeLink === "about" ? "text-amber-500 bg-white" : ""
            } rounded-2xl lg:px-4 xsm:px-8 xsm:py-4 xsm:text-xl xsm:w-full xsm:border-b-white xsm:border-b-2 font-semibold text-center`}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/"
            onClick={() => {
              handleLinkClick("works");
              scrollToRef(document.getElementById("works")!);
            }}
            className={`${
              activeLink === "works" ? "text-amber-500 bg-white" : ""
            } rounded-2xl lg:px-4 xsm:px-8 xsm:py-4 xsm:text-xl xsm:w-full xsm:border-b-white xsm:border-b-2 font-semibold text-center`}
          >
            WORK
          </NavLink>
          <NavLink
            to="/"
            onClick={() => {
              handleLinkClick("contact");
              scrollToRef(document.getElementById("contact")!);
            }}
            className={`${
              activeLink === "contact" ? "text-amber-500 bg-white" : ""
            } rounded-2xl lg:px-4 xsm:px-8 xsm:py-4 xsm:text-xl xsm:w-full xsm:border-b-white xsm:border-b-2 font-semibold text-center`}
          >
            CONTACT
          </NavLink>
          <NavLink
            to="https://mohamed-said-e24338.ingress-haven.ewp.live/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              handleLinkClick("blog");
            }}
            className={`${
              activeLink === "blog" ? "text-amber-500 bg-white" : ""
            } rounded-2xl lg:px-4 xsm:px-8 xsm:py-4 xsm:text-xl xsm:w-full xsm:border-b-white xsm:border-b-2 font-semibold text-center`}
          >
              BLOG
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
