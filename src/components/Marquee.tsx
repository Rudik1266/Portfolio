import React from "react";

const MARQUEE_TEXT = "SPARK · RENDER · IGNITE · UNFOLD · GENESIS · EVOLVE · PURPOSE · BEYOND · ";

export function Marquee() {
  return (
    <div className="w-full bg-white overflow-hidden py-6 md:py-8 relative z-20 border-y border-white/20 select-none">
      <div className="marquee-track flex whitespace-nowrap">
        {/* Render 4 identical copies so translateX(-50%) creates an infinite loop */}
        {[0, 1, 2, 3].map((copyIndex) => (
          <span
            key={copyIndex}
            className="font-bamboly uppercase shrink-0 select-none"
            style={{
              color: "#EC612C",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1,
              paddingRight: "0.25em",
            }}
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}
