/**
 * About Domain Entity
 * Core business logic entity representing about/profile information
 */
export class About {
  constructor({ 
    id, 
    description, 
  }) {
    this.id = id;
    this.description = description;
  }

  // Business logic methods
  getFullTitle() {
    return `${this.name} - ${this.title}`;
  }

  hasContactInfo() {
    return Object.keys(this.contactInfo).length > 0;
  }
}
