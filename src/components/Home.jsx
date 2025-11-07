export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 text-white pt-16">
      <div className="text-center px-6">
        <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-700 flex items-center justify-center shadow-lg mb-6">
          <span className="text-3xl font-bold">AK</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Anidh Kaushik</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          I build clean, modern web apps using React, Tailwind and Three.js.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#projects" className="px-6 py-3 bg-blue-500 rounded-full font-semibold hover:bg-blue-600 transition">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-50 transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}