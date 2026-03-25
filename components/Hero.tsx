"use client";

import { ArrowDown, Mail, Eye } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

/** Section Hero – full-viewport dengan efek partikel */
export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Partikel background */}
      <ParticlesBackground />

      {/* Gradient blobs dekoratif */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Konten utama */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Badge status */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-6
                     border border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950
                     text-indigo-700 dark:text-indigo-300 animate-fade-in"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for work
        </div>

        {/* Nama */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up leading-tight"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            animationDelay: "0.1s",
            opacity: 0,
          }}
        >
          Hi, I&#39;m <span className="gradient-text">Sugeng</span>
        </h1>

        {/* Profesi */}
        <h2
          className="text-xl sm:text-2xl lg:text-3xl font-medium mb-4 animate-fade-in-up"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-space-grotesk)",
            animationDelay: "0.25s",
            opacity: 0,
          }}
        >
          Fullstack Developer
        </h2>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg mb-10 max-w-xl mx-auto animate-fade-in-up"
          style={{
            color: "var(--text-muted)",
            animationDelay: "0.4s",
            opacity: 0,
          }}
        >
          &ldquo;Turning complex problems into clean solutions&rdquo;
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.55s", opacity: 0 }}
        >
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white
                       bg-gradient-to-r from-indigo-500 to-purple-600
                       hover:from-indigo-600 hover:to-purple-700
                       shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50
                       transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Mail size={18} />
            Hire Me
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold
                       border-2 border-indigo-400 text-indigo-600 dark:text-indigo-400
                       hover:bg-indigo-50 dark:hover:bg-indigo-950
                       transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Eye size={18} />
            View Work
          </button>
        </div>

        {/* Tech stack pills */}
        <div
          className="mt-12 flex flex-wrap justify-center gap-2 animate-fade-in"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full border border-[var(--border)]
                         bg-[var(--bg-alt)] text-[var(--text-muted)]"
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                   flex flex-col items-center gap-1 text-[var(--text-muted)]
                   hover:text-indigo-500 transition-colors animate-float"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ArrowDown size={18} />
      </button>
    </section>
  );
}
