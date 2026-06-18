import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Demo Next.js",
  description: "Exemplo com layout, rota e componente cliente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={{ padding: 16, borderBottom: "1px solid #ddd" }}>
          <strong>Demo Next.js</strong>
        </header>
        <main style={{ padding: 16 }}>{children}</main>
      </body>
    </html>
  );
}