import { projects } from './projects.js';

export const featuredRepositories = projects.map((project) => ({
  id: project.id,
  name: project.title,
  description: project.description,
  language: project.technologies[0],
  url: project.links.github,
}));
