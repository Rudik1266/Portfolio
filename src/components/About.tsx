"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Smartphone, Sparkles, Check } from "lucide-react";

const BENEFITS = [
  {
    icon: Layers,
    title: "Под ключ без лишней суеты",
    description:
      "Беру на себя весь цикл: помогу со структурой, соберу дизайн, настрою анимации и запущу сайт на вашем домене.",
    badge: "Полный цикл",
  },
  {
    icon: Smartphone,
    title: "Идеально на смартфонах",
    description:
      "Более 70% клиентов заходят с телефонов — сайт будет открываться молниеносно и выглядеть безупречно на любых экранах.",
    badge: "Адаптивность 100%",
  },
  {
    icon: Sparkles,
    title: "Внимание к деталям",
    description:
      "Никаких кривых шаблонов. Аккуратная типографика, плавная динамика и акцент на ваших услугах, чтобы клиент выбрал вас.",
    badge: "Премиум визуал",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-black text-white overflow-hidden"
    >
      {/* Background subtle radial gradient */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#EC612C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#89CFF0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs font-mono tracking-wider uppercase text-[#EC612C] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#90EE90] animate-pulse" />
            Открыт для новых проектов
          </div>

          <h2 className="font-bamboly text-5xl md:text-7xl uppercase tracking-tight text-white leading-none mb-6">
            О СЕБЕ <span className="text-[#EC612C]">/</span> ABOUT
          </h2>

          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-5 leading-snug">
              Создаю сайты, которые вызывают доверие и приводят клиентов.
            </h3>
            <p className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed">
              Разрабатываю современные лендинги и сайты для бизнеса под ключ: от продуманной структуры и чистого дизайна до быстрой адаптивной верстки. Делаю проекты, которые выделяют вас на фоне конкурентов и работают без сбоев на любых устройствах.
            </p>
          </div>
        </div>

        {/* 3 Client-Oriented Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0c0c0e] border border-white/10 rounded-3xl p-7 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#EC612C]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-neutral-500 font-mono">
                  <Check className="w-3.5 h-3.5 text-[#90EE90]" />
                  <span>Гарантия качества</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
