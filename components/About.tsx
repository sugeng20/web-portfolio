"use client";

import { User, Code2, Database, Wrench } from "lucide-react";

/** Daftar skill dibagi per kategori */
const skills = [
  {
    category: "Frontend",
    icon: <Code2 size={16} />,
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: <Wrench size={16} />,
    items: ["Node.js", "Express", "Django", "Laravel", "REST API", "GraphQL"],
  },
  {
    category: "Database",
    icon: <Database size={16} />,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Sequelize"],
  },
  {
    category: "Tools",
    icon: <User size={16} />,
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Linux"],
  },
];

/** Section About – foto placeholder, bio, skill badges */
export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-semibold tracking-widest uppercase text-indigo-500">
            Get to know me
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2 section-heading centered"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Foto Placeholder ── */}
          <div className="flex justify-center reveal-left">
            <div className="relative">
              {/* Foto placeholder dengan gradient border */}
              <div
                className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden
                           p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500"
              >
                <div
                  className="w-full h-full rounded-[inherit] flex items-center justify-center
                             bg-gradient-to-br from-indigo-100 to-purple-100
                             dark:from-indigo-950 dark:to-purple-950"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500
                                    flex items-center justify-center text-white text-3xl font-bold mx-auto mb-2">
                      S
                    </div>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>Photo Placeholder</p>
                  </div>
                </div>
              </div>

              {/* Badge experience */}
              <div
                className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 text-center animate-pulse-glow"
              >
                <p className="text-2xl font-bold text-indigo-500">5+</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>Years Exp.</p>
              </div>

              {/* Badge projects */}
              <div
                className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 text-center"
              >
                <p className="text-2xl font-bold text-purple-500">50+</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>Projects</p>
              </div>
            </div>
          </div>

          {/* ── Bio & Skills ── */}
          <div className="reveal-right">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Fullstack Developer berbasis di Indonesia
            </h3>
            <p className="mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Saya adalah seorang Fullstack Developer dengan pengalaman lebih dari 5 tahun
              dalam membangun aplikasi web yang modern, scalable, dan user-friendly. Saya
              bersemangat dalam menciptakan solusi digital yang tidak hanya fungsional,
              tetapi juga memberikan pengalaman yang elegan bagi pengguna.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Saya terbiasa bekerja dalam tim agile, berkomunikasi dengan klien, dan
              menghasilkan produk berkualitas tinggi dalam tenggat waktu yang ketat.
              Selalu bersemangat mempelajari teknologi baru dan menghadapi tantangan teknis.
            </p>

            {/* Skill badges per kategori */}
            <div className="space-y-4">
              {skills.map(({ category, icon, items }) => (
                <div key={category}>
                  <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-indigo-500">
                    {icon}
                    <span>{category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full border border-[var(--border)]
                                   bg-[var(--bg)] text-[var(--text)]
                                   hover:border-indigo-400 hover:text-indigo-600
                                   dark:hover:text-indigo-400
                                   transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
