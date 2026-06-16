import { useEffect, useState } from 'react';
import Icon, { type IconName } from './Icon';
import Reveal from './Reveal';
import { fetchServices, type ServiceItem } from '../lib/api';

// Served as a fallback if the API is unreachable, so the section always renders.
const FALLBACK: ServiceItem[] = [
  {
    id: 'strategy-design',
    title: 'Strategy Design',
    description:
      'We develop comprehensive technology adoption strategies that align emerging capabilities with mission objectives, regulatory realities, and measurable outcomes.',
    icon: 'compass',
  },
  {
    id: 'market-entry',
    title: 'Market Entry & Positioning',
    description:
      'We help you navigate competitive landscapes and capture market opportunities with positioning grounded in national security and commercial insight.',
    icon: 'target',
  },
  {
    id: 'revenue-acceleration',
    title: 'Revenue Acceleration',
    description:
      'We identify and execute high-impact growth initiatives, turning strategic advantage into durable, repeatable revenue.',
    icon: 'trending-up',
  },
];

const ICON_MAP: Record<string, IconName> = {
  compass: 'compass',
  target: 'target',
  'trending-up': 'trending-up',
};

export default function Services() {
  const [services, setServices] = useState<ServiceItem[]>(FALLBACK);

  useEffect(() => {
    let active = true;
    fetchServices()
      .then((data) => {
        if (active && Array.isArray(data) && data.length) setServices(data);
      })
      .catch(() => {
        /* keep fallback content */
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="services" className="bg-navy-light py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Services
            </p>
            <h2 className="section-heading">
              How we turn capability into advantage
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Three integrated practices, delivered as one strategy — from first
              principles to measurable outcomes.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/5 bg-navy p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card-hover">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-gradient text-navy">
                  <Icon
                    name={ICON_MAP[service.icon] ?? 'compass'}
                    className="h-7 w-7"
                  />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-gold transition-colors group-hover:text-gold-bright"
                >
                  Learn More
                  <Icon
                    name="arrow-right"
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
