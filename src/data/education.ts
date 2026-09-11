import type { Certificate } from '../types/certificates';
import type { EducationEntry } from '../types/education';

export const education: readonly EducationEntry[] = [
  {
    period: 'Ago. 2023 — Actualidad',
    institution: 'Universidad del Caribe (UNICARIBE)',
    degree: 'Ingeniería de Software',
    detail: 'Formación universitaria orientada al diseño, construcción y evolución de sistemas de software.',
    status: 'En curso',
  },
  {
    period: 'Ene. 2020 — Abr. 2022',
    institution: 'Instituto Tecnológico de Las Américas (ITLA)',
    degree: 'Tecnólogo en Desarrollo de Software',
    detail: 'Técnico superior completado con mención de honor: sobresaliente.',
    evidence: {
      title: 'Diploma ITLA',
      description: 'Documento de culminación del programa de Tecnólogo en Desarrollo de Software.',
      certificateSlug: 'itla-software-development-diploma',
      preview: 'itla-software-development-diploma-page-1',
    },
  },
  {
    period: 'Jun. 2017 — Jun. 2019',
    institution: 'Politécnico Nuestra Señora de la Altagracia (PNSA)',
    degree: 'Bachillerato Técnico en Informática',
    detail: 'Base técnica en informática, soporte, programación y trabajo colaborativo.',
    evidence: {
      title: 'Reconocimiento al mérito académico',
      description: 'Reconocimiento por desempeño meritorio durante el período escolar 2018–2019.',
      certificateSlug: 'pnsa-merit-recognition',
      preview: 'pnsa-merit-recognition',
    },
  },
] as const;

const certificateRecords: readonly Certificate[] = [
  {
    slug: 'angular-from-zero-to-expert',
    title: 'Angular: de cero a experto',
    issuer: 'Udemy · DevTalles',
    issued: '6 sep. 2026',
    dateTime: '2026-09-06',
    duration: '33,5 horas',
  },
  {
    slug: 'computer-support-and-assembly',
    title: 'Soporte técnico y ensamblaje de computadoras',
    issuer: 'Centros Tecnológicos Comunitarios',
    issued: '5 oct. 2018',
    dateTime: '2018-10-05',
    duration: '20 horas',
  },
  {
    slug: 'csharp-fundamentals',
    title: 'Fundamentos de C#',
    issuer: 'Platzi',
    issued: '6 dic. 2023',
    dateTime: '2023-12-06',
    duration: '12 horas',
  },
  {
    slug: 'intermediate-csharp-dotnet',
    title: 'C# .NET intermedio',
    issuer: 'Instituto Tecnológico de Las Américas',
    issued: '10 abr. 2024',
    dateTime: '2024-04-10',
    duration: '40 horas',
  },
  {
    slug: 'introduction-to-ai-development',
    title: 'Iniciación al desarrollo con IA',
    issuer: 'MoureDev · BIG school',
    issued: '2 sep. 2026',
    dateTime: '2026-09-02',
    duration: '6 horas',
  },
  {
    slug: 'entrepreneurship',
    title: 'Entrepreneurship',
    issuer: 'Cisco Networking Academy',
    issued: '12 sep. 2019',
    dateTime: '2019-09-12',
  },
  {
    slug: 'excel-basics',
    title: 'Excel básico',
    issuer: 'Centros Tecnológicos Comunitarios',
    issued: '5 jun. 2018',
    dateTime: '2018-06-05',
    duration: '20 horas',
  },
  {
    slug: 'internet-history-technology-and-security',
    title: 'Internet History, Technology, and Security',
    issuer: 'University of Michigan · Coursera',
    issued: '17 nov. 2024',
    dateTime: '2024-11-17',
    duration: '15 horas',
  },
  {
    slug: 'introduction-to-iot',
    title: 'Introducción a IoT',
    issuer: 'Cisco Networking Academy',
    issued: '1 nov. 2019',
    dateTime: '2019-11-01',
  },
  {
    slug: 'introduction-to-secure-networking',
    title: 'Introduction to Secure Networking',
    issuer: 'Microsoft · Coursera',
    issued: '13 nov. 2024',
    dateTime: '2024-11-13',
    duration: '23 horas',
  },
  {
    slug: 'itla-software-development-diploma',
    title: 'Tecnólogo en Desarrollo de Software',
    issuer: 'Instituto Tecnológico de Las Américas',
    issued: '20 ago. 2022',
    dateTime: '2022-08-20',
    previews: [
      'itla-software-development-diploma-page-1',
      'itla-software-development-diploma-page-2',
    ],
  },
  {
    slug: 'java-fundamentals',
    title: 'Java Fundamentals',
    issuer: 'Oracle Academy',
    issued: '5 nov. 2019',
    dateTime: '2019-11-05',
  },
  {
    slug: 'networking-fundamentals',
    title: 'Networking Fundamentals',
    issuer: 'Akamai · Coursera',
    issued: '18 nov. 2024',
    dateTime: '2024-11-18',
    duration: '26 horas',
  },
  {
    slug: 'nodejs-from-zero-to-expert',
    title: 'NodeJS: de cero a experto',
    issuer: 'Udemy · DevTalles',
    issued: '5 dic. 2025',
    dateTime: '2025-12-05',
    duration: '37,5 horas',
  },
  {
    slug: 'pnsa-merit-recognition',
    title: 'Reconocimiento al mérito académico',
    issuer: 'Politécnico Nuestra Señora de la Altagracia',
    issued: 'Período 2018–2019',
    dateTime: '2019',
  },
  {
    slug: 'sass-fundamentals',
    title: 'Fundamentos de Sass',
    issuer: 'Platzi',
    issued: '6 dic. 2023',
    dateTime: '2023-12-06',
    duration: '26 horas',
  },
  {
    slug: 'video-game-development-fundamentals',
    title: 'Fundamentos de creación de videojuegos',
    issuer: 'Centros Tecnológicos Comunitarios',
    issued: '1 may. 2019',
    dateTime: '2019-05-01',
    duration: '20 horas',
  },
  {
    slug: 'web-development-with-chatgpt',
    title: 'Creación de páginas web con ChatGPT',
    issuer: 'Platzi',
    issued: '9 nov. 2023',
    dateTime: '2023-11-09',
    duration: '9 horas',
  },
  {
    slug: 'web-page-design',
    title: 'Diseño de páginas web',
    issuer: 'Centros Tecnológicos Comunitarios',
    issued: '13 mar. 2019',
    dateTime: '2019-03-13',
    duration: '32 horas',
  },
  {
    slug: 'word-basics',
    title: 'Word básico',
    issuer: 'Centros Tecnológicos Comunitarios',
    issued: '9 dic. 2017',
    dateTime: '2017-12-09',
    duration: '20 horas',
  },
  {
    slug: 'workplace-skills-development',
    title: 'Fortalecimiento de habilidades laborales',
    issuer: 'Citi Foundation · Kuepa',
    issued: 'Sep. 2019',
    dateTime: '2019-09',
  },
] as const;

export const certificates = [...certificateRecords].sort((left, right) =>
  right.dateTime.localeCompare(left.dateTime),
);

const featuredSlugs = new Set([
  'angular-from-zero-to-expert',
  'introduction-to-ai-development',
  'intermediate-csharp-dotnet',
]);

export const featuredCertificates = certificates.filter(({ slug }) => featuredSlugs.has(slug));
