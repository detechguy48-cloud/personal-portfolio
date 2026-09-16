import React, { useState, Fragment } from 'react';
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  badge: string;
  badgeColor: string;
  // link1Label: string;
  // link2Label: string;
  gradient: string;
  patternAngle: string;
  icon: React.ReactNode;
}
const PROJECTS: Project[] = [
{
  id: 1,
  title: 'Online NewsFeed',
  description:
  'Modern responsive news platform delivering real-time global headlines with category filtering, dynamic article rendering, and fast-loading user experience.',
  tags: ['React', 'News API', 'CSS'],
  badge: 'API',
  badgeColor: '#00d4ff',
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
  title: 'Triple Bee Events',
  description:
  'Full-stack event management platform for planning, promoting, and managing events with real-time ticketing and attendee tracking.',
  tags: ['Next.js', 'Node.js', 'PostgreSQL'],
  badge: 'FULL STACK',
  badgeColor: '#10b981',
  gradient:
  'linear-gradient(135deg,rgba(16,185,129,0.1) 0%,rgba(0,212,255,0.15) 100%)',
  patternAngle: '45deg',
  icon:
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="15" y="18" width="30" height="25" rx="2" stroke="#10b981" strokeWidth="1.5" />
        <path d="M25 15v6M35 15v6" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 26h30" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
      </svg>
},
{
  id: 3,
  title: 'School Management System',
  description:
  'Comprehensive school administration platform with student enrollment, attendance tracking, grade management, and parent-teacher communication.',
  tags: ['React', 'Python', 'PostgreSQL'],
  badge: 'EDTECH',
  badgeColor: '#7c3aed',
  gradient:
  'linear-gradient(135deg,rgba(124,58,237,0.1) 0%,rgba(16,185,129,0.15) 100%)',
  patternAngle: '-45deg',
  icon:
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M30 10L10 22l20 12 20-12L30 10z" stroke="#7c3aed" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 22v16l20 12V38" stroke="#7c3aed" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M50 22v16l-20 12V38" stroke="rgba(124,58,237,0.5)" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
},
{
  id: 4,
  title: 'School Timetable Generator',
  description:
  'Intelligent timetable scheduling system that auto-generates conflict-free class schedules based on teacher availability, room capacity, and curriculum requirements.',
  tags: ['Python', 'FastAPI', 'React'],
  badge: 'AUTOMATION',
  badgeColor: '#00d4ff',
  gradient:
  'linear-gradient(135deg,rgba(0,212,255,0.08) 0%,rgba(124,58,237,0.12) 100%)',
  patternAngle: '45deg',
  icon:
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="12" y="12" width="36" height="36" rx="2" stroke="#00d4ff" strokeWidth="1.5" />
        <path d="M12 22h36M12 32h36M12 42h36" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
        <path d="M22 12v36M32 12v36M42 12v36" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
      </svg>
},
{
  id: 5,
  title: 'API Automation Suite',
  description:
  'Custom API automation framework for testing, monitoring, and orchestrating third-party API integrations with automated retry logic and detailed logging.',
  tags: ['Node.js', 'Python', 'REST APIs'],
  badge: 'API',
  badgeColor: '#10b981',
  gradient:
  'linear-gradient(135deg,rgba(16,185,129,0.08) 0%,rgba(0,212,255,0.12) 100%)',
  patternAngle: '45deg',
  icon:
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M20 20l20 0M20 30l20 0M20 40l20 0" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="15" cy="20" r="3" stroke="#10b981" strokeWidth="1.5" />
        <circle cx="45" cy="30" r="3" stroke="#10b981" strokeWidth="1.5" />
        <circle cx="15" cy="40" r="3" stroke="#10b981" strokeWidth="1.5" />
      </svg>
},
{
  id: 6,
  title: 'IT Specialist Portfolio',
  description:
  'Professional portfolio showcasing IT infrastructure, network administration, cybersecurity projects, and technical consulting services with client testimonials.',
  tags: ['React', 'CSS', 'JavaScript'],
  badge: 'PORTFOLIO',
  badgeColor: '#7c3aed',
  gradient:
  'linear-gradient(135deg,rgba(124,58,237,0.08) 0%,rgba(16,185,129,0.12) 100%)',
  patternAngle: '-45deg',
  icon:
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="15" y="15" width="30" height="22" rx="2" stroke="#7c3aed" strokeWidth="1.5" />
        <path d="M25 37v6M35 37v6" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 43h20" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
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
            
            {/* {project.link1Label} */}
          </a>
          <a
            href="#"
            className="font-mono text-[0.7rem] text-neo-muted tracking-wide">
            
            {/* {project.link2Label} */}
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
  const sectionLabel = '';
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