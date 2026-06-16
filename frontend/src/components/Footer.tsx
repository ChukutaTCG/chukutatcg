import Logo from './Logo';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-navy">
      {/* Subtle gold accent line above the footer */}
      <div className="h-px w-full bg-gold-gradient opacity-60" />
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo size={34} />
            <p className="mt-4 text-sm italic text-gold">
              Designing for Advantage. Delivering for Outcomes.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Strategic consulting for the responsible adoption of emerging
              technologies.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-ink-muted">
            © 2026 Chukuta Tactical Consulting Group™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
