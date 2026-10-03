import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}
interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validateForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim() || !isValidEmail(data.email.trim()))
    errors.email = 'Please enter a valid email address.';
  if (data.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.';
  return errors;
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-[12px] font-bold tracking-[0.08em] uppercase text-mut block mb-2">
        {label}
      </label>
      {children}
      {error && <p className="text-[13px] text-red-600 mt-1.5 mb-0">{error}</p>}
    </div>
  );
}

function ContactInfoItem({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
}) {
  const content = (
    <>
      <span
        className="w-10 h-10 rounded-full flex items-center justify-center flex-none"
        style={{ border: '1px solid rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.1)' }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span>
        <span
          className="block text-[11px] font-bold tracking-[0.1em] uppercase"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          {label}
        </span>
        <span className="block text-[15px] font-semibold text-white">{value}</span>
      </span>
    </>
  );

  return (
    <div className="flex items-center gap-4">
      {href ? (
        <a
          href={href}
          className="flex items-center gap-4 rounded-xl p-1 -m-1 transition-opacity hover:opacity-80"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (field: keyof ContactFormData, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    setSubmitError('');
    if (touched[field]) {
      const newErrors = validateForm(updated);
      setErrors((prev) => ({
        ...prev,
        [field]: newErrors[field as keyof ContactFormErrors],
      }));
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validateForm(form);
    setErrors((prev) => ({
      ...prev,
      [field]: newErrors[field as keyof ContactFormErrors],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/detechguy48@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            'Project Type': form.projectType || 'Not specified',
            message: form.message.trim(),
            _subject: `New Portfolio Contact: ${form.name.trim()}`,
            _template: 'table',
          }),
        }
      );
      if (!response.ok) throw new Error('Failed to send');
      setSuccess(true);
      setForm({ name: '', email: '', projectType: '', message: '' });
      setTouched({});
      setErrors({});
      setTimeout(() => setSuccess(false), 6000);
    } catch {
      setSubmitError(
        'Failed to send message. Please try emailing directly at detechguy48@gmail.com'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          className="reveal relative overflow-hidden rounded-[32px]"
          style={{
            background: 'linear-gradient(135deg, #4F46E5 0%, #6D28D9 55%, #7C3AED 100%)',
          }}
        >
          {/* Decorative orbs (kept away from body copy) */}
          <div
            aria-hidden="true"
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 320,
              height: 320,
              background: 'var(--b)',
              filter: 'blur(80px)',
              opacity: 0.22,
              top: -140,
              right: -80,
            }}
          />
          <div
            aria-hidden="true"
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 240,
              height: 240,
              background: 'var(--c)',
              filter: 'blur(80px)',
              opacity: 0.22,
              bottom: -120,
              left: -60,
            }}
          />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-start p-7 sm:p-10 lg:p-14">
            {/* --------------------------------------------- Pitch column */}
            <div>
              <p
                className="text-[13px] font-bold tracking-[0.14em] uppercase m-0"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                Contact
              </p>
              <h2
                className="font-extrabold text-white mt-3 mb-4"
                style={{
                  fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                }}
              >
                Have a project in mind?
              </h2>
              <p
                className="max-w-[420px] mt-0 mb-8"
                style={{ color: 'rgba(255,255,255,0.88)', fontSize: 17, lineHeight: 1.6 }}
              >
                I&apos;m available for freelance projects, API consulting and
                automation work. Tell me what you&apos;re building and I&apos;ll
                get back to you within 24 hours.
              </p>

              <div className="space-y-5">
                <ContactInfoItem
                  label="Email"
                  value="detechguy48@gmail.com"
                  href="mailto:detechguy48@gmail.com"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  }
                />
                <ContactInfoItem
                  label="Location"
                  value="Lagos, Nigeria"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  }
                />
                <ContactInfoItem
                  label="Availability"
                  value="Open to new projects"
                  icon={
                    <span className="status-dot" style={{ width: 10, height: 10 }} />
                  }
                />
              </div>
            </div>

            {/* ---------------------------------------------- Form column */}
            <div className="form-card">
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-5">
                  <FormField label="Name *" error={errors.name}>
                    <input
                      type="text"
                      className={`neo-input ${errors.name && touched.name ? 'error' : ''}`}
                      placeholder="John Doe"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name && touched.name)}
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                    />
                  </FormField>

                  <FormField label="Email *" error={errors.email}>
                    <input
                      type="email"
                      className={`neo-input ${errors.email && touched.email ? 'error' : ''}`}
                      placeholder="john@company.com"
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email && touched.email)}
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                    />
                  </FormField>

                  <FormField label="Project type">
                    <select
                      className="neo-input cursor-pointer"
                      style={{
                        appearance: 'none',
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%234F46E5' stroke-width='1.5' fill='none'/%3E%3C/svg%3E\")",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                      }}
                      value={form.projectType}
                      onChange={(e) => handleChange('projectType', e.target.value)}
                    >
                      <option value="">Select a type…</option>
                      <option value="api">API Integration</option>
                      <option value="automation">Automation / Workflows</option>
                      <option value="fullstack">Full Stack Development</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </FormField>

                  <FormField label="Message *" error={errors.message}>
                    <textarea
                      className={`neo-input ${errors.message && touched.message ? 'error' : ''}`}
                      rows={5}
                      placeholder="Tell me about your project…"
                      style={{ resize: 'vertical', minHeight: 120 }}
                      aria-invalid={Boolean(errors.message && touched.message)}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                    />
                  </FormField>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                    style={{ justifyContent: 'center' }}
                    disabled={submitting}
                  >
                    {submitting ? 'sending…' : 'send message →'}
                  </button>

                  {submitError && (
                    <div
                      className="p-3.5 rounded-xl"
                      style={{
                        border: '1px solid rgba(220,38,38,0.3)',
                        background: 'rgba(220,38,38,0.05)',
                      }}
                      role="alert"
                    >
                      <p className="text-[13.5px] text-red-600 m-0">{submitError}</p>
                    </div>
                  )}

                  {success && (
                    <div
                      className="p-3.5 rounded-xl"
                      style={{
                        border: '1px solid rgba(22,163,74,0.3)',
                        background: 'rgba(22,163,74,0.06)',
                      }}
                      role="status"
                    >
                      <p className="text-[13.5px] text-green-700 m-0">
                        ✓ Message sent! I&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
