import {  Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const name = "Er. Guptaraj Shrestha";
export const heroData = {
  name: name,
  intro: "Hello, I'm",
  description:
    "I build interactive and seamless web experiences while leveraging my backend knowledge in PHP and Python for full-stack solutions.",

  roles: ["Computer Engineer", "Software Developer", "RPA Developer"],
  socialLinks: [
    {
      type: "github",
      url: "https://github.com/guptarajStha",
    },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/in/guptaraj-shrestha-a813481a6/",
    },
    {
      type: "email",
      url: "mailto:guptarajshrestha@gmail.com",
    },
  ],
  cta: {
    text: "View My Work",
    targetSection: "about",
  },
};
export const footerData = {
  name: name,
  // description:"passionate about building modern, responsive, and user-focused web applications."
  // description:"I build interactive and seamless web experiences while leveraging my backend knowledge in PHP and Python for full-stack solutions."
  // description:"Crafting seamless digital experiences with modern technologies. Passionate about clean code, intuitive design, and building interactive, user-focused applications."
};
export const socialMediaData = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/guptarajStha",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn size={20} />,
    href: "https://www.linkedin.com/in/guptaraj-shrestha-a813481a6",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:guptarajshrestha@gmail.com",
    label: "Email",
  },
];
