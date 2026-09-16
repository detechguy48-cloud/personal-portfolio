import React, { useEffect, useRef } from 'react';
interface SkillBarProps {
  name: string;
  percent: number;
  color: string;
  gradientTo: string;
}
function SkillBar({ name, percent, color, gradientTo }: SkillBarProps) {
  const fillRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('animated'), 200);
          }
        });
      },
      {
        threshold: 0.5
      }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-mono text-[0.72rem] text-neo-sub tracking-wide">
          {name}
        </span>
        <span
          className="font-mono text-[0.72rem]"
          style={{
            color
          }}>
          
          {percent}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          ref={fillRef}
          className="skill-fill"
          style={{
            background: `linear-gradient(90deg,${color},${gradientTo})`,
            width: `${percent}%`
          }} />
        
      </div>
    </div>);

}
const SKILL_GROUPS = [
{
  title: 'Backend Development',
  color: '#00d4ff',
  delay: '0.1s',
  icon:
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00d4ff"
    strokeWidth="2">
    
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>,

  skills: [
  {
    name: 'Node.js / Express',
    percent: 95,
    color: '#00d4ff',
    gradientTo: '#7c3aed'
  },
  {
    name: 'Python / FastAPI',
    percent: 88,
    color: '#00d4ff',
    gradientTo: '#7c3aed'
  },
  {
    name: 'PostgreSQL / MongoDB',
    percent: 95,
    color: '#00d4ff',
    gradientTo: '#7c3aed'
  }]

},
{
  title: 'Frontend Development',
  color: '#7c3aed',
  delay: '0.2s',
  icon:
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#7c3aed"
    strokeWidth="2">
    
        <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z" />
      </svg>,

  skills: [
  {
    name: 'React / Next.js',
    percent: 92,
    color: '#7c3aed',
    gradientTo: '#a855f7'
  },
  {
    name: 'TypeScript',
    percent: 85,
    color: '#7c3aed',
    gradientTo: '#a855f7'
  },
  {
    name: 'Vue.js / Nuxt',
    percent: 80,
    color: '#7c3aed',
    gradientTo: '#a855f7'
  }]

},

{
  title: 'API & Automation',
  color: '#00d4ff',
  delay: '0.4s',
  icon:
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00d4ff"
    strokeWidth="2">
    
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>,

  skills: [
  {
    name: 'REST API Design',
    percent: 96,
    color: '#00d4ff',
    gradientTo: '#0ea5e9'
  },
  {
    name: 'n8n / Make / Zapier',
    percent: 94,
    color: '#00d4ff',
    gradientTo: '#0ea5e9'
  },
  {
    name: 'Webhooks & Events',
    percent: 91,
    color: '#00d4ff',
    gradientTo: '#0ea5e9'
  }]

},
{
  title: 'Databases & Caching',
  color: '#7c3aed',
  delay: '0.5s',
  icon:
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#7c3aed"
    strokeWidth="2">
    
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>,

  tags: [
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'MySQL',
  'Supabase',
  'Firebase',
  'Prisma ORM']

},
{
  title: 'Tools & Platforms',
  color: '#10b981',
  delay: '0.6s',
  icon:
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#10b981"
    strokeWidth="2">
    
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>,

  tags: [
  'Stripe',
  'Twilio',
  'Sendgrid',
  'Shopify']

}];

export function Skills() {
  const sectionLabel = '';
  return (
    <section
      id="skills"
      className="relative py-28"
      style={{
        background:
        'linear-gradient(180deg,transparent,rgba(0,212,255,0.02),transparent)'
      }}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <p className="section-num mb-3">{sectionLabel}</p>
          <h2
            className="font-display font-extrabold leading-[1.1] text-neo-text tracking-tight"
            style={{
              fontSize: 'clamp(2rem,4vw,3rem)'
            }}>
            
            The tech stack I ship with.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) =>
          <div
            key={group.title}
            className="reveal glass rounded p-7"
            style={{
              transitionDelay: group.delay
            }}>
            
              <div className="flex items-center gap-3 mb-6">
                <div
                className="w-8 h-8 rounded-sm flex items-center justify-center"
                style={{
                  background: `${group.color}1a`,
                  border: `1px solid ${group.color}33`
                }}>
                
                  {group.icon}
                </div>
                <h3 className="font-display font-bold text-[0.9rem] text-neo-text tracking-wide">
                  {group.title}
                </h3>
              </div>

              {group.skills ?
            <div className="space-y-5">
                  {group.skills.map((skill) =>
              <SkillBar key={skill.name} {...skill} />
              )}
                </div> :

            <div className="flex flex-wrap gap-2">
                  {group.tags?.map((tag) =>
              <span key={tag} className="tech-tag">
                      {tag}
                    </span>
              )}
                </div>
            }
            </div>
          )}
        </div>
      </div>
    </section>);

}