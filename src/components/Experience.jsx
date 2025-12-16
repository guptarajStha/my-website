import { useTheme } from "../context/ThemeContext";
import { ArrowRight, BookOpen, Briefcase, Calendar } from "lucide-react";
import { experiences } from "../data/experienceData";
import { education } from "../data/educationData";

const Experience = () => {
  const { theme } = useTheme();

  const bgClass = theme === "light" ? "bg-gray-50" : "bg-gray-800/50";
  const cardBgClass =
    theme === "light"
      ? "bg-white border border-gray-200"
      : "bg-gray-800 border border-gray-700";
  const textClass = theme === "light" ? "text-gray-900" : "text-white";
  const textMutedClass = theme === "light" ? "text-gray-600" : "text-gray-400";

  return (
    <section id="experience" className={`pb-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div> */}

        {/* <div className="grid lg:grid-cols-2 gap-12"> */}
        <div>
          <div className="text-center sm:text-left mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500  m-auto sm:mr-auto sm:ml-0"></div>
          </div>
          {/* Timeline */}
          <div className="relative border-l-2 border-blue-500/50 ml-4">
            {experiences.map((exp, index) => 
            (
              <div key={index} className="mb-12 ml-6 relative max-w-5xl">
                {/* Timeline Marker */}
                <span className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-blue-500 border-1 border-white"></span>

                {/* Experience Card */}
                <div
                  className={`p-6 rounded-xl ${cardBgClass} shadow-md hover:shadow-xl hover:border-l-8 hover:border-l-blue-500  transition-all duration-300`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className={`text-2xl font-semibold ${textClass}`}>
                      {exp.title}
                    </h3>
                    <span
                      className={`flex items-center gap-2 text-sm font-medium ${textMutedClass}`}
                    >
                      <Calendar size={16} /> {exp.duration}
                    </span>
                  </div>

                  <p className="text-lg text-blue-500 font-medium mb-3">
                    {exp.company}
                  </p>
                  <div className={`mb-4 leading-relaxed ${textMutedClass}`}>
                    <ul className="space-y-2">
                      {exp.description.map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="group flex items-start gap-2 max-w-2xl"
                        >
                          {/* Arrow */}
                          <span
                            className="
          mt-1
          flex items-center justify-center
          transition-all
          duration-300
          ease-out
          text-gray-400
          group-hover:translate-x-1
          group-hover:text-primary
        "
                          >
                            <ArrowRight size={16} />
                          </span>

                          {/* Text */}
                          <span className="leading-relaxed transition-transform duration-300 group-hover:translate-x-1">
                            {desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-sm rounded-full ${
                          theme === "light"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            
            ))}
          </div>
        </div>

        {/* </div> */}
      </div>
    </section>
  );
};

export default Experience;
