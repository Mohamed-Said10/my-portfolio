import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#F2E3C3] to-[#F2E3C3] via-stone-300 text-black p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Developed by me with code and ❤️</p>
    </footer>
  );
};

export default Footer;
