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
  children




}: {label: string;error?: string;children: React.ReactNode;}) {
  return (
    <div>
      <label className="font-mono text-[0.68rem] tracking-[0.1em] text-neo-muted block mb-2 uppercase">
        {label}
      </label>
      {children}
      {error &&
      <p className="font-mono text-[0.65rem] text-red-500 mt-1.5">{error}</p>
      }
    </div>);

}
function ContactInfoItem({
  color,
  label,
  value,
  icon





}: {color: string;label: string;value: string;icon: React.ReactNode;}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
        style={{
          border: `1px solid ${color}33`
        }}>
        
        {icon}
      </div>
      <div>
        <p className="font-mono text-[0.65rem] text-neo-muted tracking-[0.1em] uppercase">
          {label}
        </p>
        <p className="text-[0.9rem] text-neo-sub">{value}</p>
      </div>
    </div>);

}
export function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const handleChange = (field: keyof ContactFormData, value: string) => {
    const updated = {
      ...form,
      [field]: value
    };
    setForm(updated);
    setSubmitError('');
    if (touched[field]) {
      const newErrors = validateForm(updated);
      setErrors((prev) => ({
        ...prev,
        [field]: newErrors[field as keyof ContactFormErrors]
      }));
    }
  };
  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true
    }));
    const newErrors = validateForm(form);
    setErrors((prev) => ({
      ...prev,
      [field]: newErrors[field as keyof ContactFormErrors]
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      message: true
    });
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
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            'Project Type': form.projectType || 'Not specified',
            message: form.message.trim(),
            _subject: `New Portfolio Contact: ${form.name.trim()}`,
            _template: 'table'
          })
        }
      );
      if (!response.ok) throw new Error('Failed to send');
      setSuccess(true);
      setForm({
        name: '',
        email: '',
        projectType: '',
        message: ''
      });
      setTouched({});
      setErrors({});
      setTimeout(() => setSuccess(false), 6000);
    } catch (err) {
      setSubmitError(
        'Failed to send message. Please try emailing directly at detechguy48@gmail.com'
      );
    } finally {
      setSubmitting(false);
    }
  };
  const sectionLabel = '';
  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="reveal">
              <p className="section-num mb-3">{sectionLabel}</p>
              <h2
                className="font-display font-extrabold leading-[1.1] text-neo-text tracking-tight"
                style={{
                  fontSize: 'clamp(2rem,4vw,3rem)'
                }}>
                
                Have a project
                <br />
                in mind?
              </h2>
            </div>

            <div
              className="reveal mt-6"
              style={{
                transitionDelay: '0.15s'
              }}>
              
              <p className="text-slate-500 leading-7 text-[0.95rem] max-w-[400px]">
                I&apos;m currently available for freelance projects, API
                consulting, and automation work. Let&apos;s build something
                great together.
              </p>
            </div>

            <div
              className="reveal mt-10 space-y-5"
              style={{
                transitionDelay: '0.25s'
              }}>
              
              <ContactInfoItem
                color="#00d4ff"
                label="email"
                value="detechguy48@gmail.com"
                icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00d4ff"
                  strokeWidth="1.5">
                  
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                } />
              
              <ContactInfoItem
                color="#7c3aed"
                label="location"
                value="Lagos, Nigeria"
                icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="1.5">
                  
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                } />
              
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{
                    border: '1px solid rgba(16,185,129,0.2)'
                  }}>
                  
                  <div className="status-dot" />
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] text-neo-muted tracking-[0.1em] uppercase">
                    availability
                  </p>
                  <p className="text-[0.9rem] text-emerald-500">
                    Open to new projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="reveal"
            style={{
              transitionDelay: '0.2s'
            }}>
            
            <div className="glass-strong rounded p-8 lg:p-10">
              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  <FormField label="Name *" error={errors.name}>
                    <input
                      type="text"
                      className={`neo-input ${errors.name && touched.name ? 'error' : ''}`}
                      placeholder="John Doe"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')} />
                    
                  </FormField>

                  <FormField label="Email *" error={errors.email}>
                    <input
                      type="email"
                      className={`neo-input ${errors.email && touched.email ? 'error' : ''}`}
                      placeholder="john@company.com"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')} />
                    
                  </FormField>

                  <FormField label="Project Type">
                    <select
                      className="neo-input cursor-pointer"
                      style={{
                        appearance: 'none',
                        backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%2300d4ff' stroke-width='1.5' fill='none'/%3E%3C/svg%3E\")",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center'
                      }}
                      value={form.projectType}
                      onChange={(e) =>
                      handleChange('projectType', e.target.value)
                      }>
                      
                      <option
                        value=""
                        style={{
                          background: '#0d1117'
                        }}>
                        
                        Select a type...
                      </option>
                      <option
                        value="api"
                        style={{
                          background: '#0d1117'
                        }}>
                        
                        API Integration
                      </option>
                      <option
                        value="automation"
                        style={{
                          background: '#0d1117'
                        }}>
                        
                        Automation / Workflows
                      </option>
                      <option
                        value="fullstack"
                        style={{
                          background: '#0d1117'
                        }}>
                        
                        Full Stack Development
                      </option>
                      <option
                        value="consulting"
                        style={{
                          background: '#0d1117'
                        }}>
                        
                        Technical Consulting
                      </option>
                      <option
                        value="other"
                        style={{
                          background: '#0d1117'
                        }}>
                        
                        Other
                      </option>
                    </select>
                  </FormField>

                  <FormField label="Message *" error={errors.message}>
                    <textarea
                      className={`neo-input ${errors.message && touched.message ? 'error' : ''}`}
                      rows={5}
                      placeholder="Tell me about your project..."
                      style={{
                        resize: 'vertical',
                        minHeight: 120
                      }}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')} />
                    
                  </FormField>

                  <button
                    type="submit"
                    className="btn-primary w-full text-center"
                    disabled={submitting}>
                    
                    {submitting ? 'sending...' : 'send message \u2192'}
                  </button>

                  {submitError &&
                  <div
                    className="p-3.5 rounded-sm"
                    style={{
                      border: '1px solid rgba(239,68,68,0.3)',
                      background: 'rgba(239,68,68,0.05)'
                    }}>
                    
                      <p className="font-mono text-[0.75rem] text-red-400 tracking-wide">
                        {submitError}
                      </p>
                    </div>
                  }

                  {success &&
                  <div
                    className="p-3.5 rounded-sm"
                    style={{
                      border: '1px solid rgba(16,185,129,0.3)',
                      background: 'rgba(16,185,129,0.05)'
                    }}>
                    
                      <p className="font-mono text-[0.75rem] text-emerald-500 tracking-wide">
                        {'\u2713'} Message sent! I&apos;ll get back to you
                        within 24 hours.
                      </p>
                    </div>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>);

}