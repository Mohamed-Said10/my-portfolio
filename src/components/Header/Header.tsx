import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Your Name</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
