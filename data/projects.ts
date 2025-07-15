// data/projects.ts

// 1. Definimos y exportamos la interfaz (el tipo) de un proyecto
export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}

// 2. Le decimos a nuestro array que es de tipo "Project[]" (un array de Proyectos)
export const PROJECTS_DATA: Project[] = [
  {
    title: "Nombre del Proyecto 1",
    description:
      "Esta es una breve descripción del proyecto, explicando el problema que resuelve y su propósito principal.",
    image: "/project-placeholder.png",
    techStack: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Nombre del Proyecto 2",
    description:
      "Esta es una breve descripción del proyecto, explicando el problema que resuelve y su propósito principal.",
    image: "/project-placeholder.png",
    techStack: ["Node.js", "Express", "PostgreSQL", "Docker"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Nombre del Proyecto 3",
    description:
      "Esta es una breve descripción del proyecto, explicando el problema que resuelve y su propósito principal.",
    image: "/project-placeholder.png",
    techStack: ["React Native", "Firebase", "Expo"],
    githubLink: "#",
    liveLink: "#",
  },
];
