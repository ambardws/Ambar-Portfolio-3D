/**
 * Portfolio Domain Entity
 * Core business logic entity representing a portfolio
 */
export class Portfolio {
  constructor({ 
    id, 
    name, 
    title, 
    description, 
    services = [], 
    technologies = [], 
    experiences = [], 
    projects = [],
    profileImage,
    contactInfo = {} 
  }) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.description = description;
    this.services = services;
    this.technologies = technologies;
    this.experiences = experiences;
    this.projects = projects;
    this.profileImage = profileImage;
    this.contactInfo = contactInfo;
  }

  // Business logic methods
  getYearsOfExperience() {
    if (this.experiences.length === 0) return 0;
    
    const sortedExperiences = this.experiences.sort((a, b) => 
      new Date(a.startDate) - new Date(b.startDate)
    );
    
    const firstJobDate = new Date(sortedExperiences[0].startDate);
    const currentDate = new Date();
    
    return Math.floor((currentDate - firstJobDate) / (365.25 * 24 * 60 * 60 * 1000));
  }

  getMainTechnologies() {
    return this.technologies
      .filter(tech => tech.isMain)
      .sort((a, b) => b.proficiency - a.proficiency);
  }

  getLatestProjects(limit = 3) {
    return this.projects
      .sort((a, b) => new Date(b.completedDate) - new Date(a.completedDate))
      .slice(0, limit);
  }

  getFeaturedProjects() {
    return this.projects.filter(project => project.isFeatured);
  }
}