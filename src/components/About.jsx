const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 bg-opacity-70 mt-16">
      {" "}
      {/* Added mt-16 here */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image/Avatar */}
          <div className="md:w-1/3">
            <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center glow floating">
              <span className="text-5xl font-bold text-white">AK</span>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Hello, I'm Anidh Kaushik
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              I'm a passionate full-stack developer with over 0 years of
              experience creating amazing digital experiences. I love building
              modern, interactive websites.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg text-center card-hover">
                <div className="text-2xl font-bold text-blue-400">5+</div>
                <div className="text-gray-300">Projects</div>
              </div>
              <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg text-center card-hover">
                <div className="text-2xl font-bold text-blue-400">0+</div>
                <div className="text-gray-300">Years Exp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
