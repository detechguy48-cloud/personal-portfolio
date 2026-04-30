import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const reveals = el.querySelectorAll('.reveal');
    reveals.forEach((r) => observer.observe(r));

    return () => {
      reveals.forEach((r) => observer.unobserve(r));
    };
  }, [threshold]);

  return ref;
}