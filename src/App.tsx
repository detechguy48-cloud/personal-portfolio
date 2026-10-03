import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  useEffect(() => {
    // Scroll-triggered fade-up: IntersectionObserver adds .visible once,
    // then stops observing. Every animation stays under 800ms (see index.css).
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="relative">
      {/* Keyboard shortcut straight to the content */}
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <Projects />
        <About />
        {/* Testimonials intentionally omitted — no real client quotes yet.
            Add a <Testimonials /> section here rather than inventing quotes. */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
