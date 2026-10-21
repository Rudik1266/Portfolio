import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#EC612C] selection:text-white">
      {/* SECTION 1 — Beyond Hero */}
      <Hero />

      {/* SECTION 2 — Marquee strip */}
      <Marquee />

      {/* SECTION 3 — About me with micro-animations & kinetic typography */}
      <About />

      {/* SECTION 4 — Interactive Projects Grid with /demos/ iframe modal */}
      <Projects />

      {/* SECTION 5 — Contact & Footer */}
      <Contact />
    </main>
  );
}
