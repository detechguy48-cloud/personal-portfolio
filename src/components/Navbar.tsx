import { useEffect, useMemo, useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

/** Nav entries: id must match the section's id attribute. */
const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = useMemo(() => ['home', ...NAV.map((n) => n.id)], []);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[14px] transition-shadow"
      style={{
        background: 'rgba(255,255,255,0.8)',
        borderBottom: '1px solid var(--line)',
        boxShadow: scrolled ? '0 10px 30px -24px rgba(11,11,20,0.5)' : 'none',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo — swap this text for <img src="/logo.png" alt="…"/> if you prefer the image mark */}
          <button
            onClick={() => scrollTo('home')}
            className="font-extrabold text-lg tracking-[-0.02em] text-ink"
            aria-label="Back to top"
          >
            DeTechGuy<span className="text-accent">.</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7 list-none p-0 m-0">
            {NAV.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary"
              style={{ padding: '9px 20px', fontSize: 14 }}
            >
              Hire me
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="px-6 py-6 flex flex-col items-start gap-5">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary w-full"
              style={{ justifyContent: 'center' }}
            >
              Hire me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
