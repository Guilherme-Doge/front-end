import HeaderSobre from "@/components/molecules/HeaderSobre";
import "@/app/globals.css"

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderSobre />

      {children}
    </>
  );
}
