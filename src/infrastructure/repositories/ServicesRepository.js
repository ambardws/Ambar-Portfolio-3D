/**
 * Services Repository
 * Clean Architecture - Infrastructure Layer
 * Handles fetching services data from API
 */

import { Service } from "../../domain/entities";

// Environment variables
const STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL;

// Mock data - fallback if API fails
const servicesData = [
  {
    id: "service-1",
    title: 'Responsive Web Development',
    description: 'Building modern, mobile-first websites with clean code and optimal performance',
    icon: 'https://cdn.jsdelivr.net/npm/tabler-icons@latest/icons/device-desktop.svg',
    category: 'development'
  },
  {
    id: "service-2",
    title: "UI/UX Implementation",
    description: 'Converting designs into pixel-perfect, interactive user interfaces',
    icon: 'https://cdn.jsdelivr.net/npm/tabler-icons@latest/icons/palette.svg',
    category: 'design'
  },
  {
    id: "service-3",
    title: "Performance Optimization",
    description: 'Improving website speed, SEO, and Core Web Vitals for better user experience',
    icon: 'https://cdn.jsdelivr.net/npm/tabler-icons@latest/icons/rocket.svg',
    category: 'optimization'
  },
  {
    id: "service-4",
    title: "Frontend Consulting",
    description: 'Providing technical guidance and code reviews for optimal development practices',
    icon: 'https://cdn.jsdelivr.net/npm/tabler-icons@latest/icons/users.svg',
    category: 'consulting'
  }
];

export class ServicesRepository {
  /**
   * Maps Strapi API response to Service entity format
   * @param {Object} strapiService - Raw service data from Strapi API
   * @returns {Service} Service entity instance
   */
  mapStrapiToService(strapiService) {
    const attributes = strapiService.attributes || strapiService;
    
    return new Service({
      id: strapiService.id || strapiService.documentId,
      title: attributes.title,
      description: attributes.description,
      icon: attributes.icon,
      category: attributes.category,
      order: attributes.order || 0
    });
  }

  /**
   * Fetch services data from Strapi API
   * @returns {Promise<Service[]>} Array of Service entity instances
   */
  async getServices() {
    try {
      const response = await fetch(
        `${STRAPI_API_URL}/api/services?populate=*`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Strapi v4 returns data in { data: [...] } format
      if (!result.data || !Array.isArray(result.data)) {
        console.warn("No services data returned from Strapi, using fallback data");
        return servicesData.map(service => new Service(service));
      }

      // Map Strapi services data to Service entities
      const services = result.data.map(service => this.mapStrapiToService(service));

      return services;
    } catch (error) {
      console.error("Error fetching services from Strapi:", error);
      
      // Return fallback data instead of throwing error
      return servicesData.map(service => new Service(service));
    }
  }

  /**
   * Get services filtered by category
   * @param {string} category - Category to filter by
   * @returns {Promise<Service[]>} Filtered array of Service entities
   */
  async getServicesByCategory(category) {
    const services = await this.getServices();
    return services.filter(service => service.isInCategory(category));
  }
}
