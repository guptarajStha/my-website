import { Code2, Palette, Rocket, Users } from 'lucide-react';
// import profileImg from "../images/Guptaraj-Shrestha.webp"
import { getImageUrl } from '../helper/ImageHelper';


export const aboutData = {
  profile: {
    initials: 'GS',
    image:'/images/Guptaraj-Shrestha.webp',
    name: 'Guptaraj Shrestha',
    role: 'Full Stack Developer',
    // description: [
    //   "I'm a passionate developer and designer with over 5 years of experience creating exceptional digital experiences. My journey in tech started with a curiosity for how things work and evolved into a career dedicated to crafting innovative solutions.",
    //   "I specialize in building modern web applications using cutting-edge technologies. Whether it's a complex web platform or a simple landing page, I approach every project with dedication, creativity, and attention to detail.",
    //   "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
    // ],
    description: [
      "I’m a passionate developer with experience building full-stack applications, CMS projects, and real-time web platforms. My technical skills span frontend technologies like ReactJS, TailwindCSS, HTML, CSS, and JavaScript, as well as backend  such as PHP and Python (FastAPI).",
      "I enjoy turning complex problems into efficient, user-friendly solutions, and I focus on writing clean, maintainable code. My projects include CMS systems, EV charging management platforms (OCPP), and automation workflows (like SAP Automation using RPA), demonstrating a balance of creativity and technical expertise.",
    ],
  },
  features: [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Transforming ideas into beautiful, user-friendly interfaces.',
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and exceptional user experience.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver outstanding results.',
    },
  ],
};
