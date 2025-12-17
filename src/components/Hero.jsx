import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { heroData } from "../data/heroData";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

const Hero = () => {
  const { theme } = useTheme();
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { name, description, socialLinks, roles ,cta,intro} = heroData;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToNext = () => {
    const section = document.getElementById(cta?.targetSection);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const bgGradient = theme === 'light'
    ? 'from-gray-50 via-blue-50/20 to-gray-50'
    : 'from-gray-900 via-blue-900/20 to-gray-900';
  const textGreyClass = theme === 'light' ? 'text-gray-700' : 'text-gray-300';
  const textMutedClass = theme === 'light' ? 'text-gray-600' : 'text-gray-400';
  const socialBgClass = theme === 'light' ? 'bg-gray-200 hover:bg-blue-600' : 'bg-gray-800 hover:bg-blue-600';
  const chevronClass = theme === 'light' ? 'text-gray-600' : 'text-gray-400';

  // const bgGradient =
  //   theme === "light"
  //     ? "from-gray-50 via-blue-50/20 to-gray-50"
  //     : "from-gray-900 via-blue-900/20 to-gray-900";

  // const textGreyClass = theme === "light" ? "text-gray-700" : "text-gray-300";
  // const textMutedClass = theme === "light" ? "text-gray-900" : "text-gray-400";
  // const socialBgClass =
  //   theme === "light"
  //     ? "bg-gray-900 hover:bg-blue-600"
  //     : "bg-gray-800 hover:bg-blue-600";
  // const chevronClass = theme === "light" ? "text-gray-600" : "text-gray-400";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient}`} />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className={`block ${textGreyClass}`}>{intro}</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>

          <div className="h-16 flex items-center justify-center">
            <p
              className={`text-2xl sm:text-3xl md:text-4xl ${textMutedClass} transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              {roles[currentRole]}
            </p>
          </div>

          <p
            className={`max-w-2xl mx-auto text-lg sm:text-xl ${textMutedClass} leading-relaxed`}
          >
            {description}
          </p>

          <div className="flex items-center justify-center gap-6 pt-8">
            {socialLinks.map((link, index) => {
              const Icon = iconMap[link.type];
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 ${socialBgClass} rounded-full transition-all duration-300 hover:scale-110 text-white`}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* <div className="pt-12">
            <button
              onClick={scrollToNext}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {cta.text}
              <ChevronDown size={20} />
            </button>
          </div> */}
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-1 left-[49%] -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className={chevronClass} />
      </button>
    </section>
  );
};

export default Hero;
