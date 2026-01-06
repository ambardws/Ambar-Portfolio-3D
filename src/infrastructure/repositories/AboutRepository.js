/**
 * About Repository
 * Clean Architecture - Infrastructure Layer
 * Handles fetching about/profile data from API
 */

import { About } from "../../domain/entities";
import heroUser from "../../assets/heroUser.jpeg";

// Environment variables
const STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL;

// Mock data - fallback if API fails
const aboutData = {
  id: "ambar-about",
  name: "Ambar",
  title: "Software Engineer",
  description: "I'm a Software Engineer and I'm an experienced frontend developer with 3 years of professional expertise.",
  profileImage: heroUser,
  contactInfo: {}
};

export class AboutRepository {
  /**
   * Maps Strapi API response to About entity format
   * @param {Object} strapiData - Raw data from Strapi API
   * @returns {Object} Mapped about data
   */
  mapStrapiToAbout(strapiData) {
    return {
      id: strapiData.id || strapiData.documentId,
      description: strapiData.content || "",
    };
  }

  /**
   * Fetch about/profile data from Strapi API
   * @returns {Promise<About>} About entity instance
   */
  async getAbout() {
    try {
      const response = await fetch(
        `${STRAPI_API_URL}/api/about?populate=*`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      // Strapi v4 single type returns data as object, not array
      if (!result.data) {
        console.warn("No about data returned from Strapi, using fallback data");
        return new About(aboutData);
      }
      
      // Map Strapi data to About entity format
      const mappedData = this.mapStrapiToAbout(result.data);
      
      const about = new About(mappedData);
      
      return about;
    } catch (error) {
      console.error("Error fetching about data from Strapi:", error);
      
      // Return fallback data instead of throwing error
      return new About(aboutData);
    }
  }
}
