import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';
import { submitContact, type ContactPayload } from '../lib/api';

type FormValues = ContactPayload;

type Status =
  | { type: 'idle' }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string };

const fieldClass =
  'w-full rounded-lg border border-white/10 bg-navy px-4 py-3 text-ink placeholder:text-ink-muted/50 transition-colors focus:border-gold focus:outline-none';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { scheduleConsultation: false },
  });
  const [status, setStatus] = useState<Status>({ type: 'idle' });

  const onSubmit = async (values: FormValues) => {
    setStatus({ type: 'idle' });
    try {
      const res = await submitContact(values);
      setStatus({ type: 'success', message: res.message });
      reset();
    } catch (err) {
      setStatus({
        type: 'error',
        message:
          err instanceof Error
            ? err.message
            : 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="bg-navy-light py-24 sm:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Get In Touch
            </p>
            <h2 className="section-heading">Let's design your advantage</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Tell us about your mission and where you're headed. A member of our
              team will respond to schedule a confidential consultation.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <a
                href="mailto:erick@chukutatcg.com"
                className="flex items-center gap-3 text-ink-muted transition-colors hover:text-gold"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/30 text-gold">
                  @
                </span>
                erick@chukutatcg.com
              </a>
              <p className="flex items-center gap-3 text-ink-muted">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/30 text-gold">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                Engagements held in strict confidence
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-2xl border border-white/5 bg-navy p-7 shadow-card sm:p-8"
          >
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name <span className="text-gold">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  className={fieldClass}
                  aria-invalid={!!errors.name}
                  {...register('name', { required: 'Name is required.' })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-gold-bright">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={fieldClass}
                    aria-invalid={!!errors.email}
                    {...register('email', {
                      required: 'Email is required.',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email address.',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-gold-bright">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className={fieldClass}
                    {...register('phone')}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Company / Organization <span className="text-gold">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  className={fieldClass}
                  aria-invalid={!!errors.company}
                  {...register('company', {
                    required: 'Company or organization is required.',
                  })}
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-gold-bright">
                    {errors.company.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Message / Inquiry Details <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${fieldClass} resize-y`}
                  aria-invalid={!!errors.message}
                  {...register('message', {
                    required: 'Please share a few details.',
                    minLength: {
                      value: 10,
                      message: 'Please share a few more details (10+ characters).',
                    },
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-gold-bright">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-muted">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-navy accent-gold"
                  {...register('scheduleConsultation')}
                />
                I'd like to schedule a consultation
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>

              {status.type === 'success' && (
                <p
                  role="status"
                  className="rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold-bright"
                >
                  {status.message}
                </p>
              )}
              {status.type === 'error' && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-300"
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
