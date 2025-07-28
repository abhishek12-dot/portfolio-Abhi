// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's

// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

//   export const experiences = [
//   {
//     id: 1,
//     company: "Personal Project",
//     role: "E-commerce Website Developer",
//     date: "March 2025",
//     img: agcLogo, // Add an image path or URL
//     desc: "Built a full-stack responsive E-commerce website using React.js for frontend and Node.js with MongoDB for backend. Implemented product listing, cart functionality, user authentication, and admin dashboard.",
//     skills: ["React", "Node.js", "MongoDB", "Express", "CSS"]
//   },
//   {
//     id: 2,
//     company: "Automation Project",
//     role: "Form Automation with Google Apps Script",
//     date: "May 2025",
//     img: newtonschoolLogo, // Add an image path or URL
//     desc: "Created an automation system using Google Apps Script that collects form responses, stores them in Google Sheets, and triggers emails automatically based on input values.",
//     skills: ["Google Apps Script", "JavaScript", "Google Sheets", "Automation"]
//   }
// ];
  
  
  export const education = [
  {
    id: 0,
    img:glaLogo , // Add the NIU logo path or import
    school: "Noida International University, Noida",
    date: "Aug 2023 - July 2027",
    grade: "7.8 CGPA",
    degree: "Bachelor of Technology - B.Tech (CSE - AI & ML)",
    desc: "Currently pursuing my B.Tech in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning at Noida International University. The program is helping me build a solid foundation in software development, machine learning, data structures, and cloud technologies."
  },
  {
    id: 1,
    img: bsaLogo, // Use your school logo or placeholder
    school: "gov co-ed sr sec school preet vihar,delhi",
    date: "Apr 2021 - March 2022",
    grade: "76%",
    degree: "CBSE (Class XII) - PCM with Computer Science",
    desc: "Completed my Class 12 under the CBSE board with subjects including Physics, Chemistry, Mathematics, and Computer Science."
  },
  {
    id: 2,
    img: bsaLogo, // Same school as above
    school: "gov co-ed sr sec school preet vihar,delhi",
    date: "Apr 2019 - March 2020",
    grade: "78%",
    degree: "CBSE (Class X) - Science with Computer Applications",
    desc: "Completed my Class 10 under the CBSE board with a focus on Science and Computer Applications."
  }
];

  
  export const projects = [
   
  {
    id: 0,
    title: "E-commerce Website",
    description:
      "A responsive full-stack E-commerce platform built using React.js for the frontend and Node.js with MongoDB for the backend. It includes features like product listings, user authentication, cart management, and admin dashboard for order management.",
    image: webverLogo , // Replace with your actual image path or import
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/ecommerce-project", // Replace with your actual GitHub link
    webapp: "https://yourecommerceapp.netlify.app/", // Replace with your actual hosted app URL
  },
  {
    id: 1,
    title: "Form Automation Using Google Apps Script",
    description:
      "An automation project built with Google Apps Script that processes form responses, stores them in Google Sheets, and sends custom email notifications based on user input. Designed to streamline workflows and improve efficiency in data collection and response handling.",
    image: cmLogo, // Replace with your image path or use a placeholder
    tags: ["Google Apps Script", "JavaScript", "Google Sheets", "Automation"],
    github: "https://github.com/yourusername/google-form-automation", // Replace with your actual GitHub link
    webapp: "https://docs.google.com/spreadsheets/d/your-spreadsheet-id", // Optional: link to sample sheet or web app
  }
];
