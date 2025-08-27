// data/projects.ts

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    title: "Gestor de Tareas Full-Stack",
    description: "Aplicación web completa para la gestión de equipos con roles de usuario (Jefe/Empleado), dashboards con métricas visuales y un backend seguro con autenticación JWT y autorización basada en roles.",
    image: "/proyecto-web.png", 
    techStack: [
      "Next.js", 
      "TypeScript", 
      "React",
      "Node.js", 
      "Express.js", 
      "PostgreSQL", 
      "TailwindCSS",
      "shadcn/ui",
      "JWT",
      "Docker",
      "Render",
      "Vercel"
    ],
    githubLink: "https://github.com/josttin/gestor-tareas-fullstack", // <-- ACTUALIZA ESTE ENLACE
    liveLink: "https://gestor-tareas-fullstack-sigma.vercel.app/login", // <-- ACTUALIZA ESTE ENLACE
  },
];
