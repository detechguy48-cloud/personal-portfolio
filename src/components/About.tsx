import React from 'react';
const INFO_CARDS = [
{
  title: '',
  description:
  'Designing microservices, REST & GraphQL APIs, and event-driven architectures that handle millions of requests reliably.',
  color: '#00d4ff',
  icon:
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00d4ff"
    strokeWidth="1.5">
    
        <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
      </svg>

},
{
  title: 'Automation Expert',
  description:
  'Building intelligent automations that connect your tools, eliminate repetitive tasks, and drive measurable business impact.',
  color: '#7c3aed',
  icon:
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#7c3aed"
    strokeWidth="1.5">
    
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>

},
{
  title: 'API Integration',
  description:
  'Seamlessly connecting Stripe, Twilio, Slack, Salesforce, and 50+ other platforms to create unified, data-driven workflows.',
  color: '#10b981',
  icon:
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#10b981"
    strokeWidth="1.5">
    
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12h8M12 8v8" />
      </svg>

}];

const FOCUS_AREAS = [
{
  label: 'API Integration & 3rd-party Service Orchestration',
  color: '#00d4ff'
},
{
  label: 'Workflow Automation (n8n, Make, Zapier, custom)',
  color: '#7c3aed'
},
{
  label: 'Scalable Backend Architecture & Database Design',
  color: '#10b981'
},
{
  label: 'Frontend Development with React, Next.js & Vue',
  color: '#00d4ff'
}];

export function About() {
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
    <section id="about" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="reveal">
              <p className="section-num mb-3">{sectionLabel}</p>
              <h2
                className="font-display font-extrabold leading-[1.1] text-neo-text tracking-tight"
                style={{
                  fontSize: 'clamp(2rem,4vw,3rem)'
                }}>
                
                Building systems that
                <br />
                <span className="gradient-text-2">actually scale.</span>
              </h2>
            </div>

            <div
              className="reveal mt-6 space-y-4"
              style={{
                transitionDelay: '0.15s'
              }}>
              
              <p className="text-slate-500 leading-7 text-[0.95rem]">
                I&apos;m a full-stack developer with a deep focus on backend
                architecture, API design, and workflow automation. I&apos;ve
                spent 5+ years turning complex business requirements into clean,
                maintainable systems.
              </p>
              <p className="text-slate-500 leading-7 text-[0.95rem]">
                My expertise spans from designing RESTful &amp; GraphQL APIs to
                orchestrating automated pipelines using tools like Zapier, Make,
                n8n, and custom-built microservices helping businesses save
                real time and money.
              </p>
            </div>

            <div
              className="reveal mt-8 space-y-3"
              style={{
                transitionDelay: '0.25s'
              }}>
              
              {FOCUS_AREAS.map((area) =>
              <div key={area.label} className="flex items-center gap-3">
                  <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: area.color
                  }} />
                
                  <span className="text-[0.9rem] text-neo-sub">
                    {area.label}
                  </span>
                </div>
              )}
            </div>

            <div
              className="reveal mt-10"
              style={{
                transitionDelay: '0.35s'
              }}>
              
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary inline-block">
                
                start a project →
              </button>
            </div>
          </div>

          <div
            className="reveal space-y-4"
            style={{
              transitionDelay: '0.2s'
            }}>
            
            {INFO_CARDS.map((card) =>
            <div key={card.title} className="glass project-card rounded p-6">
                <div className="flex items-start gap-4">
                  <div
                  className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${card.color}1a`,
                    border: `1px solid ${card.color}33`
                  }}>
                  
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-neo-text mb-1">
                      {card.title}
                    </h3>
                    <p className="text-[0.85rem] text-slate-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}