
import React, { useEffect } from "react";
import Content from "../components/Content";

const Index = () => {
  useEffect(() => {
    // Set the title
    document.title = "Penelope Jones";
  }, []);

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <div className="fixed w-full h-full bg-gradient-to-br from-[#121212] via-[#131313] to-[#1a1a1a] -z-10"></div>
      <main className="flex-1">
        <Content />
      </main>
    </div>
  );
};

export default Index;
