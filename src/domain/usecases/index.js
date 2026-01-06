/**
 * Get About Data Use Case
 * Business logic for retrieving about/profile information
 */
export class GetAboutUseCase {
  constructor(aboutRepository) {
    this.aboutRepository = aboutRepository;
  }

  async execute() {
    try {
      const aboutData = await this.aboutRepository.getAbout();
      
      if (!aboutData) {
        throw new Error('About data not found');
      }

      return {
        success: true,
        data: aboutData,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
}

/**
 * Get Services Data Use Case
 * Business logic for retrieving services information
 */
export class GetServicesUseCase {
  constructor(servicesRepository) {
    this.servicesRepository = servicesRepository;
  }

  async execute() {
    try {
      const servicesData = await this.servicesRepository.getServices();
      
      if (!servicesData) {
        throw new Error('Services data not found');
      }

      return {
        success: true,
        data: servicesData,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
}

/**
 * Get Portfolio Data Use Case
 * Business logic for retrieving portfolio information (technologies, experiences, projects)
 */
export class GetPortfolioUseCase {
  constructor(portfolioRepository) {
    this.portfolioRepository = portfolioRepository;
  }

  async execute() {
    try {
      const portfolioData = await this.portfolioRepository.getPortfolio();
      
      if (!portfolioData) {
        throw new Error('Portfolio data not found');
      }

      return {
        success: true,
        data: portfolioData,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
}

/**
 * Get Projects Use Case
 */
export class GetProjectsUseCase {
  constructor(projectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute(filters = {}) {
    try {
      const projects = await this.projectRepository.getProjects(filters);
      
      return {
        success: true,
        data: projects,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
}

/**
 * Send Contact Message Use Case
 */
export class SendContactMessageUseCase {
  constructor(contactRepository) {
    this.contactRepository = contactRepository;
  }

  async execute(messageData) {
    try {
      // Validate message data
      if (!messageData.name || !messageData.email || !messageData.message) {
        throw new Error('Missing required fields');
      }

      if (!this.isValidEmail(messageData.email)) {
        throw new Error('Invalid email format');
      }

      const result = await this.contactRepository.sendMessage(messageData);
      
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}