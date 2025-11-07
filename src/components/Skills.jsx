const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "Creative Designing", level: 85 },
    { name: "Bootstrap", level: 85 },
    { name: "Tailwind CSS", level: 90 },
  ];

  return (
    <section
      id="skills"
      className="py-20 relative z-10 bg-gray-800 bg-opacity-70"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          My <span className="text-blue-400">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 bg-opacity-50 p-6 rounded-xl card-hover"
            >
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-blue-400">
                  {skill.level}%
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-white mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
