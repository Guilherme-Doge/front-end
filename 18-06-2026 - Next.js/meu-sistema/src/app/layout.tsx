import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export default function RootLayout({ children }:
  {
    children: React.ReactNode
  }
) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-gray-50 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

// src/app/layout.js

export const metadata = {
  title: {
    default: "Sabor e Arte | O Melhor Cardápio Digital",
    template: "%s | Sabor e Arte" // O %s será substituído pelo título da página específica
  },
  description: "Peça os melhores pratos artesanais da região com rapidez e praticidade.",
  keywords: ["restaurante", "cardápio digital", "comida artesanal", "delivery"],
};