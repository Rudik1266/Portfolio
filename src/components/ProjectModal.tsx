"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  RotateCcw,
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
} from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

type DeviceMode = "desktop" | "tablet" | "mobile";

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [device, setDevice] = useState<DeviceMode>("desktop");
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    if (!project) return;
    setIsLoading(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const getFrameWidth = () => {
    switch (device) {
      case "mobile":
        return "max-w-[390px]";
      case "tablet":
        return "max-w-[768px]";
      case "desktop":
      default:
        return "w-full max-w-[1400px]";
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full h-[92vh] max-h-[960px] bg-[#0d0d11] border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Top Bar Header */}
          <div className="h-16 px-6 bg-[#131318] border-b border-white/10 flex items-center justify-between shrink-0 select-none">
            {/* Title & Badge */}
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="w-3 h-3 rounded-full bg-[#EC612C] shrink-0" />
              <h3 className="text-sm sm:text-base font-bold text-white truncate">
                {project.title}
              </h3>
              <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/10 text-neutral-300">
                Live Preview
              </span>
            </div>

            {/* Center: Device Viewport Switcher */}
            <div className="hidden md:flex items-center bg-black/50 p-1 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setDevice("desktop")}
                title="Desktop (100%)"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  device === "desktop"
                    ? "bg-[#EC612C] text-white shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setDevice("tablet")}
                title="Tablet (768px)"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  device === "tablet"
                    ? "bg-[#EC612C] text-white shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span>Tablet</span>
              </button>
              <button
                type="button"
                onClick={() => setDevice("mobile")}
                title="Mobile (390px)"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  device === "mobile"
                    ? "bg-[#EC612C] text-white shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleRefresh}
                title="Перезагрузить превью"
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Открыть в новой вкладке"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#EC612C] text-white text-xs font-medium transition-all"
              >
                <span className="hidden sm:inline">Открыть отдельно</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={onClose}
                title="Закрыть (Esc)"
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-red-500/20 hover:text-red-400 transition-colors ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Iframe Viewport Container */}
          <div className="flex-1 bg-[#09090c] p-2 sm:p-4 flex items-center justify-center overflow-auto relative">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#09090c]/90 z-20 pointer-events-none">
                <div className="w-10 h-10 border-2 border-[#EC612C]/30 border-t-[#EC612C] rounded-full animate-spin mb-4" />
                <span className="text-xs font-mono text-neutral-400 tracking-wider uppercase">
                  Загрузка интерактивного сайта...
                </span>
              </div>
            )}

            <div
              className={`h-full ${getFrameWidth()} transition-all duration-300 ease-out bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative flex flex-col`}
            >
              <iframe
                key={iframeKey}
                src={project.url}
                title={project.title}
                className="w-full h-full border-0 block bg-black"
                onLoad={() => setIsLoading(false)}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
