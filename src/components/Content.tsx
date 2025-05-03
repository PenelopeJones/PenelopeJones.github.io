
import React from "react";

const Content = () => {
  return (
    <div className="container py-16 md:py-24 min-h-screen flex flex-col justify-center">
      <h1 className="text-3xl md:text-5xl font-serif font-bold mb-10 text-gradient">
        Penelope Jones
      </h1>
      
      <div className="max-w-3xl space-y-6 text-lg font-serif text-gray-300">
        <p>
          I'm the founder and CEO of <a href="https://ohm.ai" className="underline hover:text-white transition-colors">Ohm</a>. We deploy AI agents across battery teams around the world.
        </p>
        
        <p>
          I believe the West needs a competitive, sustainable battery ecosystem. It's a path to an energy-abundant, geopolitically stable future - one that protects nature and supports our values. I'm spending my twenties building to make that happen.
        </p>
        
        <p>
          I did my PhD in Physics in the <a href="https://www.phy.cam.ac.uk/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Cavendish Laboratory</a> at Cambridge University researching batteries and building models to identify how to best design and use them. I spent time at the <a href="https://www.turing.ac.uk/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Alan Turing Institute</a>. I built a battery lab in my bedroom during the Covid-19 pandemic so I could keep going with my research and my company.
        </p>
        
        <p>
          I want to have fun, feel it all, and enjoy the beauty of life. I love the people in my life.
        </p>
        
        <p className="text-gray-300">
          Thanks for being here,
        </p>
        
        <p>
          Penelope
        </p>
      </div>
    </div>
  );
};

export default Content;
