import { useState } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Github,
  Linkedin,
  Mail,
  Send,
} from 'lucide-react';
import { profile } from '../data/profile.js';
import SectionHeading from './SectionHeading.jsx';

const initialForm = { name: '', email: '', message: '' };

function validateForm(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.message.trim()) {
    errors.message = 'Message is required.';
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus(null);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    setStatus(null);
    const firstInvalidField = Object.keys(validationErrors)[0];
    if (firstInvalidField) {
      document.getElementById(`contact-${firstInvalidField}`)?.focus();
      return;
    }

    if (!profile.email) {
      setStatus({
        type: 'error',
        message: 'Contact email is not configured yet. Please use one of the social links instead.',
      });
      return;
    }

    const subject = `Portfolio contact from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\nFrom: ${form.name.trim()} (${form.email.trim()})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({
      type: 'success',
      message: 'Your email app should open with a draft. Review and send the message there.',
    });
  };

  const copyEmail = async () => {
    if (!profile.email) return;
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setStatus({ type: 'error', message: 'Could not copy the email address. Check browser clipboard permissions.' });
    }
  };

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-purple-500 focus:outline-none ${
      errors[field] ? 'border-rose-500/70' : 'border-white/10'
    }`;

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's Build Something Together"
        description="Have an opportunity, question, or project in mind? Get in touch."
        icon={Send}
      />
      <div className="grid gap-8 lg:grid-cols-12">
        <aside className="flex flex-col justify-between rounded-2xl border border-border bg-panel p-6 sm:p-8 lg:col-span-5">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Contact Information</h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-300">
              Connect via email or social profiles to discuss opportunities, questions, or projects.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/5 p-4">
                <div className="min-w-0">
                  <p className="font-mono text-xs text-slate-400">Email Address</p>
                  <p className="break-all text-sm font-semibold text-white">
                    {profile.email || 'Not configured'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  disabled={!profile.email}
                  aria-label={copied ? 'Email address copied' : 'Copy email address'}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {copied ? <Check aria-hidden="true" className="h-4 w-4 text-emerald-400" /> : <Copy aria-hidden="true" className="h-4 w-4" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                <p className="font-mono text-xs text-slate-400">Location</p>
                <p className="text-sm font-semibold text-white">{profile.location}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3 border-t border-white/5 pt-6">
            {[
              { label: 'GitHub profile', href: profile.github, icon: Github },
              { label: 'LinkedIn profile', href: profile.linkedin, icon: Linkedin },
              { label: 'LeetCode profile', href: profile.leetcode, icon: Code2 },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-xl bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <Icon aria-hidden="true" className="h-5 w-5" />
              </a>
            ))}
            {profile.email && (
              <a href={`mailto:${profile.email}`} aria-label="Send email" className="rounded-xl bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white">
                <Mail aria-hidden="true" className="h-5 w-5" />
              </a>
            )}
          </div>
        </aside>

        <div className="rounded-2xl border border-border bg-panel p-6 sm:p-8 lg:col-span-7">
          <form noValidate onSubmit={submitForm} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-300">Your Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={updateField}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                className={fieldClass('name')}
              />
              {errors.name && <p id="contact-name-error" role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-rose-300"><AlertCircle aria-hidden="true" className="h-3.5 w-3.5" />{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-300">Your Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@domain.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className={fieldClass('email')}
              />
              {errors.email && <p id="contact-email-error" role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-rose-300"><AlertCircle aria-hidden="true" className="h-3.5 w-3.5" />{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-slate-300">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={updateField}
                placeholder="Write your message (at least 10 characters)"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                className={`${fieldClass('message')} resize-y`}
              />
              {errors.message && <p id="contact-message-error" role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-rose-300"><AlertCircle aria-hidden="true" className="h-3.5 w-3.5" />{errors.message}</p>}
            </div>
            {status && (
              <p
                role={status.type === 'error' ? 'alert' : 'status'}
                aria-live="polite"
                className={`flex items-start gap-2 text-sm ${status.type === 'error' ? 'text-rose-300' : 'text-emerald-300'}`}
              >
                {status.type === 'error'
                  ? <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                  : <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />}
                {status.message}
              </p>
            )}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 text-sm font-medium text-white shadow-lg shadow-purple-600/20 transition hover:from-blue-500 hover:to-purple-500"
            >
              <Send aria-hidden="true" className="h-4 w-4" />
              Prepare Email
            </button>
            <p className="text-xs text-slate-500">
              This form opens your email application; it does not send or store messages on a server.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
