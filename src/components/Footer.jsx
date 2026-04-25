import { useTheme } from "../context/ThemeContext";
import { footerData, socialMediaData } from "../data/heroData";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();


  const bgClass =
    theme === "light"
      ? "bg-gray-100 border-gray-300"
      : "bg-gray-800 border-gray-700";
  const textMutedClass = theme === "light" ? "text-gray-600" : "text-gray-400";
  // const linkClass =
  //   theme === "light"
  //     ? "text-gray-700 hover:text-blue-600"
  //     : "text-gray-400 hover:text-blue-400";
  const socialBgClass =
    theme === "light"
      ? "bg-gray-500 hover:bg-blue-600"
      : "bg-gray-700 hover:bg-blue-600";

  return (
    <footer className={`${bgClass} border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div
          className={` text-center ${
            theme === "light" ? "border-gray-300" : "border-gray-700"
          }`}
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            {footerData.name}
          </h3>
          <p className={`${textMutedClass} mb-4`}>
            {footerData.description}
          </p>
          <div className="flex gap-4  justify-center mb-4">
            {socialMediaData.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 ${socialBgClass} rounded-lg transition-all duration-300 hover:scale-110 text-white`}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p
            className={`text-sm mt-2 ${
              theme === "light" ? "text-gray-500" : "text-gray-500"
            }`}
          >
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
