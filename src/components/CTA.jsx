import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Mail, Phone } from 'lucide-react';

const CtaSection = () => {
  return (
    <section
      id="book-appointment"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 font-[family-name:var(--font-display)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.22),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-black/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Left section — copy */}
        <div className="text-white">
          <p className="mb-4 text-xs font-bold tracking-[0.22em] text-white/80 uppercase">
            Agile Learning Excellence
          </p>
          <h2 className="text-4xl leading-[1.12]  tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            Seeking agile learning solutions for your business?
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            Partner with{' '}
            <span className="font-semibold text-white">
              JF Knowledge Centre Pvt. Ltd.
            </span>{' '}
            — your cornerstone of learning excellence across modules, delivery,
            immersive experiences, and technology.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="tel:+919818238969"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" />
              +91 9818238969
            </a>
            <a
              href="mailto:info@jfknowledge.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              info@jfknowledge.com
            </a>
          </div>
        </div>

        {/* Right section — actions */}
        <div className="rounded-[2rem] bg-gradient-to-br from-white via-orange-50 to-slate-100 p-8 shadow-xl ring-1 ring-orange-100/80 sm:p-10">
          <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
            Next step
          </p>
          <h3 className="mt-3 text-2xl tracking-tight text-slate-900 sm:text-3xl">
            Let’s build learning that works
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Book an appointment or contact our team — we’ll help you choose the
            right path for your organization.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {/* <a
              href="#book-appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
            >
              <Calendar className="h-4 w-4" />
              Book An Appointment
              <ArrowRight className="h-4 w-4" />
            </a> */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 bg-white px-7 py-4 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
