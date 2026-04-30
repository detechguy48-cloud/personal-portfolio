import React, { useEffect, useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
const NAV_SECTIONS = ["About", "Skills", "Projects", "Contact"];
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(["home", ...NAV_SECTIONS]);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el)
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    setMenuOpen(false);
  };
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass border-b"
      style={{
        borderColor: "rgba(255,255,255,0.05)",
        background: scrolled ? "rgba(5,8,16,0.9)" : undefined,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo — To use a custom logo, replace the div below with: */}
         
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3 group"
          >
             <img src="/logo.png" alt="Logo" className="h-20" />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_SECTIONS.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`nav-link ${activeSection === id ? "active" : ""}`}
              >
                _{id}
              </button>
            ))}
          </div>

          {/* Status + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="status-dot" />
              <span className="font-mono text-[0.7rem] text-emerald-500 tracking-wide">
                available
              </span>
            </div>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-primary text-xs"
            >
              hire me →
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden glass border-t"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_SECTIONS.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`nav-link text-sm text-left ${activeSection === id ? "active" : ""}`}
              >
                _{id}
              </button>
            ))}
            <div className="neo-divider" />
            <button
              onClick={() => scrollTo("contact")}
              className="btn-primary text-center"
            >
              hire me →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
