import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Menu Digital - Restaurante",
  description: "Desenvolvido no curso de Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-50 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}