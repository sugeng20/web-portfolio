"use client";

import { Heart } from "lucide-react";

/** Footer sederhana */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-4 border-t text-center"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    >
      <p className="text-sm flex items-center justify-center gap-1.5" style={{ color: "var(--text-muted)" }}>
        &copy; {year} Sugeng. Dibuat dengan
        <Heart size={14} className="text-red-500 fill-red-500" />
        menggunakan Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
