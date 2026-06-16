import Icon from './Icon';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-depth pt-24"
    >
      {/* Diagonal gold-yellow sweep from the bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-[640px] w-[640px] rounded-full bg-gold-gradient opacity-20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/2 bg-gradient-to-tl from-gold/10 to-transparent"
      />
      {/* Subtle geometric grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container-page relative z-10 py-20">
        <Reveal>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Chukuta Tactical Consulting Group™
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Designing for Advantage.
            <br />
            <span className="gold-text">Delivering for Outcomes.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg italic text-ink-muted sm:text-xl">
            Strategic Consulting for Emerging Technology Adoption
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-gold group">
              Schedule a Consultation
              <Icon
                name="arrow-right"
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-2 py-3 text-sm font-semibold text-ink transition-colors hover:text-gold"
            >
              Explore our services
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
