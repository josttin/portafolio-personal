export const PROJECTS_DATA = [
  {
    title: "Task Manager (Full-Stack)",
    description: "Sistema de gestión de tareas de alto rendimiento con arquitectura optimizada para el ahorro de costos en la nube, diseñado para la supervisión de equipos mediante flujos de evidencia visual.",
    techStack: ["Flutter", "Firebase", "Cloudinary", "Provider", "Dart"],
    githubLink: "https://github.com/josttin/task-manager-flutter",
    liveLink: "https://task-manager-portfolio-a6877.web.app",
    details: {
      roles: ["Jefe", "Empleado"],
      challenges: [
        {
          problem: "Costos elevados en Firebase Storage por alto volumen de fotos.",
          solution: "Arquitectura 'Costo Cero' integrando API REST de Cloudinary para externalizar activos y guardar solo punteros (URLs) en Firestore."
        },
        {
          problem: "Incompatibilidad de 'dart:io' en Flutter Web.",
          solution: "Procesamiento de imágenes mediante flujos de bytes (Uint8List) para funcionamiento universal (Mobile/Web)."
        }
      ],
      features: [
        "Real-Time Chat por tarea con StreamBuilder.",
        "Visor interactivo con zoom dinámico (InteractiveViewer).",
        "Logs de progreso inmutables para auditoría.",
        "Sistema de priorización (Baja/Media/Alta) y anclaje de tareas.",
        "Automatización de estados: Transición a 'En Revisión' al subir evidencia."
      ],
      businessLogic: {
        reporting: "Reportes individuales, semanales y mensuales basados exclusivamente en tareas terminadas.",
        security: "Control de acceso basado en roles (RBAC) con permisos dinámicos.",
        performance: "Manejo de estados asíncronos con guardas 'mounted' para evitar fugas de memoria."
      },
      impact: "Escalabilidad infinita en el nivel gratuito mediante arquitectura híbrida de activos multimedia."
    }
  }
];