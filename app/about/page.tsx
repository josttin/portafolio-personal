// app/about/page.tsx
import { FaLaptopCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';

export default function AboutPage() {
    return (
        // Contenedor principal relativo para posicionar las formas
        <div className="relative isolate max-w-6xl mx-auto py-16 px-4">

            {/* --- Formas flotantes del fondo --- */}
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#007CF0] to-[#00DFD8] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>


            {/* --- Sección de la Narrativa en Dos Columnas --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start">
                <div className="md:col-span-1">
                    <h1 className="text-4xl font-bold sticky top-16">Sobre Mí</h1>
                </div>
                <div className="md:col-span-2 space-y-6 text-lg text-gray-300">
                    <p>
                        Mi fascinación por la tecnología nació de la creatividad que encontraba en los videojuegos y el anime. Ese interés por las grandes historias me llevó primero a escribir las mías y, finalmente, a querer construir los mundos y herramientas detrás de ellas, lo que me guio de forma natural hacia la ingeniería de sistemas.
                    </p>
                    <p>
                        Lo que más me apasiona del desarrollo de software es el proceso de transformar líneas de código en soluciones funcionales que resuelven problemas del mundo real. Me impulsa el desafío constante y la certeza de que en este campo siempre hay algo nuevo por aprender. Mi gran objetivo profesional es, algún día, formar parte de un equipo para programar un videojuego de mundo abierto.
                    </p>
                    <p>
                        Fuera del código, me gusta escribir canciones y dedico tiempo a ver series y contenido técnico en inglés para mantenerme actualizado. Siempre estoy imaginando nuevas historias o soluciones a problemas cotidianos que podría programar.
                    </p>
                </div>
            </div>

            {/* --- Divisor y Sección de Habilidades --- */}
            <hr className="my-16 border-gray-700" />

            <div className="text-center">
                <h2 className="text-3xl font-bold mb-10">Mis Habilidades</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <AnimatedWrapper delay={0.1}>
                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center h-full transform hover:scale-105 transition-transform duration-300">
                            <FaLaptopCode className="text-blue-400 mx-auto mb-4" size={48} />
                            <h3 className="text-2xl font-bold mb-2">Desarrollo Web</h3>
                            <p className="text-gray-400">
                                Creo aplicaciones web robustas y escalables, enfocándome en interfaces de usuario limpias y una base de código mantenible.
                            </p>
                        </div>
                    </AnimatedWrapper>

                    <AnimatedWrapper delay={0.2}>
                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center h-full transform hover:scale-105 transition-transform duration-300">
                            <FaMobileAlt className="text-blue-400 mx-auto mb-4" size={48} />
                            <h3 className="text-2xl font-bold mb-2">Desarrollo Móvil</h3>
                            <p className="text-gray-400">
                                Tengo experiencia en el desarrollo de aplicaciones móviles multiplataforma, llevando las ideas a las manos de los usuarios.
                            </p>
                        </div>
                    </AnimatedWrapper>

                    <AnimatedWrapper delay={0.3}>
                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center h-full transform hover:scale-105 transition-transform duration-300">
                            <FaDatabase className="text-blue-400 mx-auto mb-4" size={48} />
                            <h3 className="text-2xl font-bold mb-2">Bases de Datos</h3>
                            <p className="text-gray-400">
                                Diseño y administro bases de datos relacionales y NoSQL, asegurando la integridad y eficiencia de los datos.
                            </p>
                        </div>
                    </AnimatedWrapper>
                </div>
            </div>
        </div>
    );
}