"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Play, Layers } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative w-full py-28 px-6 md:px-12 lg:px-20 bg-[#060608] text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#EC612C]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs font-mono tracking-wider uppercase text-[#89CFF0] mb-4">
              <Layers className="w-3.5 h-3.5" />
              Избранные работы & Интерактивные сайты
            </div>
            <h2 className="font-bamboly text-5xl md:text-7xl uppercase tracking-tight text-white leading-none">
              ПРОЕКТЫ <span className="text-[#EC612C]">/</span> WORKS
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 font-sans text-sm md:text-base leading-relaxed">
            Нажмите на любой проект, чтобы протестировать его живой интерактивный интерфейс прямо в окне или перейти на сайт.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const isInternal = project.type === "internal";

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#0e0e13] border border-white/10 rounded-3xl overflow-hidden hover:border-[#EC612C]/50 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Media Container */}
                <div
                  onClick={() => isInternal ? setSelectedProject(project) : window.open(project.url, "_blank")}
                  className="relative aspect-[16/10] overflow-hidden bg-neutral-900 cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-black/60 backdrop-blur border border-white/15 text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#90EE90] animate-pulse" />
                      {isInternal ? "Live в окне" : "Внешний сайт"}
                    </span>
                  </div>

                  {/* Hover Overlay with Action Button */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EC612C] text-white text-sm font-semibold shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <Play className="w-4 h-4 fill-white" />
                      Открыть в окне
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/5 text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3
                      onClick={() => isInternal ? setSelectedProject(project) : window.open(project.url, "_blank")}
                      className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#EC612C] transition-colors leading-snug cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-500">
                      {project.role || "Frontend Development"}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#EC612C] hover:bg-[#ff753e] text-white text-xs font-medium transition-all shadow-md shadow-[#EC612C]/20"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        Открыть в окне
                      </button>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Открыть напрямую в новой вкладке"
                        className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
