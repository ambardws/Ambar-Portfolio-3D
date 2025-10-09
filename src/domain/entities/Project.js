/**
 * Project Domain Entity
 */
export class Project {
  constructor({
    id,
    name,
    description,
    shortDescription,
    technologies = [],
    images = [],
    liveUrl,
    sourceUrl,
    completedDate,
    isFeatured = false,
    category,
    status = 'completed'
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.shortDescription = shortDescription;
    this.technologies = technologies;
    this.images = images;
    this.liveUrl = liveUrl;
    this.sourceUrl = sourceUrl;
    this.completedDate = completedDate;
    this.isFeatured = isFeatured;
    this.category = category;
    this.status = status;
  }

  isCompleted() {
    return this.status === 'completed';
  }

  hasLiveDemo() {
    return !!this.liveUrl;
  }

  hasSourceCode() {
    return !!this.sourceUrl;
  }

  getTechStack() {
    return this.technologies.map(tech => tech.name).join(', ');
  }
}