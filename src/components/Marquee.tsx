const TECH = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'GraphQL',
  'REST APIs',
  'Docker',
  'n8n',
  'Tailwind CSS',
];

/**
 * Infinite tech-stack marquee.
 * Decorative (screen readers get the full stack in the About section),
 * so the whole strip is hidden from assistive tech.
 */
export function Marquee() {
  const items = [...TECH, ...TECH];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
