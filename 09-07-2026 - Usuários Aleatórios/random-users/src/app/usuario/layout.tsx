import React from "react";

import Header from "@/components/molecules/Header";
import "@/app/globals.css"

export default function UserLayout({
  children,
} : { children : React.ReactNode }) {
  return (
    <>
      <Header />

      { children }
    </>
  );
}
