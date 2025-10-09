import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  starbuck,
  marketplace,
  movie,
  angular,
  vue,
  next
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Angular Developer",
    icon: web,
  },
  {
    title: "Vue Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Ako Media Asia",
    icon: 'https://media.licdn.com/dms/image/v2/D560BAQH-lIDHavg74g/company-logo_100_100/company-logo_100_100/0/1708583074448/salt_indonesia_logo?e=1762992000&v=beta&t=08h44Dd-1arwQ9yqzmahDULcvbwj_Ac6Wwc5LIJrO68',
    iconBg: "#d20681",
    date: "Oct 2024 - Present",
    points: [
      "Developing and maintaining web applications",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Implementing unit and integration tests using Jest to ensure code quality and reliability.",
      "Implementing gzip compression and lazy loading to optimize web application performance and reduce load times.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Meteor Inovasi Digital",
    icon: 'https://media.licdn.com/dms/image/v2/D4D0BAQETuQ4t1c57vA/company-logo_100_100/company-logo_100_100/0/1683189653916/meteorid_logo?e=1762992000&v=beta&t=XZJPXnxhkjBBVsddN0hKfKN88B4FbcvaHdt_o6oB6vM',
    iconBg: "#FE0000",
    date: "Feb 2022 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Axiata Digital Labs",
    icon: 'https://media.licdn.com/dms/image/v2/C560BAQE9-4bSDMJ8mg/company-logo_100_100/company-logo_100_100/0/1631153821451/axiatadigitallabsatthelab_logo?e=1762992000&v=beta&t=_0cSyGiM-Hg2-ynN9c60NQpV_33ORfRr2TVMVLj1YSg',
    iconBg: "#FFF",
    date: "Apr 2022 - Jun 2023",
    points: [
      "Built web frontends using Angular and TypeScript.",
      "Implemented dynamic client-side logic and reusable components with TypeScript.",
      "Integrated frontend interfaces with backend services and APIs.",
    ],
  },
  {
    title: "Internship Full Stack Developer",
    company_name: "Uasoft",
    icon: 'https://media.licdn.com/dms/image/v2/C560BAQERZfLHJSABOw/company-logo_100_100/company-logo_100_100/0/1630654277581/uatech_logo?e=1762992000&v=beta&t=oGWK29uz4uiq0Cor81noKmYkb5MmVXV6aPQ1wBVDwIM',
    iconBg: "#000",
    date: "Aug 2020 - Oct 2020",
    points: [
      "Developed software using PHP and the Laravel framework.",
      "Implemented the 'Guru Saham' Telegram bot to deliver stock insights and notifications.",
      "Added and enhanced features for the 'Guru Saham' bot to improve usability and functionality.",
      "Developed and extended features in the Guru Saham administrative web panel.",
      "Identified, diagnosed, and fixed bugs to improve application stability and performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ambar proved me wrong.",
    name: "Ryan Apriansyah",
    designation: "Senior Frontend Developer",
    company: "Ako Media Asia",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who trully cares about their client's success like Ambar does.",
    name: "Jodhi Gunawan",
    designation: "Frontend Developer",
    company: "Freelancer Abtract Writer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Ambar has always been determined and curious since childhood. Watching him grow into a skilled developer makes me incredibly proud. His dedication to learning new things never stops amazing me.",
    name: "My Mother",
    designation: "CEO",
    company: "Home",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Starbucks PWA",
    description:
      "Web-based platform PWA for ordering and managing Starbucks products.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "zustand",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: starbuck,
    source_code_link: "https://github.com/",
  },
  {
    name: "Marketplace App",
    description:
      "Web application for buying and selling products. Users can browse, search, and filter products, as well as view product details and reviews.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "zustand",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: marketplace,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movie App",
    description:
      "A comprehensive movie discovery platform that allows users to browse, search, and watch movies, as well as view detailed information about each film.",
    tags: [
      {
        name: "nuxtjs",
        color: "blue-text-gradient",
      },
      {
        name: "themoviedb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
