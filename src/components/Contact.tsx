"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  ArrowUp,
  Github,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "gamederbi73@gmail.com";
  const telegramHandle = "@Lovebeast67";
  const telegramUrl = "https://t.me/Lovebeast67";
  const githubUrl = "https://github.com/Rudik1266";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full pt-28 pb-16 px-6 md:px-12 lg:px-20 bg-black text-white border-t border-white/10 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#EC612C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Header */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs font-mono tracking-wider uppercase text-[#EC612C] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Прямой контакт
          </div>

          <h2 className="font-bamboly text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white leading-none mb-6 select-none">
            LET’S WORK <span className="text-[#EC612C]">TOGETHER</span>
          </h2>

          <p className="max-w-2xl text-neutral-400 font-sans text-lg leading-relaxed">
            Открыт для интересных предложений, разработки интерактивных сервисов и современных веб-проектов.
            Свяжитесь со мной удобным для вас способом:
          </p>
        </div>

        {/* Contact Cards Grid: Email, Telegram, GitHub */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* 1. Email Card */}
          <div className="group relative bg-[#0c0c0e] border border-white/10 rounded-3xl p-7 flex flex-col justify-between hover:border-[#EC612C]/60 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#EC612C] mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2 block">
                Электронная почта
              </span>
              <a
                href={`mailto:${email}`}
                className="text-base sm:text-lg font-bold text-white font-mono break-all hover:text-[#EC612C] transition-colors block mb-4"
              >
                {email}
              </a>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#EC612C] text-neutral-300 hover:text-white text-xs font-mono transition-all flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#90EE90]" />
                  <span className="text-white font-semibold">Скопировано в буфер!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Копировать адрес</span>
                </>
              )}
            </button>
          </div>

          {/* 2. Telegram Card */}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#0c0c0e] border border-white/10 rounded-3xl p-7 flex flex-col justify-between hover:border-[#89CFF0]/60 hover:bg-[#89CFF0]/5 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#89CFF0] group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 fill-current ml-0.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                  </svg>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2 block">
                Telegram для связи
              </span>
              <div className="text-xl font-bold text-white group-hover:text-[#89CFF0] transition-colors">
                {telegramHandle}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#90EE90] animate-pulse" />
              <span>Быстрый ответ в течение дня</span>
            </div>
          </a>

          {/* 3. GitHub Card */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#0c0c0e] border border-white/10 rounded-3xl p-7 flex flex-col justify-between hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2 block">
                GitHub профиль
              </span>
              <div className="text-xl font-bold text-white group-hover:text-white transition-colors">
                github.com/Rudik1266
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span>Открыть профиль GitHub →</span>
            </div>
          </a>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} Beyond Hero. Crafted with Next.js & Framer Motion.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <span>Наверх</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
