"use client";

import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  type: "work" | "education";
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  skills?: string[];
}

const timeline: TimelineItem[] = [
  {
    type: "work",
    period: "Oktober 2025 - Sekarang",
    title: "Fullstack Developer",
    organization: "PT. Ewindo (Electric Wire Indonesia)",
    location: "Bandung, Indonesia",
    description:
      "Memimpin tim 4 developer dalam membangun platform SaaS B2B. Merancang arsitektur microservices, mengimplementasikan CI/CD pipeline, dan memastikan uptime 99.9%.",
    skills: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    type: "work",
    period: "November 2024 - Juli 2025",
    title: "Fullstack Web Developer",
    organization: "PT. Qtasnim Digital Teknologi",
    location: "Bandung, Indonesia",
    description:
      "Mengembangkan 15+ aplikasi web untuk klien dari berbagai industri. Bertanggung jawab atas seluruh siklus pengembangan dari desain hingga deployment.",
    skills: ["React", "Laravel", "MySQL", "Redis", "Nginx"],
  },
  {
    type: "work",
    period: "Januari 2024 - Oktober 2026",
    title: "Full Stack Developer",
    organization: "PT. Itgenic Kreatif Indonesia",
    location: "Indramayu, Indonesia",
    description:
      "Bekerja sebagai freelancer untuk klien domestik dan internasional. Spesialisasi dalam membangun UI/UX yang responsif dan performatif menggunakan React ecosystem.",
    skills: ["React", "Vue.js", "JavaScript", "SCSS", "WordPress"],
  },
  {
    type: "education",
    period: "2020 - 2024",
    title: "S1 Teknologi Pendidikan",
    organization: "Universitas Negeri Jakarta",
    location: "Jakarta, Indonesia",
    description:
      "Lulus dengan predikat Cum Laude (IPK 3.84). Skripsi di bidang web untuk klasifikasi teks Bahasa Indonesia.",
  },
];

/** Timeline card item */
function TimelineCard({
  item,
  isLeft,
}: {
  item: TimelineItem;
  isLeft: boolean;
}) {
  const isWork = item.type === "work";

  return (
    <div
      className={`relative flex items-start gap-6 md:gap-0 ${
        isLeft ? "md:flex-row-reverse" : "md:flex-row"
      } mb-12`}
    >
      {/* Konten card */}
      {/* isLeft=true  → card di sisi KANAN (flex-row-reverse): butuh pl-10 sbg jarak dari ikon tengah */}
      {/* isLeft=false → card di sisi KIRI  (flex-row)        : butuh pr-10 sbg jarak dari ikon tengah */}
      <div
        className={`flex-1 ${
          isLeft
            ? "md:pl-10 md:pr-2 reveal-right"
            : "md:pl-2 md:pr-10 reveal-left"
        } pl-14`}
      >
        <div
          className="glass rounded-2xl p-6
                     hover:shadow-xl hover:shadow-indigo-500/10
                     transition-all duration-300 hover:-translate-y-1"
        >
          {/* Badge type & period */}
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                ${
                  isWork
                    ? "bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300"
                    : "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300"
                }`}
            >
              {isWork ? <Briefcase size={12} /> : <GraduationCap size={12} />}
              {isWork ? "Work" : "Education"}
            </span>
            <span
              className="text-xs font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              {item.period}
            </span>
          </div>

          {/* Judul & organisasi */}
          <h3
            className="text-lg font-bold mb-1"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {item.title}
          </h3>
          <p className="text-sm font-medium text-indigo-500 mb-1">
            {item.organization}
          </p>
          <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
            📍 {item.location}
          </p>

          {/* Deskripsi */}
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            {item.description}
          </p>

          {/* Skills used */}
          {item.skills && (
            <div className="flex flex-wrap gap-1.5">
              {item.skills.map((s) => (
                <span
                  key={s}
                  className="px-2 py-0.5 text-xs rounded border border-[var(--border)]
                             bg-[var(--bg)] text-[var(--text-muted)]"
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dot di tengah – hanya desktop */}
      <div
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12
                      rounded-full items-center justify-center z-10
                      bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg"
      >
        {isWork ? <Briefcase size={18} /> : <GraduationCap size={18} />}
      </div>

      {/* Spacer sisi kosong desktop */}
      <div className="hidden md:block flex-1" />

      {/* Dot mobile – absolute di kiri */}
      <div
        className="md:hidden absolute left-0 top-6 w-10 h-10 rounded-full
                      flex items-center justify-center z-10
                      bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md"
      >
        {isWork ? <Briefcase size={14} /> : <GraduationCap size={14} />}
      </div>
    </div>
  );
}

/** Section Experience – timeline pengalaman & pendidikan */
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-semibold tracking-widest uppercase text-indigo-500">
            My Journey
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2 section-heading centered"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Experience & Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Garis vertikal tengah (desktop) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5
                          bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
          />

          {/* Garis vertikal kiri (mobile) */}
          <div
            className="md:hidden absolute left-5 top-0 bottom-0 w-0.5
                          bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
          />

          {timeline.map((item, i) => (
            <TimelineCard key={i} item={item} isLeft={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
