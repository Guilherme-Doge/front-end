import React from "react";
import "./globals.css";

import Footer from "@/components/molecules/Footer";

export default function RootLayout({
  children,
} : { children : React.ReactNode }) {
  return (
    <html>
      <body>

        { children }

        <Footer />
      </body>
    </html>
  );
}
