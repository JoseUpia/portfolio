export const site = {
  name: 'Jose Miguel Upia',
  shortName: 'joseupia.com',
  title: 'Jose Miguel Upia | Software Developer en República Dominicana',
  description:
    'Sitio oficial de Jose Miguel Upia, Software Developer en República Dominicana especializado en Angular, TypeScript, C#, .NET, Node.js y aplicaciones web.',
  github: 'https://github.com/JoseUpia',
  linkedin: 'https://www.linkedin.com/in/joseupia/',
  email: 'jose@joseupia.com',
  location: 'Villa Altagracia, San Cristóbal, RD',
  cv: '/documents/jose-miguel-upia-cv.pdf',
} as const;

export const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Acerca de mí', href: '/about/' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Tecnologías', href: '#stack' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export const expertise = [
  {
    index: '01',
    title: 'Ingeniería de interfaces',
    description:
      'Interfaces rápidas, accesibles y sensibles al contexto, con una base visual preparada para evolucionar.',
  },
  {
    index: '02',
    title: 'Desarrollo integral',
    description:
      'Productos conectados de extremo a extremo, desde la experiencia de usuario hasta las APIs que la sostienen.',
  },
  {
    index: '03',
    title: 'Código creativo',
    description:
      'Prototipos y sistemas interactivos que convierten una idea abstracta en algo que se puede usar y evaluar.',
  },
] as const;

export const stackGroups = [
  {
    label: 'Experiencia de producto',
    items: ['Angular', 'Astro', 'Flutter', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    label: 'Sistemas y datos',
    items: ['.NET', 'NestJS', 'Node.js', 'PostgreSQL', 'Microsoft SQL Server', 'Docker'],
  },
  {
    label: 'Decisión con contexto',
    items: ['Integración de IA', 'Pensamiento de producto', 'Trabajo en equipo', 'Liderazgo técnico', 'Figma', 'Odoo', 'pnpm'],
  },
] as const;
