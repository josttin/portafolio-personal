// components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    githubLink: string;
    liveLink: string;
}

export const ProjectCard = ({ title, description, image, techStack, githubLink, liveLink }: ProjectCardProps) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300">
            <Image src={image} alt={`Screenshot de ${title}`} width={500} height={300} className="w-full object-cover" />

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech) => (
                        <span key={tech} className="bg-gray-700 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FaGithub size={24} />
                    </Link>
                    <Link href={liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FaExternalLinkAlt size={22} />
                    </Link>
                </div>
            </div>
        </div>
    );
};