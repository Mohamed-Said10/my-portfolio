// Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-500 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Developed by me with ❤️</p>
    </footer>
  );
};

export default Footer;
