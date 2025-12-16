import { useTheme } from "../context/ThemeContext";
import { aboutData } from "../data/aboutData";

const About = () => {
  const { theme } = useTheme();
  const { profile, features } = aboutData;

  const bgClass = theme === "light" ? "bg-gray-50" : "bg-gray-800/50";
  const textMutedClass = theme === "light" ? "text-gray-600" : "text-gray-300";
  const cardBgClass =
    theme === "light"
      ? "bg-white hover:bg-gray-100 border border-gray-200"
      : "bg-gray-800 hover:bg-gray-700";
  const profileBgClass = theme === "light" ? "bg-white" : "bg-gray-800";
  const textLightClass = theme === "light" ? "text-gray-700" : "text-gray-300";
  const textMutedLightClass =
    theme === "light" ? "text-gray-600" : "text-gray-400";

  return (
    <section id="about" className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div> */}

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 order-2 sm:order-1">
            <div className="text-center sm:text-left mb-8 hidden sm:block">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 m-auto sm:mr-auto sm:ml-0"></div>
            </div>
            {profile.description.map((paragraph, idx) => (
              <p
                key={idx}
                className={`text-lg ${textMutedClass} leading-relaxed text-justify`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
              <div
                className={`w-full h-full rounded-2xl ${profileBgClass} flex items-center justify-center`}
              >
                <div className="text-center space-y-4">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">
                      <img src={profile.image} alt="" />
                    </span>
                  </div>
                  <p className={`text-xl font-semibold ${textLightClass}`}>
                    {profile.name}
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="text-center sm:text-left mb-8 block sm:hidden">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500  m-auto sm:mr-auto sm:ml-0"></div>
          </div>
          {/* <div className="relative flex justify-center md:justify-end order-1 sm:order-2">

            <div
              className="absolute w-[380px] h-[380px] hover:rounded-full 
    bg-gradient-to-r from-blue-500/40 to-purple-500/40 
    blur-3xl animate-pulse"
            ></div>

            <div
              className="relative p-2 hover:rounded-full 
    bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500"
            >
              <div
                className={`w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] 
      hover:rounded-full overflow-hidden ${profileBgClass}
      flex items-center justify-center
      transition-all duration-500 
      hover:scale-105 hover:shadow-2xl`}
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

        
          </div> */}
          <div className="relative flex justify-center md:justify-end order-1 sm:order-2 group">
            {/* Glow */}
            <div
              className="absolute w-[380px] h-[380px] rounded-full
    bg-gradient-to-r from-blue-500/25 to-purple-500/25
    blur-3xl opacity-70
    transition-all duration-700 ease-out
    group-hover:opacity-100 group-hover:scale-105"
            />

            {/* Gradient Ring */}
            <div
              className="relative p-[6px] rounded-[28px]
    bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500
    transition-[border-radius,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
    group-hover:rounded-full"
            >
              {/* Image Wrapper */}
              <div
                className={`w-[320px] h-[320px] sm:w-[350px] sm:h-[350px]
      rounded-[24px] overflow-hidden ${profileBgClass}
      transition-[border-radius,box-shadow,transform] duration-700
      ease-[cubic-bezier(0.16,1,0.3,1)]
      group-hover:rounded-full group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]
      group-hover:translate-y-[-6px]`}
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover
        transition-transform duration-[900ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]
        group-hover:scale-[1.06]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-6 ${cardBgClass} rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
              >
                <div className="text-blue-500 mb-4 group-hover:text-purple-400 transition-colors">
                  <Icon size={32} />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    theme === "light" ? "text-gray-900" : "text-white"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className={textMutedClass}>{feature.description}</p>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default About;
