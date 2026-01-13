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
    title: "Task Manager Flutter",
    description: "Aplicación móvil y web para la gestión eficiente de tareas, con una interfaz intuitiva, persistencia de datos y un diseño responsivo multiplataforma.",
    image: "/proyecto-task-manager.png", 
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Provider",
      "Material Design"
    ],
    githubLink: "https://github.com/josttin/task-manager-flutter",
    liveLink: "https://task-manager-portfolio-a6877.web.app",
  },
];
