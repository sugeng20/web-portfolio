"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name:    string;
  role:    string;
  company: string;
  avatar:  string;
  text:    string;
  rating:  number;
}

const testimonials: Testimonial[] = [
  {
    name:    "Budi Santoso",
    role:    "CEO",
    company: "TechStartup Indonesia",
    avatar:  "BS",
    text:    "Sugeng memberikan hasil yang luar biasa! Aplikasi dashboard yang dibangun sangat intuitif, performanya cepat, dan kualitas kodenya sangat bersih. Ia memahami kebutuhan bisnis kami dengan baik dan menghasilkan solusi yang melampaui ekspektasi.",
    rating:  5,
  },
  {
    name:    "Sari Wulandari",
    role:    "Product Manager",
    company: "DigitalCo Solutions",
    avatar:  "SW",
    text:    "Bekerja sama dengan Sugeng adalah pengalaman yang menyenangkan. Ia sangat komunikatif, tepat waktu, dan selalu proaktif memberikan saran terbaik. Kemampuannya dalam mengintegrasikan frontend dan backend secara seamless sangat mengesankan.",
    rating:  5,
  },
  {
    name:    "Ahmad Fauzi",
    role:    "CTO",
    company: "WebAgency Nusantara",
    avatar:  "AF",
    text:    "Skill teknis Sugeng di level yang sangat tinggi. Ia tidak hanya coding dengan baik, tetapi juga memiliki sense desain yang kuat. Project e-commerce yang kami bangun bersama berhasil meningkatkan konversi penjualan hingga 40%.",
    rating:  5,
  },
];

/** Render bintang rating */
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/** Section Testimonials – simple carousel dengan prev/next */
export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24 px-4"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-semibold tracking-widest uppercase text-indigo-500">
            Client Reviews
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2 section-heading centered"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Testimonial
          </h2>
        </div>

        {/* Carousel card */}
        <div className="reveal">
          <div className="glass rounded-3xl p-8 sm:p-12 relative">
            {/* Icon kutipan */}
            <Quote
              size={48}
              className="absolute top-8 right-8 text-indigo-200 dark:text-indigo-900 opacity-60"
            />

            {/* Rating */}
            <div className="mb-4">
              <StarRating count={t.rating} />
            </div>

            {/* Teks testimoni */}
            <blockquote
              className="text-lg sm:text-xl leading-relaxed mb-8 italic"
              style={{ color: "var(--text)" }}
            >
              &ldquo;{t.text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center
                           text-white font-bold text-lg
                           bg-gradient-to-br from-indigo-500 to-purple-600"
              >
                {t.avatar}
              </div>
              <div>
                <p className="font-semibold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {t.name}
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigasi carousel */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center
                         hover:border-indigo-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950
                         transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300
                    ${i === current
                      ? "w-6 h-2.5 bg-indigo-500"
                      : "w-2.5 h-2.5 bg-[var(--border)] hover:bg-indigo-300"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center
                         hover:border-indigo-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950
                         transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
