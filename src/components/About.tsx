import { SkillsGrid } from './Skills';

const FOCUS_AREAS = [
  'API integration & third-party service orchestration',
  'Workflow automation (n8n, Make, Zapier, custom)',
  'Scalable backend architecture & database design',
  'Frontend development with React, Next.js & Vue',
];

export function About() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about" className="py-24 lg:py-28 bg-soft" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ------------------------------------------------- Bio column */}
          <div className="reveal">
            <p className="eyebrow m-0">About</p>
            <h2 className="section-title mt-2.5 mb-6">
              Building systems that
              <br />
              actually scale.
            </h2>

            <div className="space-y-4">
              <p className="text-mut m-0" style={{ fontSize: 17, lineHeight: 1.65 }}>
                I&apos;m a full-stack developer with a deep focus on backend
                architecture, API design and workflow automation. For 5+ years
                I&apos;ve turned complex business requirements into clean,
                maintainable systems.
              </p>
              <p className="text-mut m-0" style={{ fontSize: 17, lineHeight: 1.65 }}>
                My work spans designing RESTful and GraphQL APIs to orchestrating
                automated pipelines with Zapier, Make, n8n and custom
                microservices — helping teams save real time and money.
              </p>
            </div>

            <ul className="mt-7 mb-0 space-y-3 list-none p-0">
              {FOCUS_AREAS.map((area) => (
                <li key={area} className="flex items-start gap-3 text-ink" style={{ fontSize: 15 }}>
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-none"
                    style={{ background: 'var(--a)' }}
                    aria-hidden="true"
                  />
                  {area}
                </li>
              ))}
            </ul>

            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary mt-8"
            >
              Start a project →
            </button>
          </div>

          {/* -------------------------------------------- Skills column */}
          <div className="reveal" style={{ transitionDelay: '120ms' }}>
            <p className="eyebrow m-0 mb-4">Stack</p>
            <h2
              className="font-extrabold text-ink mt-0 mb-6"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              The tools I ship with.
            </h2>
            <SkillsGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
