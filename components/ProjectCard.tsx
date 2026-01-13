// components/ProjectCard.tsx
interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}

export function ProjectCard({ title, description, techStack, githubLink, liveLink }: ProjectProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500 transition-colors shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {techStack.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-blue-900/30 text-blue-400 text-sm rounded-full border border-blue-800">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a href={githubLink} target="_blank" className="text-sm font-medium text-white hover:underline">GitHub</a>
        <a href={liveLink} target="_blank" className="text-sm font-medium text-blue-400 hover:underline">Ver Demo</a>
      </div>
    </div>
  );
}