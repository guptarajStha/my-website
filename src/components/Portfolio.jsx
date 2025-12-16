import { ExternalLink, Github, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { projects } from "../data/portfolioData";
import { useState } from "react";

const Portfolio = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const bgClass = theme === "light" ? "bg-white" : "bg-gray-900";
  const textMutedClass = theme === "light" ? "text-gray-600" : "text-gray-400";
  const cardBgClass = theme === "light" ? "bg-gray-50" : "bg-gray-800";
  const tagBgClass =
    theme === "light"
      ? "bg-blue-100 text-blue-700"
      : "bg-gray-700 text-gray-300";

  return (
    <section id="portfolio" className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className={`${textMutedClass} text-lg max-w-2xl mx-auto`}>
            A selection of projects I've worked on, showcasing my skills across
            various technologies and domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
               onClick={() => setSelectedProject(project)}
              className={`group ${cardBgClass} rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    theme === "light"
                      ? "from-white via-white/50"
                      : "from-gray-900 via-gray-900/50"
                  } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4`}
                >
                  {!!project?.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  )}
                  {!!project?.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    theme === "light" ? "text-gray-900" : "text-white"
                  } group-hover:text-blue-400 transition-colors`}
                >
                  {project.title}
                </h3>
                <p className={`${textMutedClass} mb-4 line-clamp-2`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-sm ${tagBgClass} rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
    <div
      className={`relative max-w-3xl w-full mx-4 rounded-xl overflow-hidden ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      {/* Close button */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Image */}
      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h2
          className={`text-2xl font-bold mb-2 ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          {selectedProject.title}
        </h2>

        <p className={`${textMutedClass} mb-4`}>
          {selectedProject.description}
        </p>

        {/* Extra details (add whatever you want here) */}
        {selectedProject.longDescription && (
          <p className={`${textMutedClass} mb-6`}>
            {selectedProject.longDescription}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {selectedProject.tags.map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-sm ${tagBgClass} rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {selectedProject.github && (
            <a
              href={selectedProject.github}
              target="_blank"
              className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
            >
              GitHub
            </a>
          )}
          {selectedProject.demo && (
            <a
              href={selectedProject.demo}
              target="_blank"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default Portfolio;
