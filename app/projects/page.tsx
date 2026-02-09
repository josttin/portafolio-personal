import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS_DATA } from "@/data/projects";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";

export default function ProjectsPage() {
  const mainProject = PROJECTS_DATA[0];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-2">
        Mi Proyecto Principal
      </h1>
      <p className="text-gray-400 text-center mb-12">
        Solución Full-Stack con arquitectura optimizada y escalable.
      </p>

      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          {" "}
          {/* Aumenté el ancho para que quepa la info extra */}
          <AnimatedWrapper>
            <ProjectCard
              {...mainProject} // Pasamos todas las propiedades, incluyendo 'details'
            />
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
}
