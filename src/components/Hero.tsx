import React, { useEffect, useState } from 'react';

const WORDS = ['web apps', 'APIs', 'dashboards', 'automations'];

const STATS = [
  { value: '30+', label: 'Projects shipped' },
  { value: '5+', label: 'Years experience' },
  { value: '10+', label: 'API integrations' },
];

function reducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fading, setFading] = useState(false);

  // Staggered reveal on load (transition delays are set inline below)
  useEffect(() => {
    const timer = window.setTimeout(() => {
      document
        .querySelectorAll('#home .reveal')
        .forEach((el) => el.classList.add('visible'));
    }, 100);
    return () => window.clearTimeout(timer);
  }, []);

  // Rotating gradient keyword — ambient loop, skipped for reduced motion
  useEffect(() => {
    if (reducedMotion()) return;
    let swap = 0;
    const interval = window.setInterval(() => {
      setFading(true);
      swap = window.setTimeout(() => {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setFading(false);
      }, 350);
    }, 2600);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(swap);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Magnetic hover on the CTAs (pointer devices only, < 800ms)
  const magnet = (e: React.PointerEvent<HTMLElement>) => {
    if (reducedMotion() || e.pointerType === 'touch') return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 8;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const demagnet = (e: React.PointerEvent<HTMLElement>) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <header id="home" className="relative overflow-hidden">
      {/* Ambient background: drifting orbs + faint masked grid */}
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <div className="relative max-w-[1100px] mx-auto px-6 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-14 lg:gap-12 items-center">
          {/* ---------------------------------------------------- Left column */}
          <div>
            <h1
              className="reveal font-extrabold mt-0 mb-0 text-ink"
              style={{
                transitionDelay: '90ms',
                fontSize: 'clamp(2.4rem, 6vw, 4.25rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
              }}
            >
              I build fast, polished{' '}
              <span
                className={`grad-word ${fading ? 'out' : ''}`}
                aria-hidden="true"
              >
                {WORDS[wordIndex]}
              </span>
              <span className="sr-only">web apps, APIs and automations</span>{' '}
              that scale.
            </h1>

            <p
              className="reveal text-mut max-w-[540px]"
              style={{
                transitionDelay: '180ms',
                fontSize: 18,
                lineHeight: 1.6,
              }}
            >
              Full-stack developer in Lagos, Nigeria. I design, build and ship
              complete products — from pixel-perfect interfaces to the APIs,
              integrations and databases behind them.
            </p>

            <div
              className="reveal flex flex-wrap gap-3.5 mt-8"
              style={{ transitionDelay: '270ms' }}
            >
              <button
                className="btn-primary"
                onClick={() => scrollTo('work')}
                onPointerMove={magnet}
                onPointerLeave={demagnet}
              >
                View my work →
              </button>
              <button
                className="btn-secondary"
                onClick={() => scrollTo('contact')}
                onPointerMove={magnet}
                onPointerLeave={demagnet}
              >
                Let&apos;s talk
              </button>
            </div>

            {/* Proof stats */}
            <div
              className="reveal flex flex-wrap gap-8 sm:gap-10 mt-11"
              style={{ transitionDelay: '360ms' }}
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-extrabold m-0 text-ink"
                    style={{
                      fontSize: 28,
                      letterSpacing: '-0.03em',
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="m-0 text-mut" style={{ fontSize: 13 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --------------------------------------------------- Right column */}
          <div
            className="reveal relative justify-self-center lg:justify-self-end w-full max-w-[420px]"
            style={{ transitionDelay: '240ms' }}
          >
            <div className="relative pt-8 pb-16 px-2 min-h-[340px]">
              {/* Floating code card */}
              <div className="code-card">
                <div className="code-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="code-body" aria-hidden="true">
                  <em>const</em> developer = {'{'}
                  <br />
                  &nbsp;&nbsp;role: <u>&quot;Full-Stack&quot;</u>,
                  <br />
                  &nbsp;&nbsp;stack: [<u>&quot;React&quot;</u>,{' '}
                  <u>&quot;Node&quot;</u>, <u>&quot;PostgreSQL&quot;</u>],
                  <br />
                  &nbsp;&nbsp;focus: <u>&quot;APIs, automation, clean UX&quot;</u>,
                  <br />
                  &nbsp;&nbsp;status: <u>&quot;shipping&quot;</u>
                  <br />
                  {'}'};
                </div>
                <p className="sr-only">
                  Developer profile: full-stack, React, Node and PostgreSQL,
                  focused on APIs, automation and clean UX.
                </p>
              </div>

              {/* Floating tech chips */}
              <span className="chip chip-1">⚡ React</span>
              <span className="chip chip-2">🛠 Node.js</span>
              <span className="chip chip-3">🔌 REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
