import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { industries } from '../../data/industries';

const IndustryCard = ({ industry }) => (
  <Link
    to={`/portfolio/${industry.slug}`}
    className="group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-orange-100/80 shadow-[0_8px_28px_-12px_rgba(249,115,22,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-16px_rgba(249,115,22,0.35)] hover:ring-orange-200"
  >
    <div className="relative aspect-[5/4] overflow-hidden">
      <img
        src={industry.image}
        alt={industry.name}
        className="h-full w-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"
        aria-hidden="true"
      />

      {/* Default title on image */}
      <div className="absolute inset-x-0 bottom-0 p-3.5 transition-all duration-300 group-hover:opacity-0 sm:p-4">
        <p className="text-sm font-bold leading-snug text-white sm:text-[0.95rem]">
          {industry.name}
        </p>
      </div>

      {/* Hover content */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-orange-600/95 via-orange-500/80 to-orange-400/20 p-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-4">
        <p className="text-sm font-bold leading-snug text-white sm:text-[0.95rem]">
          {industry.name}
        </p>
        <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-white/90">
          {industry.short}
        </p>
        <span className="mt-2.5 inline-flex items-center gap-1 text-xs font-semibold text-white">
          View sample
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </div>
  </Link>
);

const WhatSetsUsApart = () => {
  const topRow = industries.slice(0, 5);
  const bottomRow = industries.slice(5, 10);

  return (
    <section className="relative overflow-hidden bg-orange-100 py-16 font-[family-name:var(--font-display)] text-gray-800 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.08),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-orange-200 sm:w-14" />
            <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
              Our Portfolio &amp; Samples
            </p>
            <span className="h-px w-10 bg-orange-200 sm:w-14" />
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            We Shape Learning Across{' '}
            <span className="text-orange-500">Industries</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Explore industry samples — hover for a quick look, click for full details and video.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-14 sm:space-y-5">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
            {topRow.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
            {bottomRow.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
