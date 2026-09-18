import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const CtaSection = () => {
  return (
    <section
      id="book-appointment"
      className="relative overflow-hidden bg-white py-14 font-[family-name:var(--font-display)] sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-400 via-orange-500 to-orange-400 px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          {/* Soft accents */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-black/10"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold tracking-[0.22em] text-white/80 uppercase">
                Agile Learning Excellence
              </p>
              <h2 className="text-3xl leading-tight font-bold tracking-[-0.03em] sm:text-4xl lg:text-[2.5rem]">
                Seeking agile learning solutions for your business?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                Partner with <span className="font-semibold text-white">JF Knowledge Centre Pvt. Ltd.</span> — your
                cornerstone of learning excellence.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#book-appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50"
              >
                <Calendar className="h-4 w-4" />
                Book An Appointment
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
