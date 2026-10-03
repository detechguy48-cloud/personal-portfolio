const SOCIALS = [
  { name: 'GitHub', url: 'https://github.com/vic112' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/victor-gospel-leo',
  },
  { name: 'X', url: 'https://x.com/detechguyy' },
];

export function Footer() {
  const scrollToTop = () => {
    const el = document.getElementById('home');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer style={{ borderTop: '1px solid var(--line)' }} className="py-9">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-mut text-[14px] m-0">
          © {new Date().getFullYear()} DeTechGuy · Built with care
        </p>

        <div className="flex items-center gap-5">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-semibold text-mut hover:text-accent transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="text-[14px] font-semibold text-mut hover:text-accent transition-colors"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
