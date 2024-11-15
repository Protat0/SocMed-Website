import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-600 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold justify-left">Post-It</a>
        <div className="space-x-16">
          <a href="/" className="text-white hover:text-gray-400">Home</a>
          <a href="/About" className="text-white hover:text-gray-400">About</a>
          <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
        </div>
          <a href='/Login' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-5">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;