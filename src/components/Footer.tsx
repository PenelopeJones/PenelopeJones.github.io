
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 w-full border-t border-white/10">
      <div className="container flex justify-between items-center">
        <div className="text-sm font-serif text-gray-400">© {new Date().getFullYear()} Penelope Jones</div>
        <div className="text-sm font-serif text-gray-400">
          <a 
            href="mailto:contact@penelopejones.com" 
            className="hover:text-white transition-colors"
          >
            contact@penelopejones.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
