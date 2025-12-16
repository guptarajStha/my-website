import { useTheme } from "../context/ThemeContext";
import { BookOpen, Award } from "lucide-react";
import { certifications, education } from "../data/educationData";

const Education = () => {
  const { theme } = useTheme();

  const bgClass = theme === "light" ? "bg-white" : "bg-gray-900";
  const cardBgClass =
    theme === "light"
      ? "bg-gray-50 border border-gray-200"
      : "bg-gray-800 border border-gray-700";
  const textClass = theme === "light" ? "text-gray-900" : "text-white";
  const textMutedClass = theme === "light" ? "text-gray-600" : "text-gray-400";

  return (
    <section id="education" className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            {/* <h3 className={`text-3xl font-semibold mb-8 flex items-center gap-3 ${textClass}`}>
              <BookOpen className="text-blue-500" size={28} />
              Education
            </h3> */}
            <div className="text-center sm:text-left mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Education
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500  m-auto sm:mr-auto sm:ml-0"></div>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${cardBgClass}`}
                >
                  <h4 className={`text-xl font-semibold mb-2 ${textClass}`}>
                    {edu.degree}
                  </h4>
                  <p className="text-lg text-blue-500 font-medium mb-1">
                    {edu.school}
                  </p>
                  <p className={`text-sm mb-3 ${textMutedClass}`}>{edu.year}</p>
                  <p className={`mb-4 ${textMutedClass}`}>{edu.description}</p>

                  <div className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className={textMutedClass}>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* <h3
              className={`text-3xl font-semibold mb-8 flex items-center gap-3 ${textClass}`}
            >
              <Award className="text-purple-500" size={28} />
              Publications / Awards
            </h3> */}
             <div className="text-center sm:text-left mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Publications / Awards
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500  m-auto sm:mr-auto sm:ml-0"></div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-105 ${cardBgClass}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex-shrink-0">
                      <Award size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-1 ${textClass}`}>
                        {cert.name}
                      </h4>
                      <p className="text-sm text-purple-500 font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className={`text-xs ${textMutedClass}`}>{cert.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
