import type { ImageMetadata } from 'astro';

export interface ExperienceEntry {
  startedAt: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  arrangement: string;
  modality: 'Presencial' | 'Semipresencial' | 'Presencial y de campo';
  summary: string;
  icon: string;
  logo: string;
  accent: 'violet' | 'blue' | 'amber';
  skills: readonly string[];
}

export interface ExperienceTimelineEntry extends ExperienceEntry {
  logoImage?: ImageMetadata;
  isCurrent: boolean;
  isLast: boolean;
}
