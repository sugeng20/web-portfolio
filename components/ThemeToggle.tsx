"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

/** Tombol toggle dark/light mode */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="w-10 h-10 rounded-full flex items-center justify-center
                 transition-all duration-300 hover:scale-110
                 border border-[var(--border)] bg-[var(--bg-alt)]
                 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950"
    >
      {theme === "light" ? (
        <Moon size={18} className="text-indigo-600" />
      ) : (
        <Sun size={18} className="text-amber-400" />
      )}
    </button>
  );
}
