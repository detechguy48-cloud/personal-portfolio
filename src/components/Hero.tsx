import React, { useEffect, useState } from 'react';
export function Hero() {
  const [photoError, setPhotoError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      document.
      querySelectorAll('#home .reveal').
      forEach((el) => el.classList.add('visible'));
    }, 100);
  }, []);
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
    <section
      id="home"
      className="relative min-h-screen flex items-center grid-bg pt-16">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div
              className="reveal"
              style={{
                transitionDelay: '0.1s'
              }}>
              
            </div>

            <div
              className="reveal"
              style={{
                transitionDelay: '0.2s'
              }}>
              
              <p className="section-num mb-3">{sectionLabel}</p>
              <h1
                className="font-display font-extrabold leading-[1.05] tracking-tight text-neo-text"
                style={{
                  fontSize: 'clamp(2.8rem,6vw,5rem)'
                }}>
                
                Full Stack
                <br />
                <span className="gradient-text">Developer</span>
                <br />
                <span
                  className="text-neo-sub font-semibold"
                  style={{
                    fontSize: '0.6em'
                  }}>
                  
                  &amp; API Integration Expert
                </span>
              </h1>
            </div>

            <div
              className="reveal mt-6"
              style={{
                transitionDelay: '0.35s'
              }}>
              
              <p className="text-base leading-7 text-slate-500 max-w-[480px]">
                I architect scalable systems, integrate complex APIs, and
                automate workflows that save thousands of hours. Building
                bridges between ideas and production-ready code.
              </p>
            </div>

            <div
              className="reveal mt-8 flex flex-wrap gap-3"
              style={{
                transitionDelay: '0.45s'
              }}>
              
              {[
              'Node.js',
              'Python',
              'REST APIs',
              'GraphQL',
              'PostgreSQL',
              'Docker'].
              map((tag) =>
              <span key={tag} className="tech-tag">
                  {tag}
                </span>
              )}
            </div>

            <div
              className="reveal mt-10 flex items-center gap-4"
              style={{
                transitionDelay: '0.55s'
              }}>
              
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary">
                
                view my work
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-secondary">
                
                let&apos;s talk
              </button>
            </div>

            <div
              className="reveal mt-12 flex items-center gap-6"
              style={{
                transitionDelay: '0.65s'
              }}>
              
              <span className="font-mono text-[0.65rem] text-neo-muted tracking-[0.1em]">
                find me on
              </span>
              <div className="neo-divider flex-1 max-w-[40px]" />
              {[
                { name: 'GitHub', url: 'https://github.com/dashboard' },
                { name: 'GitHub 2', url: 'https://github.com/vic112' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/victor-gospel-leo?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
                { name: 'X', url: 'https://x.com/detechguyy' }
              ].map((social) =>
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.75rem] text-neo-muted hover:text-neo-accent transition-colors">
                
                  {social.name}
                </a>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="reveal"
              style={{
                transitionDelay: '0.3s'
              }}>
              
              <div className="photo-frame animate-float inline-block">
                <div
                  className="photo-scan"
                  style={{
                    width: 320,
                    height: 400,
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                  
                  {!photoError ?
                  <img
                    src="/portfolio.jpg"
                    alt="Profile photo"
                    className="w-full h-full object-cover rounded"
                    onError={() => setPhotoError(true)} /> :


                  <PhotoPlaceholder />
                  }
                  <div
                    className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                    style={{
                      background:
                      'linear-gradient(transparent,rgba(5,8,16,0.6))'
                    }} />
                  
                </div>

                <div
                  className="absolute -bottom-4 -left-4 w-[60px] h-[60px]"
                  style={{
                    borderBottom: '2px solid rgba(124,58,237,0.6)',
                    borderLeft: '2px solid rgba(124,58,237,0.6)'
                  }} />
                

                <div className="absolute bottom-3 left-3 right-3">
                  <div className="glass-strong p-2 px-3 rounded-sm flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-[0.85rem] text-neo-text">
                        Full Stack Dev
                      </p>
                      <p className="font-mono text-[0.62rem] text-neo-accent tracking-wide">
                        5+ yrs experience
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[0.6rem] text-neo-muted">
                        projects shipped
                      </p>
                      <p className="font-display font-bold text-lg text-neo-accent">
                        30+
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="reveal mt-20"
          style={{
            transitionDelay: '0.7s'
          }}>
          
          <div className="neo-divider mb-10" />
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
            {[
            {
              value: '30+',
              label: 'Projects',
              color: '#00d4ff'
            },
            {
              value: '5+',
              label: 'Years Experience',
              color: '#10b981'
            },
            {
              value: '10+',
              label: 'API Integrations',
              color: '#00d4ff'
            },
            {
              value: '100%',
              label: 'Problem Solving',
              color: '#7c3aed'
            },
            {
              value: '100%',
              label: 'Communication',
              color: '#10b981'
            }].
            map((stat) =>
            <div key={stat.label} className="text-center">
                <p
                className="font-display font-extrabold text-4xl"
                style={{
                  color: stat.color
                }}>
                
                  {stat.value}
                </p>
                <p className="font-mono text-[0.7rem] text-neo-muted tracking-[0.1em] uppercase">
                  {stat.label}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}
function PhotoPlaceholder() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4 rounded"
      style={{
        background:
        'linear-gradient(160deg,#0d1117 0%,#0a1929 50%,#0d1117 100%)'
      }}>
      
      <div className="relative">
        <div
          className="w-[120px] h-[120px] rounded-full flex items-center justify-center overflow-hidden"
          style={{
            background:
            'linear-gradient(135deg,rgba(0,212,255,0.15),rgba(124,58,237,0.15))',
            border: '2px solid rgba(0,212,255,0.3)'
          }}>
          
          <svg width="80" height="90" viewBox="0 0 80 90" fill="none">
            <circle
              cx="40"
              cy="28"
              r="20"
              fill="rgba(0,212,255,0.25)"
              stroke="rgba(0,212,255,0.4)"
              strokeWidth="1.5" />
            
            <path
              d="M5 88c0-19.33 15.67-35 35-35s35 15.67 35 35"
              fill="rgba(0,212,255,0.15)"
              stroke="rgba(0,212,255,0.3)"
              strokeWidth="1.5" />
            
          </svg>
        </div>
        <div
          className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(16,185,129,0.15)',
            border: '2px solid #10b981'
          }}>
          
          <div
            className="status-dot"
            style={{
              width: 6,
              height: 6
            }} />
          
        </div>
      </div>
      <div className="text-center">
        <p
          className="font-mono text-[0.65rem] tracking-[0.15em] uppercase"
          style={{
            color: '#00d4ff66'
          }}>
          
          
        </p>
        <p className="font-mono text-[0.58rem] text-neo-muted tracking-wide">
          
        </p>
      </div>
    </div>);

}