// app/contact/page.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto text-center py-16 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hablemos</h1>
            <p className="text-lg text-gray-400 mb-8">
                Estoy buscando activamente nuevas oportunidades y mi bandeja de entrada está siempre abierta.
                Si tienes alguna pregunta o simplemente quieres saludar, ¡haré todo lo posible por responder!
            </p>

            <a
                href="mailto:tu-email@ejemplo.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 mb-12"
            >
                Envíame un correo
            </a>

            <div className="flex justify-center gap-8">
                <a
                    href="https://github.com/tu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                >
                    <FaGithub size={32} />
                </a>
                <a
                    href="https://linkedin.com/in/tu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={32} />
                </a>
                <a
                    href="mailto:tu-email@ejemplo.com"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Email"
                >
                    <FaEnvelope size={32} />
                </a>
            </div>
        </div>
    );
}