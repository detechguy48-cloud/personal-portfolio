import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
  badge: string;
  /** Replace '#' with the real production URL before going live. */
  liveUrl: string;
  /** Replace '#' with the real repository URL before going live. */
  repoUrl: string;
  shotClass: string;
  /** Cloudinary public ID of the promo video shown in the card header. */
  videoId: string;
  icon: React.ReactNode;
}

const CLOUD_NAME = 'afftdzay';

/**
 * Autoplay is requested twice — once as flat params (legacy embedder) and once
 * inside the `player` object (current embedder format) — so the video starts
 * playing silently no matter which shape the Cloudinary embedder honours.
 * Muted + playsinline is what browsers require to allow autoplay.
 */
const PLAYBACK_PARAMS =
  'autoplay=true&muted=true&loop=true&controls=true' +
  '&player%5Bautoplay%5D=true&player%5Bmuted%5D=true' +
  '&player%5Bloop%5D=true&player%5Bcontrols%5D=true';

const videoSrc = (publicId: string) =>
  `https://player.cloudinary.com/embed/?cloud_name=${CLOUD_NAME}&public_id=${encodeURIComponent(
    publicId,
  )}&${PLAYBACK_PARAMS}`;

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Vitalis Health',
    description:
      'Modern care, close to you — a patient-first healthcare platform for finding trusted doctors, booking visits and managing records in one place.',
    problem:
      'Patients had no fast way to find trusted care and book an appointment without calling around.',
    solution:
      'A responsive healthcare client with doctor search, online booking and secure record access.',
    result:
      'Appointments booked in minutes and a calmer, more connected patient experience.',
    tags: ['React', 'Node.js', 'Healthcare'],
    badge: 'HEALTHCARE',
    liveUrl: '#',
    repoUrl: '#',
    shotClass: 'shot-1',
    videoId: 'Vitalis_Health_Modern_Care_Close_to_You',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <path
          d="M30 47s-13-8-13-18a7.5 7.5 0 0 1 13-4.8A7.5 7.5 0 0 1 43 29c0 10-13 18-13 18z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M17 31h7l2.5-5 4 10 2.5-5h10"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Aura Store',
    description:
      'Everyday essentials, elevated — a polished storefront with curated collections, smart search and a one-page checkout that never gets in the way.',
    problem:
      'Shoppers bounced between clunky product pages and a slow, multi-step checkout.',
    solution:
      'A fast storefront with curated collections, instant search, cart and one-page checkout.',
    result:
      'Higher conversion and a checkout that takes seconds instead of minutes.',
    tags: ['React', 'TypeScript', 'Stripe'],
    badge: 'E-COMMERCE',
    liveUrl: '#',
    repoUrl: '#',
    shotClass: 'shot-2',
    videoId: 'Aura_Store_Everyday_Essentials_Elevated',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <path
          d="M17 20h26l-2.5 27h-21L17 20z"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M23.5 20a6.5 6.5 0 0 1 13 0"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M24 29h12"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Pixel Arcade',
    description:
      'Play the classics — a browser arcade packed with retro-inspired games, responsive controls and global high-score leaderboards.',
    problem:
      'Classic games were scattered across installs, ads and incompatible players.',
    solution:
      'A browser arcade with responsive input, smooth Canvas rendering and online leaderboards.',
    result:
      'Instant, install-free play with competitive high scores that keep players coming back.',
    tags: ['JavaScript', 'Canvas', 'Game Dev'],
    badge: 'GAMING',
    liveUrl: '#',
    repoUrl: '#',
    shotClass: 'shot-3',
    videoId: 'PIXEL_ARCADE_Play_the_Classics',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <circle cx="30" cy="39" r="11" stroke="#fff" strokeWidth="1.5" />
        <circle cx="30" cy="39" r="3.5" fill="rgba(255,255,255,0.4)" stroke="#fff" strokeWidth="1.5" />
        <path d="M30 28V17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="30" cy="14" r="4.5" fill="rgba(255,255,255,0.3)" stroke="#fff" strokeWidth="1.5" />
        <path
          d="M14 39h5M41 39h5"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'PulseFit',
    description:
      'Train harder, live better — a fitness companion with structured workout plans, set-by-set logging and progress you can actually see.',
    problem:
      'Gym-goers lost track of their programming, weights lifted and weekly progress.',
    solution:
      'A mobile-first fitness app with adaptive plans, quick set logging and streak tracking.',
    result:
      'Members stay consistent because every session adds up to visible, measurable progress.',
    tags: ['React', 'Firebase', 'Fitness'],
    badge: 'FITNESS',
    liveUrl: '#',
    repoUrl: '#',
    shotClass: 'shot-4',
    videoId: 'PULSEFIT_Train_Harder._Live_Better.',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <rect x="16" y="25" width="9" height="14" rx="2.5" stroke="#fff" strokeWidth="1.5" />
        <rect x="35" y="25" width="9" height="14" rx="2.5" stroke="#fff" strokeWidth="1.5" />
        <path d="M25 32h10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M12 27v10M48 27v10"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function placeholderClick(e: React.MouseEvent) {
  // Placeholder link — replace href with the real URL, then remove this guard.
  if ((e.currentTarget as HTMLAnchorElement).getAttribute('href') === '#') {
    e.preventDefault();
  }
}

function ProjectCard({ project }: { project: Project }) {
  // 3D tilt on pointer devices only; disabled for reduced motion.
  const tilt = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === 'touch') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-6px)`;
  };
  const resetTilt = (e: React.PointerEvent<HTMLElement>) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <article
      className="project-card"
      onPointerMove={tilt}
      onPointerLeave={resetTilt}
    >
      {/* Bubble video player — gradient shell + floating glass bubbles */}
      <div className={`project-shot ${project.shotClass}`}>
        <span className="bub bub-a" aria-hidden="true" />
        <span className="bub bub-b" aria-hidden="true" />
        <span className="bub bub-c" aria-hidden="true" />

        <div className="video-frame">
          {/* Visible behind the iframe while the player boots up */}
          <div className="video-fallback" aria-hidden="true">
            {project.icon}
          </div>
          <iframe
            src={videoSrc(project.videoId)}
            title={`${project.title} — project demo video`}
            loading="lazy"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        <span className="shot-live">
          <i aria-hidden="true" />
          NOW PLAYING
        </span>
        <span className="shot-tag">{project.badge}</span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3
          className="font-extrabold text-ink m-0"
          style={{ fontSize: 20, letterSpacing: '-0.02em' }}
        >
          {project.title}
        </h3>
        <p className="text-mut text-[15px] mt-2 mb-0">{project.description}</p>

        {/* Problem / Solution / Result */}
        <dl className="psr">
          <div>
            <dt>Problem</dt>
            <dd className="m-0">{project.problem}</dd>
          </div>
          <div>
            <dt>Solution</dt>
            <dd className="m-0">{project.solution}</dd>
          </div>
          <div>
            <dt>Result</dt>
            <dd className="m-0">{project.result}</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 mt-5 pt-4" style={{ borderTop: '1px solid var(--line)' }}>
          <a
            href={project.liveUrl}
            onClick={placeholderClick}
            className="text-[13px] font-bold text-accent hover:underline"
            target={project.liveUrl !== '#' ? '_blank' : undefined}
            rel="noreferrer"
          >
            Live site ↗
          </a>
          <a
            href={project.repoUrl}
            onClick={placeholderClick}
            className="text-[13px] font-bold text-mut hover:text-ink transition-colors"
            target={project.repoUrl !== '#' ? '_blank' : undefined}
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="work" className="py-24 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-10 lg:mb-14">
          <div>
            <p className="eyebrow m-0">Selected work</p>
            <h2 className="section-title mt-2.5 mb-0">
              Things I&apos;ve designed &amp; built.
            </h2>
          </div>
          <button
            onClick={() => scrollTo('contact')}
            className="text-[14px] font-bold text-accent hover:underline whitespace-nowrap"
          >
            Start a project →
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
          {PROJECTS.map((project, i) => (
            <div key={project.id} className="reveal" style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
