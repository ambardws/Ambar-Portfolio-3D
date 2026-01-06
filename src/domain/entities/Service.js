/**
 * Service Domain Entity
 * Core business logic entity representing a service offering
 */
export class Service {
  constructor({ 
    id,
    title, 
    description, 
    icon,
    category,
    order
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.category = category;
    this.order = order;
  }

  // Business logic methods
  isInCategory(categoryName) {
    return this.category === categoryName;
  }

  hasIcon() {
    return !!this.icon;
  }
}
