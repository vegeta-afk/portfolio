const Navigation = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/30 backdrop-blur-md border-b border-gray-700/30 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Left side - Portfolio text */}
        <div className="text-2xl font-bold text-blue-400 pulse">Portfolio</div>

        {/* Right side - Navigation links */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "projects", "skills", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-all duration-300 ${
                activeSection === section
                  ? "text-blue-400 font-semibold border-b-2 border-blue-400"
                  : "text-gray-200 hover:text-blue-300"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
