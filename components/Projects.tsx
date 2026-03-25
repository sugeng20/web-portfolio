"use client";

import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface Project {
  title:       string;
  description: string;
  image:       string;         // emoji placeholder
  tech:        string[];
  liveUrl:     string;
  githubUrl:   string;
  color:       string;         // gradient warna kartu
}

const projects: Project[] = [
  {
    title:       "E-Commerce Dashboard",
    description:
      "Platform manajemen e-commerce lengkap dengan analitik real-time, manajemen produk & inventori, integrasi pembayaran Stripe, dan laporan penjualan interaktif.",
    image:       "🛒",
    tech:        ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Prisma", "Tailwind"],
    liveUrl:     "#",
    githubUrl:   "#",
    color:       "from-indigo-500 to-purple-600",
  },
  {
    title:       "Task Management App",
    description:
      "Aplikasi manajemen tugas kolaboratif real-time dengan board Kanban drag-and-drop, notifikasi live via WebSocket, dan manajemen tim yang intuitif.",
    image:       "✅",
    tech:        ["Vue.js", "Node.js", "MongoDB", "Socket.io", "Docker", "Redis"],
    liveUrl:     "#",
    githubUrl:   "#",
    color:       "from-cyan-500 to-blue-600",
  },
  {
    title:       "Weather Forecast API",
    description:
      "Layanan API cuaca berperforma tinggi dengan caching Redis, agregasi data dari berbagai sumber, visualisasi data interaktif, dan endpoint RESTful yang terdokumentasi.",
    image:       "⛅",
    tech:        ["TypeScript", "Express", "Redis", "OpenWeather API", "Swagger"],
    liveUrl:     "#",
    githubUrl:   "#",
    color:       "from-amber-500 to-orange-600",
  },
];

/** Section Projects dengan glassmorphism card design */
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-semibold tracking-widest uppercase text-indigo-500">
            My Work
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2 section-heading centered"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Featured Projects
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Beberapa project pilihan yang mencerminkan keahlian dan passion saya
            dalam membangun produk digital berkualitas tinggi.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="glass rounded-2xl overflow-hidden h-full flex flex-col
                           transition-all duration-300
                           hover:shadow-2xl hover:shadow-indigo-500/20
                           hover:-translate-y-2 hover:border-indigo-400/30"
              >
                {/* Banner gradient + emoji */}
                <div
                  className={`relative h-44 flex items-center justify-center
                              bg-gradient-to-br ${project.color} overflow-hidden`}
                >
                  <span className="text-6xl select-none">{project.image}</span>

                  {/* Overlay hover actions */}
                  <div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-900
                                 text-sm font-semibold hover:bg-indigo-100 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white
                                 text-sm font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm"
                    >
                      <GithubIcon size={14} />
                      Code
                    </a>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-muted)" }}>
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 text-xs rounded-full
                                   bg-indigo-100 dark:bg-indigo-950
                                   text-indigo-700 dark:text-indigo-300
                                   border border-indigo-200 dark:border-indigo-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
