"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home",        href: "#hero" },
  { label: "About",       href: "#about" },
  { label: "Projects",    href: "#projects" },
  { label: "Testimonial", href: "#testimonials" },
  { label: "Experience",  href: "#experience" },
  { label: "Contact",     href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

/** Sticky navbar dengan scroll-spy dan mobile menu */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const activeId = useScrollSpy(sectionIds);

  /* Deteksi scroll untuk efek background navbar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? "shadow-lg backdrop-blur-md"
          : "backdrop-blur-sm"}`}
      style={{ background: scrolled ? "var(--nav-bg)" : "transparent" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleLinkClick("#hero"); }}
            className="text-xl font-bold gradient-text"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            {"<Sugeng />"}
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = activeId === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(href); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    ${isActive
                      ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/30"
                      : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-alt)]"
                    }`}
                >
                  {label}
                </a>
              );
            })}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="w-10 h-10 flex items-center justify-center rounded-full
                         border border-[var(--border)] bg-[var(--bg-alt)]"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        style={{ background: "var(--nav-bg)", backdropFilter: "blur(16px)" }}
      >
        <div className="px-4 py-3 flex flex-col gap-1 border-t border-[var(--border)]">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(href); }}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${isActive
                    ? "bg-indigo-500 text-white"
                    : "text-[var(--text-muted)] hover:bg-[var(--bg-alt)]"
                  }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
