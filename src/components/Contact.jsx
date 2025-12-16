import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { contactInfo } from '../data/contactData';
import { BiSend } from 'react-icons/bi';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');

    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 

  const bgClass = theme === 'light' ? 'bg-white' : 'bg-gray-900';
  const cardBgClass =
    theme === 'light'
      ? 'bg-gray-50 border border-gray-200 text-gray-900'
      : 'bg-gray-800 text-gray-300';
  const formBgClass =
    theme === 'light'
      ? 'bg-gray-50 border border-gray-200'
      : 'bg-gray-800';
  const inputBgClass =
    theme === 'light'
      ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
      : 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500';
  const textMutedClass = theme === 'light' ? 'text-gray-600' : 'text-gray-400';

  return (
    <section id="contact" className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className={`${textMutedClass} text-lg max-w-2xl mx-auto`}>
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className={`flex flex-col items-center p-6 ${cardBgClass} rounded-xl transition-all duration-300 hover:scale-105 group`}
            >
              <div className="text-blue-500 mb-4 group-hover:text-purple-400 transition-colors">
                {info.icon}
              </div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}
              >
                {info.title}
              </h3>
              <p className={`${textMutedClass} text-center`}>{info.value}</p>
            </a>
          ))}
        </div>
        

        {/* <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className={`${formBgClass} rounded-2xl p-8 space-y-6`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  } mb-2`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${inputBgClass}`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  } mb-2`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${inputBgClass}`}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className={`block text-sm font-medium ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                } mb-2`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${inputBgClass}`}
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                } mb-2`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors resize-none ${inputBgClass}`}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Send Message
              <BiSend size={20} />
            </button>

            {status === 'success' && (
              <div
                className={`p-4 rounded-lg text-center ${
                  theme === 'light'
                    ? 'bg-green-50 border border-green-300 text-green-700'
                    : 'bg-green-500/20 border border-green-500 text-green-300'
                }`}
              >
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
