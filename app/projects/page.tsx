// app/projects/page.tsx
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS_DATA } from "@/data/projects";
import { AnimatedWrapper } from '@/components/AnimatedWrapper'; // 1. Importa el wrapper

export default function ProjectsPage() {
    return (
        <div className="max-w-6xl mx-auto py-12">
            <h1 className="text-4xl font-bold text-center mb-2">Mis Proyectos</h1>
            <p className="text-gray-400 text-center mb-12">Una selección de proyectos en los que he trabajado.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS_DATA.map((project, index) => (
                    // 2. Envuelve la tarjeta con el wrapper y añade un pequeño retraso escalonado
                    <AnimatedWrapper key={project.title} delay={index * 0.1}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            techStack={project.techStack}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                        />
                    </AnimatedWrapper>
                ))}
            </div>
        </div>
    );
}