// app/projects/page.tsx
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS_DATA } from "@/data/projects";
import { AnimatedWrapper } from '@/components/AnimatedWrapper';

export default function ProjectsPage() {
  // Tomamos solo el primer (y único) proyecto del array
  const mainProject = PROJECTS_DATA[0];

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-2">Mi Proyecto Principal</h1>
      <p className="text-gray-400 text-center mb-12">Esta es una pieza central de mi portafolio que demuestra mis habilidades full-stack.</p>
      
      {/* Contenedor Flex para centrar la única tarjeta de proyecto */}
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <AnimatedWrapper>
            <ProjectCard
              title={mainProject.title}
              description={mainProject.description}
              image={mainProject.image}
              techStack={mainProject.techStack}
              githubLink={mainProject.githubLink}
              liveLink={mainProject.liveLink}
            />
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
}
