import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md bg-opacity-30 border-b border-gray-300/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-white text-xl font-bold">Adify.AI</div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#features"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </div>

          <div>
            <div className="flex max-w-xs rounded-lg bg-gradient-to-tr from-green-800 to-purple-800 p-0.5 shadow-md ">
              <button className="flex-1 font-semibold text-sm bg-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-90">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
