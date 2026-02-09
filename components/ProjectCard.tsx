// components/ProjectCard.tsx
interface Challenge {
  problem: string;
  solution: string;
}

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  details: {
    roles: string[];
    challenges: Challenge[];
    features: string[];
    businessLogic: {
      reporting: string;
      security: string;
      performance: string;
    };
    impact: string;
  };
}

export function ProjectCard({
  title,
  description,
  techStack,
  githubLink,
  liveLink,
  details,
}: ProjectProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all shadow-2xl">
      {/* Encabezado y Links */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <div className="flex gap-4">
          <a
            href={githubLink}
            target="_blank"
            className="text-sm px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            className="text-sm px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 text-white transition-colors"
          >
            Ver
          </a>
        </div>
      </div>

      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
        {description}
      </p>

      {/* Badges de Tecnologías */}
      <div className="flex flex-wrap gap-2 mb-8">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-900/20 text-blue-400 text-xs font-semibold rounded-full border border-blue-800/50"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-8">
        {/* Columna Izquierda: Desafíos y Roles */}
        <div>
          <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-wider text-sm">
            🚀 Desafíos Técnicos
          </h4>
          {details.challenges.map((item, i) => (
            <div
              key={i}
              className="mb-4 p-3 bg-black/30 rounded-lg border-l-2 border-blue-500"
            >
              <p className="text-red-400 text-xs mb-1">
                <strong>Reto:</strong> {item.problem}
              </p>
              <p className="text-green-400 text-xs">
                <strong>Solución:</strong> {item.solution}
              </p>
            </div>
          ))}

          <h4 className="text-blue-400 font-bold mt-6 mb-2 uppercase tracking-wider text-sm">
            👥 Roles del Sistema
          </h4>
          <div className="flex gap-2">
            {details.roles.map((role) => (
              <span
                key={role}
                className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Features y Lógica */}
        <div>
          <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-wider text-sm">
            🛠️ Funcionalidades Clave
          </h4>
          <ul className="space-y-2 mb-6">
            {details.features.map((feature, i) => (
              <li key={i} className="text-gray-400 text-sm flex items-start">
                <span className="text-blue-500 mr-2">•</span> {feature}
              </li>
            ))}
          </ul>

          <h4 className="text-blue-400 font-bold mb-2 uppercase tracking-wider text-sm">
            📊 Lógica de Negocio
          </h4>
          <div className="text-xs text-gray-500 space-y-2 italic">
            <p>• {details.businessLogic.reporting}</p>
            <p>• {details.businessLogic.security}</p>
            <p>• {details.businessLogic.performance}</p>
          </div>
        </div>
      </div>

      {/* Impacto Final */}
      <div className="mt-8 p-4 bg-blue-900/10 border border-blue-800/30 rounded-lg">
        <p className="text-blue-300 text-sm text-center">
          <strong>Impacto:</strong> {details.impact}
        </p>
      </div>
    </div>
  );
}
