import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react';

const contactDetails = [
  {
    label: 'Office',
    value: 'GF-41, Omaxe Square, Jasola District Centre, New Delhi-25',
    href: 'https://maps.google.com/?q=Omaxe+Square+Jasola+District+Centre+New+Delhi',
    Icon: MapPin,
  },
  {
    label: 'Telephone Number',
    value: '+91 9818238969',
    href: 'tel:+919818238969',
    Icon: Phone,
  },
  {
    label: 'Mail Address',
    value: 'info@jfknowledge.com',
    href: 'mailto:info@jfknowledge.com',
    Icon: Mail,
  },
];

const MAP_EMBED =
  'https://maps.google.com/maps?q=Omaxe+Square,+Jasola+District+Centre,+New+Delhi-25&z=16&output=embed';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:info@jfknowledge.com?subject=${encodeURIComponent(
      form.subject || 'Partnership inquiry'
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  const fieldClass =
    'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20';

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-orange-50 to-slate-50 font-[family-name:var(--font-display)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0c1220] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pb-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.2),transparent_55%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-bold tracking-[0.22em] text-orange-400 uppercase">
            Contact Us for Partnering
          </p>
          <h1 className="max-w-3xl text-4xl tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
            Powerful Collaborations in{' '}
            <span className="text-orange-400">Learning</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Whether you represent a corporate entity or an educational institution,
            we&apos;re eager to collaborate with you.
          </p>
        </div>
      </section>

      {/* Intro + details + form */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          {/* Left — copy + contact info */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl tracking-tight text-slate-900 sm:text-3xl">
              Let&apos;s build something together
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
              Explore how partnering with JF Knowledge Centre can enhance your training
              programs or educational offerings. For custom e-learning solutions for your
              organisation, let&apos;s work together to create tailored solutions that meet
              your unique needs. Contact us to discuss potential collaborations and take
              learning to new heights.
            </p>

            <ul className="mt-10 space-y-6">
              {contactDetails.map(({ label, value, href, Icon }) => (
                <li key={label} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.16em] text-orange-500 uppercase">
                      {label}
                    </p>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className="mt-1 block text-base font-medium text-slate-800 transition-colors hover:text-orange-500"
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-[2rem] bg-gradient-to-br from-white via-orange-50/60 to-slate-100 p-6 shadow-lg ring-1 ring-orange-100/80 sm:p-8 lg:p-10"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                Send a message
              </p>
              <h3 className="mt-2 text-2xl tracking-tight text-slate-900">
                Tell us about your project
              </h3>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </label>

                <label className="block sm:col-span-1">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="Email"
                    className={fieldClass}
                  />
                </label>

                <label className="block sm:col-span-1">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="Phone"
                    className={fieldClass}
                  />
                </label>

                <label className="block sm:col-span-1">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={onChange}
                    placeholder="Subject"
                    className={fieldClass}
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Your Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Your text here..."
                    className={`${fieldClass} resize-y min-h-[140px]`}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-orange-400 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Send message
                <ArrowRight className="h-4 w-4" />
              </button>

              {sent && (
                <p className="mt-4 text-sm font-medium text-slate-600">
                  Opening your email client — we&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                Find us
              </p>
              <h2 className="mt-2 text-2xl tracking-tight text-slate-900 sm:text-3xl">
                Our office on the map
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=Omaxe+Square+Jasola+District+Centre+New+Delhi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
            >
              Open in Google Maps
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] ring-1 ring-slate-200/80 shadow-lg">
            <iframe
              title="JF Knowledge Centre — Omaxe Square, Jasola, New Delhi"
              src={MAP_EMBED}
              className="h-[320px] w-full border-0 sm:h-[420px] lg:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
