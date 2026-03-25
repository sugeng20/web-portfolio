"use client";

import { useEffect, useState } from "react";

/**
 * Melacak section mana yang sedang aktif di viewport
 * berdasarkan posisi scroll.
 */
export function useScrollSpy(sectionIds: string[], offset = 80): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset + 1;

      // Cari section terakhir yang posisinya <= scrollY
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Jalankan sekali saat mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
