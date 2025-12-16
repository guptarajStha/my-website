import {
  SiC,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUipath,
} from "react-icons/si";
import { useTheme } from "../context/ThemeContext";
const iconSize =50
const techStack = [
  { icon: <SiC size={iconSize}/>, name: "C Programming" },
  { icon: <SiCplusplus size={iconSize}/>, name: "C++" },
  { icon: <SiPython size={iconSize}/>, name: "Python" },
  { icon: <SiPhp size={iconSize}/>, name: "PHP" },
  { icon: <SiUipath size={iconSize}/>, name: "UiPath" },
  { icon: <SiHtml5 size={iconSize}/>, name: "HTML" },
  { icon: <SiJavascript size={iconSize}/>, name: "JavaScript" },
  { icon: <SiCss3 size={iconSize}/>, name: "CSS" },
  { icon: <SiReact size={iconSize}/>, name: "React" },
  { icon: <SiTailwindcss size={iconSize}/>, name: "TailwindCss" },
  { icon: <SiMysql size={iconSize}/>, name: "MySQL" },
  { icon: <SiDocker size={iconSize}/>, name: "Docker" },
];

const SkillsCarousel = () => {
  const { theme } = useTheme();
  const bgClass = theme === "light" ? "bg-gray-50" : "bg-gray-800/50";
  const iconColor = theme === "light" ? "text-gray-800" : "text-white";

  return (
    <section id="skills" className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center  mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Tech Stacks
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500  m-auto sm:mr-auto"></div>
            </div>

        <div className="overflow-hidden">
          <div className="flex animate-slide whitespace-nowrap gap-12">
            {techStack.concat(techStack).map((tech, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center ${iconColor} `}
              >
                <div className={`${iconColor} hover:text-blue-500  hover:scale-110`}>{tech.icon}</div>
                <span className="mt-2 text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS Animation */}
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          display: flex;
          gap: 3rem;
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsCarousel;
