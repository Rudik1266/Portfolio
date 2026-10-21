import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beyond Hero",
  description:
    "Creative Developer & Designer Portfolio — Crafting kinetic, bold, and high-performance digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/58ee300970307a1cc399e6bebd7617ce?family=Bamboly+Demo"
          rel="stylesheet"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white overflow-x-hidden antialiased selection:bg-[#EC612C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
