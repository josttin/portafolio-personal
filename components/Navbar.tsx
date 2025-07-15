// components/Navbar.tsx
import Link from 'next/link';

export const Navbar = () => {
    return (
        // Añadimos relative y z-10 para asegurar que esté por encima de todo
        <nav className="bg-gray-900 text-white p-4 relative z-10">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">JOSTTIN PEREZ</Link>
                <div className="space-x-4">
                    <Link href="/" className="hover:text-blue-400">Inicio</Link>
                    <Link href="/about" className="hover:text-blue-400">Sobre Mí</Link>
                    <Link href="/projects" className="hover:text-blue-400">Proyectos</Link>
                    <Link href="/contact" className="hover:text-blue-400">Contacto</Link>
                </div>
            </div>
        </nav>
    );
};