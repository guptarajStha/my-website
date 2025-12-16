import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef =  useRef(null);

  const stats = [
    { number: 150, suffix: '+', label: 'Projects Completed' },
    { number: 50, suffix: '+', label: 'Happy Clients' },
    { number: 5, suffix: '+', label: 'Years Experience' },
    { number: 20, suffix: '+', label: 'Awards Won' },
  ];

  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js & Express', level: 88 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Database Design', level: 82 },
    { name: 'DevOps & Cloud', level: 78 },
  ];

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        setAnimatedStats((prev) => {
          const newStats = [...prev];
          newStats[index] = Math.min(Math.round(increment * currentStep), stat.number);
          return newStats;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  const bgClass = theme === 'light' ? 'bg-gray-50' : 'bg-gray-800/50';
  const cardBgClass = theme === 'light' ? 'bg-white border border-gray-200 text-gray-900' : 'bg-gray-800 text-gray-300';
  const textClass = theme === 'light' ? 'text-gray-900' : 'text-white';
  const textMutedClass = theme === 'light' ? 'text-gray-600' : 'text-gray-300';
  const techTagClass = theme === 'light' ? 'bg-white border border-gray-200 text-gray-900 hover:bg-blue-50' : 'bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white';

  return (
    <section id="skills" ref={sectionRef} className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 ${cardBgClass} rounded-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {animatedStats[index]}
                {stat.suffix}
              </div>
              <div className={textMutedClass}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${textClass}`}>Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} font-medium`}>{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className={`h-3 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'} rounded-full overflow-hidden`}>
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${textClass}`}>Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Vue.js',
                'Node.js',
                'Express',
                'MongoDB',
                'PostgreSQL',
                'MySQL',
                'Redis',
                'Docker',
                'AWS',
                'Git',
                'Tailwind CSS',
                'GraphQL',
                'REST API',
                'Webpack',
                'Jest',
                'Cypress',
              ].map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 ${techTagClass} rounded-lg transition-all duration-300 cursor-default hover:scale-105`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
