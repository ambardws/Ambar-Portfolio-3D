/**
 * Data Repository for Portfolio Information
 * Clean Architecture - Infrastructure Layer
 * Handles profile data for Hero section
 */

import { Portfolio, Project } from "../../domain/entities";
import heroUser from "../../assets/heroUser.jpeg";

// Environment variables
const STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL;

// Mock data - fallback if API fails
const portfolioData = {
  id: "ambar-portfolio",
  name: "Ambar",
  title: "Software Engineer",
  description: "I develop 3D visuals, user interfaces and web applications",
  profileImage: heroUser,
  technologies: [],
  experiences: [],
  projects: []
};

export class PortfolioRepository {
  /**
   * Maps Strapi API response to Portfolio entity format
   * @param {Object} strapiData - Raw data from Strapi API
   * @returns {Object} Mapped portfolio data
   */
  mapStrapiToPortfolio(strapiData) {
    // Strapi v4 collection type: fields are at root level of data object
    // Extract profile image URL from Strapi's nested structure
    const profileImageData = strapiData.profileImage;
    
    let profileImageUrl = heroUser; // Default fallback
    
    if (profileImageData) {
      if (profileImageData.formats?.small?.url) {
        profileImageUrl = profileImageData.formats.small.url;
      } else if (profileImageData.url) {
        profileImageUrl = profileImageData.url;
      }
    }

    return {
      id: strapiData.documentId || strapiData.id,
      name: strapiData.name,
      title: strapiData.title,
      description: strapiData.description,
      profileImage: profileImageUrl,
      technologies: strapiData.technologies || [],
      experiences: strapiData.experiences || [],
      projects: strapiData.projects || [],
    };
  }

  /**
   * Fetch portfolio data (profile info for Hero, plus technologies, experiences, projects)
   * @returns {Promise<Portfolio>} Portfolio entity instance
   */
  async getPortfolio() {
    try {
      const response = await fetch(
        `${STRAPI_API_URL}/api/profile-collection?populate=*`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      // Strapi v4 collection type returns data as object (not array)
      if (!result.data) {
        console.warn("No portfolio data returned from Strapi, using fallback data");
        return new Portfolio(portfolioData);
      }
      
      // Get the profile data (it's an object, not an array)
      const strapiProfile = result.data;
      
      // Map Strapi data to Portfolio entity format
      const mappedData = this.mapStrapiToPortfolio(strapiProfile);
      
      const portfolio = new Portfolio(mappedData);
      
      return portfolio;
    } catch (error) {
      console.error("Error fetching portfolio data from Strapi:", error);
      
      // Return fallback data instead of throwing error
      return new Portfolio(portfolioData);
    }
  }
  
  async getProjects(filters = {}) {
    // Simulate API call with filtering
    return new Promise((resolve) => {
      setTimeout(() => {
        let projects = portfolioData.projects?.map(project => new Project(project)) || [];
        
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
