import React, { useState, Fragment } from 'react';
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  badge: string;
  badgeColor: string;
  link1Label: string;
  link2Label: string;
  gradient: string;
  patternAngle: string;
  icon: React.ReactNode;
}
const PROJECTS: Project[] = [
{
  id: 1,
  title: 'Payment Gateway Hub',
  description:
  'Unified payment API integrating Stripe, Flutterwave & Paystack with automatic retry logic and webhook reconciliation.',
  tags: ['Node.js', 'Stripe', 'PostgreSQL'],
  badge: 'API',
  badgeColor: '#00d4ff',
  link1Label: 'live demo \u2192',
  link2Label: 'github',
  gradient:
  'linear-gradient(135deg,rgba(0,212,255,0.1) 0%,rgba(124,58,237,0.15) 100%)',
  patternAngle: '45deg',
  icon:
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle
      cx="30"
      cy="30"
      r="28"
      stroke="rgba(0,212,255,0.3)"
      strokeWidth="1" />
    
        <path
      d="M20 30h20M30 20v20"
      stroke="#00d4ff"
      strokeWidth="2"
      strokeLinecap="round" />
    
        <circle
      cx="30"
      cy="30"
      r="5"
      fill="rgba(0,212,255,0.3)"
      stroke="#00d4ff"
      strokeWidth="1" />
    
      </svg>

},
{
  id: 2,
  title: 'CRM Sync Automator',
  description:
  'Bidirectional sync between HubSpot, Salesforce, and Airtable with conflict resolution and audit logs. Saved 40hrs/week.',
  tags: ['n8n', 'HubSpot', 'Python'],
  badge: 'AUTOMATION',
  badgeColor: '#7c3aed',
  link1Label: 'case study \u2192',
  link2Label: 'github',
  gradient:
  'linear-gradient(135deg,rgba(124,58,237,0.1) 0%,rgba(16,185,129,0.15) 100%)',
  patternAngle: '-45deg',
  icon:
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect
      x="10"
      y="15"
      width="16"
      height="16"
      rx="2"
      stroke="#7c3aed"
      strokeWidth="1.5" />
    
        <rect
      x="34"
      y="15"
      width="16"
      height="16"
      rx="2"
      stroke="#7c3aed"
      strokeWidth="1.5" />
    
        <rect
      x="22"
      y="35"
      width="16"
      height="16"
      rx="2"
      stroke="#7c3aed"
      strokeWidth="1.5" />
    
        <path
      d="M26 23h8M30 31v4"
      stroke="#7c3aed"
      strokeWidth="1.5"
      strokeLinecap="round" />
    
        <path
      d="M18 31l12 4 12-4"
      stroke="rgba(124,58,237,0.4)"
      strokeWidth="1"
      strokeDasharray="2 2" />
    
      </svg>

},
{
  id: 3,
  title: 'SaaS Dashboard Platform',
  description:
  'Multi-tenant SaaS with role-based auth, real-time analytics, billing via Stripe, and full REST API with rate limiting.',
  tags: ['Next.js', 'FastAPI', 'Redis'],
  badge: 'FULL STACK',
  badgeColor: '#10b981',
  link1Label: 'live demo \u2192',
  link2Label: 'github',
  gradient:
  'linear-gradient(135deg,rgba(16,185,129,0.1) 0%,rgba(0,212,255,0.15) 100%)',
  patternAngle: '45deg',
  icon:
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M10 45V25l20-10 20 10v20" stroke="#10b981" strokeWidth="1.5" />
        <path d="M22 45V33h16v12" stroke="#10b981" strokeWidth="1.5" />
        <rect
      x="26"
      y="18"
      width="8"
      height="7"
      rx="1"
      stroke="rgba(16,185,129,0.5)"
      strokeWidth="1" />
    
      </svg>

},
{
  id: 4,
  title: 'Real-time Event Pipeline',
  description:
  'Scalable webhook pipeline processing 1M+ events/day with dead-letter queues, retry logic, and observability dashboards.',
  tags: ['Kafka', 'Node.js', 'Docker'],
  badge: 'WEBHOOK',
  badgeColor: '#00d4ff',
  link1Label: 'case study \u2192',
  link2Label: 'github',
  gradient:
  'linear-gradient(135deg,rgba(0,212,255,0.08) 0%,rgba(16,185,129,0.12) 100%)',
  patternAngle: '45deg',
  icon:
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path
      d="M30 10c-11 0-20 9-20 20s9 20 20 20 20-9 20-20"
      stroke="#00d4ff"
      strokeWidth="1.5"
      strokeLinecap="round" />
    
        <path
      d="M40 10l10 0 0 10"
      stroke="#00d4ff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round" />
    
        <path
      d="M30 20v10l6 6"
      stroke="rgba(0,212,255,0.6)"
      strokeWidth="1.5"
      strokeLinecap="round" />
    
      </svg>

},
{
  id: 5,
  title: 'Logistics Tracker App',
  description:
  'React Native app with real-time GPS tracking, push notifications via Firebase, and Google Maps API integration.',
  tags: ['React Native', 'Firebase', 'Maps API'],
  badge: 'MOBILE',
  badgeColor: '#7c3aed',
  link1Label: 'live demo \u2192',
  link2Label: 'github',
  gradient:
  'linear-gradient(135deg,rgba(124,58,237,0.08) 0%,rgba(0,212,255,0.12) 100%)',
  patternAngle: '-45deg',
  icon:
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect
      x="8"
      y="12"
      width="18"
      height="36"
      rx="2"
      stroke="#7c3aed"
      strokeWidth="1.5" />
    
        <rect
      x="34"
      y="20"
      width="18"
      height="28"
      rx="2"
      stroke="#7c3aed"
      strokeWidth="1.5" />
    
        <path
      d="M26 25l8-5M26 35l8-5"
      stroke="rgba(124,58,237,0.5)"
      strokeWidth="1"
      strokeDasharray="2 2" />
    
      </svg>

}];

function ProjectCard({ project }: {project: Project;}) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="project-card glass rounded overflow-hidden">
      <div
        className="relative flex items-center justify-center"
        style={{
          height: 180,
          background: project.gradient
        }}>
        
        {!imgError ?
        <img
          src={`/projects/project-${project.id}.jpg`}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)} /> :


        <Fragment>
            <div
            className="absolute inset-0"
            style={{
              background: `repeating-linear-gradient(${project.patternAngle},transparent,transparent 20px,rgba(0,212,255,0.03) 20px,rgba(0,212,255,0.03) 40px)`
            }} />
          
            {project.icon}
          </Fragment>
        }
        <div className="absolute top-3 right-3">
          <span
            className="font-mono text-[0.6rem] tracking-[0.1em] px-2 py-0.5 rounded-sm"
            style={{
              border: `1px solid ${project.badgeColor}4d`,
              color: project.badgeColor
            }}>
            
            {project.badge}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-[1.05rem] text-neo-text mb-2">
          {project.title}
        </h3>
        <p className="text-[0.83rem] text-slate-500 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) =>
          <span key={tag} className="tech-tag">
              {tag}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-mono text-[0.7rem] text-neo-accent tracking-wide">
            
            {project.link1Label}
          </a>
          <a
            href="#"
            className="font-mono text-[0.7rem] text-neo-muted tracking-wide">
            
            {project.link2Label}
          </a>
        </div>
      </div>
    </div>);

}
export function Projects() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el)
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  const sectionLabel = '// 04 \u2014 selected projects';
  return (
    <section id="projects" className="relative py-28 grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-num mb-3">{sectionLabel}</p>
            <h2
              className="font-display font-extrabold leading-[1.1] text-neo-text tracking-tight"
              style={{
                fontSize: 'clamp(2rem,4vw,3rem)'
              }}>
              
              Things I&apos;ve built.
            </h2>
          </div>
          <button
            onClick={() => scrollTo('contact')}
            className="font-mono text-[0.75rem] text-neo-accent tracking-wide whitespace-nowrap">
            
            view all projects {'\u2192'}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) =>
          <div
            key={project.id}
            className="reveal"
            style={{
              transitionDelay: `${(i + 1) * 0.1}s`
            }}>
            
              <ProjectCard project={project} />
            </div>
          )}

          <div
            className="reveal"
            style={{
              transitionDelay: '0.6s'
            }}>
            
            <div
              className="project-card glass rounded overflow-hidden"
              style={{
                borderStyle: 'dashed'
              }}>
              
              <div
                className="flex flex-col items-center justify-center gap-3 p-8"
                style={{
                  minHeight: 280
                }}>
                
                <div
                  className="w-[50px] h-[50px] rounded-full flex items-center justify-center"
                  style={{
                    border: '1px dashed rgba(255,255,255,0.1)'
                  }}>
                  
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="1.5">
                    
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
                <p className="font-mono text-[0.72rem] text-gray-700 tracking-[0.08em] text-center">
                  next project
                  <br />
                  coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}