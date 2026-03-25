"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onFinished: () => void;
}

/**
 * Loading screen animasi yang muncul saat pertama kali halaman dibuka.
 * Otomatis hilang setelah ~2.2 detik.
 */
export default function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Mulai fade-out setelah 2 detik
    const timer = setTimeout(() => setFadeOut(true), 2000);
    // Panggil onFinished setelah animasi fade-out selesai (300ms)
    const endTimer = setTimeout(() => onFinished(), 2300);
    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center
        bg-[var(--bg)] transition-opacity duration-300
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* Logo / Initial */}
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-2xl gradient-text flex items-center justify-center
                        text-4xl font-bold border-2 border-indigo-500 animate-pulse-glow">
          <span className="gradient-text" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            S
          </span>
        </div>
        {/* Spinner cincin luar */}
        <div className="absolute inset-0 -m-2 rounded-2xl border-2 border-transparent
                        border-t-indigo-500 border-r-purple-500 animate-spin-slow" />
      </div>

      {/* Nama */}
      <h1
        className="text-2xl font-semibold mb-1 gradient-text"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        Sugeng
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
        Fullstack Developer
      </p>

      {/* Progress bar */}
      <div
        className="w-48 h-1 rounded-full overflow-hidden"
        style={{ background: "var(--border)" }}
      >
        <div className="h-full rounded-full animate-loading-bar bg-gradient-to-r from-indigo-500 to-purple-500" />
      </div>
    </div>
  );
}
