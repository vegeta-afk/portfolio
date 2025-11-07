import { useState } from "react";
import ThreeScene from "./components/ThreeScene";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Three.js Background */}
      <ThreeScene />
      
      {/* Content with proper z-index */}
      <div className="relative z-10">
        <Navigation
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
          <div className="container mx-auto px-6 text-center">
            <div className="floating mb-12">
              <div className="w-60 h-60 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-700 flex items-center justify-center glow">
                <span className="text-7xl font-bold text-white">AK</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-8xl font-bold mb-6 text-white">
              Anidh <span className="text-blue-400">Kaushik</span>
            </h1>
            
            <p className="text-3xl md:text-2xl text-gray-300 mb-12">
              Creative Developer & Front-End Developer
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-12 py-5 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105 glow text-white"
              >
                See My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-12 py-5 border-4 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>
          </div>
        </section>
        
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

const Footer = () => (
  <footer className="py-8 bg-gray-900 bg-opacity-90">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        {[
          {
            name: "github",
            url: "https://github.com/vegeta-afk?tab=repositories",
            icon: "G",
          },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/feed/",
            icon: "L",
          },
          {
            name: "twitter",
            url: "https://twitter.com/",
            icon: "X",
          },
          {
            name: "dribbble",
            url: "https://dribbble.com/",
            icon: "D",
          },
        ].map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
              <span className="font-semibold">{social.icon}</span>
            </div>
          </a>
        ))}
      </div>
      <p className="text-gray-400">
        © 2025 Anidh Kaushik. All rights reserved.
      </p>
    </div>
  </footer>
);

export default App;