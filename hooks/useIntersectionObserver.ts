"use client";

import { useEffect, useRef } from "react";

/**
 * Menambahkan class "visible" ke semua elemen dengan class `selector`
 * di dalam `containerRef` saat elemen masuk ke viewport.
 */
export function useIntersectionObserver(selector = ".reveal, .reveal-left, .reveal-right") {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Berhenti observe setelah terlihat
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe semua elemen yang cocok
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [selector]);
}
