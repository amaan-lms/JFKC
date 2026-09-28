import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

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

const FORM_ID = 'nIfs5MnI334Oy6we6R4X';
const FORM_SRC = `https://api.wonderengine.ai/widget/form/${FORM_ID}`;

const Contact = () => {
  useEffect(() => {
    const scriptId = 'wonderengine-form-embed';
    if (document.getElementById(scriptId)) return undefined;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://api.wonderengine.ai/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return undefined;
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-orange-50 to-slate-50 font-[family-name:var(--font-display)]">
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

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
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

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] bg-gradient-to-br from-white via-orange-50/70 to-slate-100 p-5 shadow-lg ring-1 ring-orange-100/80 sm:p-7 lg:p-8">
              <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                Send a message
              </p>
              <h3 className="mt-2 text-2xl tracking-tight text-slate-900">
                Tell us about your project
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Share a few details and we&apos;ll get back to you.
              </p>

              <div className="wonderengine-form mt-5 overflow-hidden rounded-2xl bg-white/80 ring-1 ring-orange-100">
                <iframe
                  src={FORM_SRC}
                  id={`inline-${FORM_ID}`}
                  title="JF Knowledge Centre contact form"
                  className="block w-full border-0"
                  style={{ minHeight: 560, height: 560 }}
                  data-layout="{id:'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact"
                  data-height="560"
                  data-layout-iframe-id={`inline-${FORM_ID}`}
                  data-form-id={FORM_ID}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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

          <div className="overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-slate-200/80">
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
