const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 mb-16" // Added mb-16 here
    >
      <div className="container mx-auto px-6 text-center z-10">
        {/* Floating Avatar */}
        <div className="floating mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-700 flex items-center justify-center glow">
            <span className="text-4xl font-bold text-white">AK</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Anidh <span className="text-blue-400">Kaushik</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Creative Developer & Front-end Developer
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 glow"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
