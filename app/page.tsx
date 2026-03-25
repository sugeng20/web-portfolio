"use client";

import { useState, useCallback } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import About         from "@/components/About";
import Projects      from "@/components/Projects";
import Testimonials  from "@/components/Testimonials";
import Experience    from "@/components/Experience";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";

/** Komponen utama yang mengaktifkan scroll-reveal setelah mount */
function PortfolioContent() {
  // Aktifkan IntersectionObserver untuk animasi scroll-reveal
  useIntersectionObserver();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/** Root page – mengelola loading screen dan theme provider */
export default function Page() {
  const [loading, setLoading] = useState(true);
  const handleFinished = useCallback(() => setLoading(false), []);

  return (
    <ThemeProvider>
      {/* Loading screen muncul pertama kali */}
      {loading && <LoadingScreen onFinished={handleFinished} />}

      {/* Konten portfolio – tersembunyi saat loading, muncul setelahnya */}
      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <PortfolioContent />
      </div>
    </ThemeProvider>
  );
}
