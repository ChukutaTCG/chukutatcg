import Icon, { type IconName } from './Icon';
import Reveal from './Reveal';

interface Competency {
  title: string;
  description: string;
  icon: IconName;
}

const COMPETENCIES: Competency[] = [
  {
    title: 'National Security Expertise',
    description:
      'Deep fluency in the policy, mission, and operational realities that shape high-stakes decisions.',
    icon: 'shield',
  },
  {
    title: 'Strategic Communications',
    description:
      'Messaging and positioning that earns trust with C-suite, government, and technical audiences alike.',
    icon: 'broadcast',
  },
  {
    title: 'Business Development',
    description:
      'Pipeline strategy, partnerships, and capture support that convert relationships into results.',
    icon: 'briefcase',
  },
  {
    title: 'Mission Execution & Solutions Delivery',
    description:
      'Hands-on delivery that moves strategy from the whiteboard to the field.',
    icon: 'rocket',
  },
  {
    title: 'Emerging Technology Integration',
    description:
      'Responsible adoption of AI, autonomy, and frontier capabilities — aligned to mission and risk.',
    icon: 'chip',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-navy py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Expertise
            </p>
            <h2 className="section-heading">
              Cross-functional by design, integrated by default
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Our competencies don't operate in silos. We bring them together as
              a single, coordinated capability built around your mission.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMPETENCIES.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group flex h-full items-start gap-4 rounded-xl border border-white/5 bg-navy-light p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-card-hover">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold/30 text-gold transition-colors duration-300 group-hover:bg-gold-gradient group-hover:text-navy">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
