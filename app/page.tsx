// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importamos iconos

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">

        {/* Columna de Texto */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight">
            Ingeniero de Sistemas
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Enfocado en el desarrollo de aplicaciones web y móviles.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mb-8">
            <Link
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
            >
              Proyectos
            </Link>
            <a
              href="/CV-TuNombre.pdf" // Asume que tu CV está en la carpeta /public
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
            >
              Currículum
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Columna de Imagen */}
        <div className="hidden md:block">
          <Image
            src="/hero-image.svg" // Nombre del archivo que guardaste en /public
            alt="Ilustración de desarrollo de software"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
}