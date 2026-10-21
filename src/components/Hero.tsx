"use client";

import React, { useEffect, useRef, useState } from "react";

const LEFT_WORDS = ["spark", "imagine", "evolve", "render"];
const RIGHT_WORDS = ["blaze", "genesis", "purpose", "ignite"];

const TITLE_LAYERS = [
  { color: "#89CFF0", desktopOffset: 36, mobileOffset: 18, zIndex: 1 },
  { color: "#EC612C", desktopOffset: 24, mobileOffset: 12, zIndex: 2 },
  { color: "#90EE90", desktopOffset: 12, mobileOffset: 6, zIndex: 3 },
  { color: "#FFFFFF", desktopOffset: 0, mobileOffset: 0, zIndex: 4 },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleCheckMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollableRange = sectionHeight - window.innerHeight;

      if (scrollableRange <= 0) {
        setScrollProgress(0);
        return;
      }

      const rawProgress = -rect.top / scrollableRange;
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      setScrollProgress(progress);
    };

    handleCheckMobile();
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => {
      handleCheckMobile();
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scaleFactor = isMobile ? 0.5 : 1;
  const currentOpacity = 0.35 + scrollProgress * 0.65;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden select-none"
      style={{
        height: "120vh",
        backgroundColor: "#EC612C",
      }}
    >
      {/* LAYER B: Sticky text overlay (z-index 5) */}
      <div className="sticky top-0 h-screen w-full pointer-events-none z-[5]">
        {/* “BEYOND” stacked title */}
        <div className="absolute inset-0 flex items-start justify-center pt-[2vh] md:pt-[3vh] pointer-events-none">
          <div className="relative flex items-center justify-center">
            {TITLE_LAYERS.map((layer, index) => {
              const offset = isMobile ? layer.mobileOffset : layer.desktopOffset;
              const isFront = index === TITLE_LAYERS.length - 1;

              return (
                <h1
                  key={index}
                  className={`font-bamboly uppercase leading-[0.85] tracking-tight select-none ${
                    isFront ? "relative" : "absolute inset-0"
                  }`}
                  style={{
                    color: layer.color,
                    fontSize: "clamp(7.5rem, 30vw, 28rem)",
                    transform: `translateY(${offset}px)`,
                    zIndex: layer.zIndex,
                  }}
                >
                  BEYOND
                </h1>
              );
            })}
          </div>
        </div>

        {/* Side word columns */}
        <div
          className="absolute inset-0 flex items-end justify-between px-[3vw] md:px-[6vw] pointer-events-none"
          style={{ bottom: "-8vh" }}
        >
          {/* Left Column */}
          <div className="flex flex-col gap-1 md:gap-2">
            {LEFT_WORDS.map((word, i) => {
              const offset = -(60 + i * 40) * scaleFactor * (1 - scrollProgress);
              return (
                <span
                  key={word}
                  className="font-poppins uppercase text-white/80 select-none"
                  style={{
                    fontWeight: 500,
                    fontSize: "clamp(1.6rem, 7vw, 9rem)",
                    lineHeight: 1.1,
                    transform: `translateX(${offset}px)`,
                    opacity: currentOpacity,
                    transition: "transform 0.05s linear",
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-1 md:gap-2 items-end">
            {RIGHT_WORDS.map((word, i) => {
              const offset = +(60 + i * 40) * scaleFactor * (1 - scrollProgress);
              return (
                <span
                  key={word}
                  className="font-poppins uppercase text-white/80 select-none text-right"
                  style={{
                    fontWeight: 500,
                    fontSize: "clamp(1.6rem, 7vw, 9rem)",
                    lineHeight: 1.1,
                    transform: `translateX(${offset}px)`,
                    opacity: currentOpacity,
                    transition: "transform 0.05s linear",
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* LAYER A: Character (z-index 10) - sits in front of title and covers center of BEYOND */}
      <div className="absolute inset-0 pointer-events-none z-10 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260801_104316_80b428ea-dc99-4399-afb3-8ccb7b34b2d0.png&w=1280&q=85"
          alt="3D Character Bust"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto max-w-none block pointer-events-none select-none"
          style={{
            height: "115%",
            maxHeight: "115%",
            minHeight: "80%",
            objectFit: "contain",
          }}
          loading="eager"
        />
      </div>
    </section>
  );
}
