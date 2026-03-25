"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "@/contexts/ThemeContext";

/** Konfigurasi partikel – disesuaikan berdasarkan tema */
function buildOptions(isDark: boolean): ISourceOptions {
  const color = isDark ? "#a5b4fc" : "#6366f1";
  const linkColor = isDark ? "#6366f1" : "#c7d2fe";
  return {
    background:  { color: { value: "transparent" } },
    fpsLimit:    60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push:    { quantity: 2 },
      },
    },
    particles: {
      color:   { value: color },
      links: {
        color:   linkColor,
        distance: 150,
        enable:  true,
        opacity: 0.4,
        width:   1,
      },
      move: {
        enable:    true,
        speed:     1.2,
        direction: "none",
        random:    false,
        straight:  false,
        outModes:  { default: "bounce" },
      },
      number: {
        density: { enable: true, width: 800, height: 800 },
        value:   80,
      },
      opacity: { value: 0.5 },
      shape:   { type: "circle" },
      size:    { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };
}

/** Singleton flag agar engine hanya di-init sekali */
let engineReady = false;

/** Komponen partikel tsParticles untuk section Hero */
export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (engineReady) {
      setInit(true);
      return;
    }
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      engineReady = true;
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={buildOptions(theme === "dark")}
    />
  );
}
