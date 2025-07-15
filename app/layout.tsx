// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer"; // 1. Importa el Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio de Josttin Perez",
  description: "Portafolio profesional de desarrollo de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Navbar />
        <main className="container mx-auto p-4">
          {children}
        </main>
        <Footer /> {/* 2. Añade el Footer aquí */}
      </body>
    </html>
  );
}