import type { ImageMetadata } from 'astro';

export type ProjectVisibility = 'public' | 'private';

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  technologies: readonly string[];
  visibility: ProjectVisibility;
  updatedAt: string;
  repository?: string;
  website?: string;
  image?: ImageMetadata;
  featured?: boolean;
  featuredOrder?: number;
}

export interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'spotlight' | 'compact';
  index?: string;
}
