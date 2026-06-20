import Reveal from './Reveal';

const STATS = [
  { value: 'National Security', label: 'Expertise at the core' },
  { value: 'Tactical Strategy', label: 'Communications & positioning' },
  { value: 'Mission Solutions', label: 'Driven towards delivery' },
  { value: 'Emerging', label: 'Technology, responsibly adopted' },
];

export default function About() {
  return (
    <section id="about" className="bg-navy py-24 sm:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Who We Are
            </p>
            <h2 className="section-heading">
              A strategic partner for the technologies that define advantage
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              We help organizations responsibly adopt emerging technologies by
              combining{' '}
              <span className="font-semibold text-ink">
                national security expertise
              </span>
              , strategic communications, business development, and
              solutions-driven mission execution.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Our approach is integrated and outcome-focused. We translate
              complex capabilities into clear strategy, durable positioning, and
              measurable results — so leaders can move with confidence and
              conviction.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="rounded-xl border border-white/5 bg-navy-light p-6 shadow-card transition-all duration-300 hover:border-gold/40"
              >
                <div className="gold-text text-2xl font-bold">{stat.value}</div>
                <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
