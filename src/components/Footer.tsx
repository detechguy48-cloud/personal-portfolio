import React from 'react';
export function Footer() {
  const scrollToTop = () => {
    const el = document.getElementById('home');
    if (el)
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '2.5rem 0'
      }}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[0.7rem] text-gray-700 tracking-wide">
          © 2026 detechguy. Built with precision.
        </p>
        <button
          onClick={scrollToTop}
          className="font-mono text-[0.7rem] text-gray-700 tracking-wide hover:text-neo-accent transition-colors">
          
          ↑ back to top
        </button>
      </div>
    </footer>);

}