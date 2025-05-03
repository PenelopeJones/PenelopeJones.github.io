
import React from "react";

const Header = () => {
  return (
    <header className="py-8 w-full">
      <div className="container flex justify-end items-center">
        <div className="flex space-x-6 text-sm">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            Twitter
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
