import majorImage from "../images/major.png";
import minorImage from "../images/minor.png";
import relianceImage from "../images/image.png";
import uipathImage from "../images/uipath.png";
import chargingImage from "../images/charging.png";
export const projects = [
  {
    title: "EV Charging Management System",
    description:
      "Developed a management system for electric vehicle charging stations using OCPP. Built backend APIs with FastAPI, handled real-time communication with EVSEs, and implemented system integrations for seamless operations.",
    image: chargingImage,
    tags: ["Python", "Websocket", "OCPP", "APIs", "Backend"],
    github: "",
    demo: "",
  },
  {
    title: "SAP Automation with UiPath",
    description:
      "Designed and implemented automation workflows in SAP using UiPath, automating repetitive business tasks and improving operational efficiency.",
    image: uipathImage,
    tags: ["UiPath", "RPA", "SAP", "Automation"],
    github: "", // if you have any demo or repo (usually private for RPA)
    demo: "", // optional
  },
  {
    title: "Reliance Residential CMS Website",
    description:
      "Custom CMS website designed, developed, and deployed on cPanel, featuring dynamic content management, responsive design, and user-friendly administration interface.",
    image: relianceImage,
    tags: [
      "Freelancing",
      "PHP",
      "Yii2",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "cPanel",
    ],
    github: "", // replace with repo link if available
    demo: "https://relianceresidential.edu.np/",
  },
  {
    title: "NSL Letter Detection and Finger Spelling Using Mediapipe and CNN",
    description:
      "This project is major project for Bachelor's Degree which is based web based application. Detect Nepali Sign language's Alphabet and form the word.",
    image: majorImage,
    tags: ["Major Project", "Mediapipe", "Python", "openCV", "Django", "React"],
    github: "https://github.com/guptarajStha/nsl_finger_spelling",
    demo: "https://drive.google.com/file/d/1E_JsaeBNztXwpiZGfE7574UYsnxSpiFq/view",
  },
  {
    title: "Dyslexic Detection",
    description:
      " This project is minor project for Bachelor's Degree which is based web based application. Make Prediction whether the user is Dyslexic or Non-Dyslexic based on answer given by user.",
    image: minorImage,
    tags: ["Minor Project", "Python", "Django", "Naive Bayes", "React"],
    github: "https://github.com/guptarajStha/minor_Project",
    demo: "https://drive.google.com/file/d/1a8SpW3dc3geFye0eABzUORswz6gxGMPj/view",
  },
];
