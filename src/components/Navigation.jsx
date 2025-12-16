import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navigation = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navBgClass = theme === 'light' ? 'bg-white/95' : 'bg-gray-900/95';
  const navBorderClass =
    theme === 'light' ? 'border-gray-200' : 'border-gray-800';
  const navTextMutedClass =
    theme === 'light'
      ? 'text-gray-600 hover:text-gray-900'
      : 'text-gray-300 hover:text-white';
  const mobileNavBgClass =
    theme === 'light' ? 'bg-white/95' : 'bg-gray-900/95';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${navBgClass} backdrop-blur-sm border-b ${navBorderClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Guptaraj
              </h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-blue-500'
                        : navTextMutedClass
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'light'
                    ? 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  theme === 'light'
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className={`fixed inset-0 ${mobileNavBgClass} backdrop-blur-sm pt-16`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-2xl font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-500'
                      : navTextMutedClass
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
