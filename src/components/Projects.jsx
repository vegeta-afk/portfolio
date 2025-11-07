const Projects = () => {
  const projects = [
    {
      title: "TODO-List App",
      desc: "Full-stack TODO-List application with Vanilla JS & HTML",
      color: "from-blue-500 to-blue-700",
      link: "https://todo-app-g6zb.vercel.app/",
    },
    {
      title: "Weather App",
      desc: "Mobile weather application with real-time data",
      color: "from-purple-500 to-purple-700",
      link: "https://weather-app-seven-gray-38.vercel.app/",
    },
    {
      title: "Road-Rescue App",
      desc: "Real-time vehicle tracking and emergency response application",
      color: "from-indigo-500 to-indigo-700",
      link: "https://github.com/vegeta-afk/Roadrescue01",
    },
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-70 rounded-xl overflow-hidden card-hover glow"
            >
              <div
                className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center`}
              >
                <span className="text-white text-2xl font-bold">
                  {project.title.split(" ")[0]}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
