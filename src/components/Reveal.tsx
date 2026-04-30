import React, { useEffect, useState, useRef } from 'react';
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}s`
      }}>
      
      {children}
    </div>);

}