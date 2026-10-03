import React, { useState, Fragment } from 'react';

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
  icon: React.ReactNode;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Online NewsFeed',
    description:
      'Modern responsive news platform delivering real-time global headlines with category filtering, dynamic article rendering, and a fast-loading reading experience.',
    problem:
      'Readers had no fast, unified place to follow global headlines across categories.',
    solution:
      'Responsive React client that pulls from News API with category filtering and dynamic article rendering.',
    result:
      'A lightweight reader that surfaces real-time headlines without page reloads.',
    tags: ['React', 'News API', 'CSS'],
    badge: 'API',
    liveUrl: '#',
    repoUrl: '#',
    shotClass: 'shot-1',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <circle cx="30" cy="30" r="28" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <path d="M20 30h20M30 20v20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="30" r="5" fill="rgba(255,255,255,0.35)" stroke="#fff" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Triple Bee Events',
    description:
      'Full-stack event management platform for planning, promoting and managing events with real-time ticketing and attendee tracking.',
    problem:
      'Event organisers were juggling promotion, ticketing and attendance in separate tools.',
    solution:
      'Full-stack platform that unifies event planning, promotion, real-time ticketing and attendee tracking.',
    result:
      'One workflow from publishing an event to checking attendees in.',
    tags: ['React', 'TypeScript'],
    badge: 'FULL STACK',
    liveUrl: '#',
    repoUrl: '#',
    shotClass: 'shot-2',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <rect x="15" y="18" width="30" height="25" rx="3" stroke="#fff" strokeWidth="1.5" />
        <path d="M25 15v6M35 15v6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 26h30" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'School Management System',
    description:
      'Comprehensive school administration platform with student enrollment, attendance tracking, grade management and parent-teacher communication.',
    problem:
      'Schools ran admissions, attendance, grades and parent comms across disconnected records.',
    solution:
      'A multi-role admin platform covering enrollment, attendance, grade management and messaging.',
    result:
      'Staff get one dashboard for the day-to-day operations of the school.',
    tags: ['React', 'PostgreSQL', 'Python'],
    badge: 'EDTECH',
    liveUrl: '#',
    repoUrl: '#',
    shotClass: 'shot-3',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <path d="M30 10L10 22l20 12 20-12L30 10z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 22v16l20 12V38" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M50 22v16l-20 12V38" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'School Timetable Generator',
    description:
      'Intelligent scheduling system that auto-generates conflict-free class timetables from teacher availability, room capacity and curriculum requirements.',
    problem:
      'Hand-built timetables kept producing clashes between teachers, rooms and subjects.',
    solution:
      'Constraint-based generator that runs on FastAPI and rewrites the schedule from real availability data.',
    result:
      'Conflict-free timetables produced automatically instead of manually.',
    tags: ['Python', 'FastAPI', 'React'],
    badge: 'AUTOMATION',
    liveUrl: '#',
    repoUrl: '#',
    shotClass: 'shot-4',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <rect x="12" y="12" width="36" height="36" rx="4" stroke="#fff" strokeWidth="1.5" />
        <path d="M12 22h36M12 32h36M12 42h36" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
        <path d="M22 12v36M32 12v36M42 12v36" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'API Automation Suite',
    description:
      'Custom API automation framework for testing, monitoring and orchestrating third-party integrations with automated retry logic and detailed logging.',
    problem:
      'Third-party integrations failed silently and burned engineering time to debug.',
    solution:
      'A framework that tests, monitors and orchestrates integrations with retries and structured logs.',
    result:
      'Transient failures recover on their own and incidents are traceable in the logs.',
    tags: ['Node.js', 'Python', 'REST APIs'],
    badge: 'API',
    liveUrl: '#',
    repoUrl: '#',
    shotClass: 'shot-5',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <path d="M20 20h20M20 30h20M20 40h20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="15" cy="20" r="3" stroke="#fff" strokeWidth="1.5" />
        <circle cx="45" cy="30" r="3" stroke="#fff" strokeWidth="1.5" />
        <circle cx="15" cy="40" r="3" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'IT Specialist Portfolio',
    description:
      'Professional portfolio showcasing IT infrastructure, network administration and security projects alongside technical consulting services.',
    problem:
      'An IT consultant had no single place to present credentials and client proof.',
    solution:
      'A responsive portfolio that organises projects, services and testimonials.',
    result:
      'A credible first impression that explains the offer at a glance.',
    tags: ['React', 'CSS', 'JavaScript'],
    badge: 'PORTFOLIO',
    liveUrl: '#',
    repoUrl: '#',
    shotClass: 'shot-6',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <rect x="15" y="15" width="30" height="22" rx="3" stroke="#fff" strokeWidth="1.5" />
        <path d="M25 37v6M35 37v6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 43h20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
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
  const [imgError, setImgError] = useState(false);

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
      {/* Screenshot (lazy) with graceful gradient fallback */}
      <div className={`project-shot ${project.shotClass}`}>
        {!imgError ? (
          <img
            src={`/projects/project-${project.id}.jpg`}
            alt={`${project.title} interface preview`}
            width={640}
            height={400}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <Fragment>
            <div className="lines" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="window" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-center opacity-90">
              {project.icon}
            </div>
          </Fragment>
        )}
        <span
          className="absolute top-3 right-3 text-[11px] font-bold tracking-[0.1em] px-2.5 py-1 rounded-full bg-white/90 text-ink"
        >
          {project.badge}
        </span>
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
