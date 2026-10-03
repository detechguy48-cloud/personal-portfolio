/**
 * Skills grid — shown as the right-hand column of the About section.
 * No self-reported percentage bars: just the stack, grouped by area.
 */
const SKILL_GROUPS = [
  {
    title: 'Frontend',
    blurb: 'Responsive, animated interfaces with a designer’s eye.',
    tags: ['React', 'Next.js', 'TypeScript', 'Vue / Nuxt', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    blurb: 'Services and endpoints designed to be read as well as run.',
    tags: ['Node.js / Express', 'Python / FastAPI', 'GraphQL', 'REST API design'],
  },
  {
    title: 'Data',
    blurb: 'Schemas and queries that stay predictable as the product grows.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase', 'Prisma'],
  },
  {
    title: 'Automation',
    blurb: 'Workflows that remove repetitive work from a team’s week.',
    tags: ['n8n', 'Make', 'Zapier', 'Webhooks & events'],
  },
  {
    title: 'Integrations',
    blurb: 'Third-party services wired in with retries and logging.',
    tags: ['Stripe', 'Twilio', 'SendGrid', 'Shopify'],
  },
  {
    title: 'Architecture',
    blurb: 'Systems built for reliability before scale becomes a fire drill.',
    tags: ['Microservices', 'Event-driven', 'Docker', 'System design'],
  },
];

export function SkillsGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {SKILL_GROUPS.map((group) => (
        <div key={group.title} className="skill-card">
          <h3
            className="font-extrabold text-ink m-0"
            style={{ fontSize: 16, letterSpacing: '-0.01em' }}
          >
            {group.title}
          </h3>
          <p className="text-mut text-[13.5px] leading-[1.55] mt-1.5 mb-3">
            {group.blurb}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.tags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
