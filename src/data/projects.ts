import trailersPlatform from '../assets/projects/trailers-platform.webp';
import type { Project } from '../types/projects';

export const projects: Project[] = [
  {
    slug: 'portafolio-personal', title: 'Portafolio personal', eyebrow: 'Experiencia web',
    description: 'Una identidad digital construida para presentar experiencia, criterio técnico y formas de colaboración con claridad.',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS'], visibility: 'public', updatedAt: '2026-09-10', 
    repository: 'https://github.com/JoseUpia/portfolio', website: 'https://joseupia.com', featured: true, featuredOrder: 2,
  },
  {
    slug: 'plataforma-de-trailers', title: 'Plataforma de trailers', eyebrow: 'Aplicación de extremo a extremo',
    description: 'Catálogo audiovisual con autenticación, perfiles, favoritos y administración de contenido conectado a una API propia.',
    technologies: ['Angular', 'Angular Material', '.NET Core', 'SQL Server', 'Azure'], visibility: 'public', updatedAt: '2021-12-11',
    repository: 'https://github.com/JoseUpia/Programacion-Web-Trailers', image: trailersPlatform, featured: true, featuredOrder: 1,
  },
  {
    slug: 'reconocimiento-facial', title: 'Reconocimiento facial', eyebrow: 'Visión computacional',
    description: 'Aplicación web experimental para probar reconocimiento facial desde una experiencia construida con Angular.',
    technologies: ['Angular', 'TypeScript'], visibility: 'public', updatedAt: '2021-08-19',
    repository: 'https://github.com/JoseUpia/ReconocimientoFacial', website: 'https://reconocimiento-facial.vercel.app/', featured: true, featuredOrder: 3,
  },
].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
  .slice(0, 3);
