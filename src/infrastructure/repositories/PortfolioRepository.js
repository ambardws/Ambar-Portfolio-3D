/**
 * Data Repository for Portfolio Information
 * Clean Architecture - Infrastructure Layer
 */

import { Portfolio, Project } from "../../domain/entities";
import heroUser from "../../assets/heroUser.jpeg";

// Mock data - in real app this would come from API/CMS
const portfolioData = {
  id: "ambar-portfolio",
  name: "Ambar",
  title: "Software Engineer",
  description: "I'm a Software Engineer and I'm an experienced frontend developer with 3 years of professional expertise.",
  profileImage: heroUser,
  
  services: [
    {
      title: 'Responsive Web Development',
      description: 'Building modern, mobile-first websites with clean code and optimal performance',
      icon: 'https://cdn.jsdelivr.net/npm/tabler-icons@latest/icons/device-desktop.svg',
      category: 'development'
    },
    {
      title: "UI/UX Implementation",
      description: 'Converting designs into pixel-perfect, interactive user interfaces',
      icon: 'https://cdn.jsdelivr.net/npm/tabler-icons@latest/icons/palette.svg',
      category: 'design'
    },
    {
      title: "Performance Optimization",
      description: 'Improving website speed, SEO, and Core Web Vitals for better user experience',
      icon: 'https://cdn.jsdelivr.net/npm/tabler-icons@latest/icons/rocket.svg',
      category: 'optimization'
    },
    {
      title: "Frontend Consulting",
      description: 'Providing technical guidance and code reviews for optimal development practices',
      icon: 'https://cdn.jsdelivr.net/npm/tabler-icons@latest/icons/users.svg',
      category: 'consulting'
    }
  ],
  
  technologies: [
    {
      name: "HTML 5",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg",
      isMain: true,
      proficiency: 90,
    },
    {
      name: "CSS 3",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg",
      isMain: true,
      proficiency: 85,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg",
      isMain: true,
      proficiency: 88,
    },
    {
      name: "React JS",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg",
      isMain: true,
      proficiency: 90,
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg",
      isMain: true,
      proficiency: 85,
    },
    {
      name: "Node JS",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg",
      isMain: false,
      proficiency: 75,
    },
  ],
  
  experiences: [
    {
      title: "Frontend Developer",
      company_name: "Ako Media Asia",
      icon: "/src/assets/company/ako-media-asia.png",
      iconBg: "#383E56",
      startDate: "2024-10-28",
      endDate: null,
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ],
  
  projects: [
    {
      id: "carrent",
      name: "Car Rent",
      shortDescription: "Web-based platform that allows users to search, book, and manage car rentals from various providers.",
      description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      technologies: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "Three.js" },
        { name: "Framer Motion" },
      ],
      images: ["/src/assets/carrent.png"],
      liveUrl: "https://carrent.example.com",
      sourceUrl: "https://github.com/example/carrent",
      completedDate: "2023-12-15",
      isFeatured: true,
      category: "Web Application",
      status: "completed",
    },
  ],
  
  contactInfo: {
    email: "ambar@example.com",
    phone: "+1234567890",
    location: "Indonesia",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ambar",
      github: "https://github.com/ambar",
      twitter: "https://twitter.com/ambar",
    },
  },
};

export class PortfolioRepository {
  async getPortfolio() {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Portfolio(portfolioData));
      }, 100);
    });
  }
  
  async getProjects(filters = {}) {
    // Simulate API call with filtering
    return new Promise((resolve) => {
      setTimeout(() => {
        let projects = portfolioData.projects.map(project => new Project(project));
        
        if (filters.featured) {
          projects = projects.filter(p => p.isFeatured);
        }
        
        if (filters.category) {
          projects = projects.filter(p => p.category === filters.category);
        }
        
        resolve(projects);
      }, 100);
    });
  }
}