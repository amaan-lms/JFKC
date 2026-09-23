import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play, X } from 'lucide-react';
import CTA from '../components/CTA';
import { industries } from '../data/industries';

const Portfolio = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <main className="min-h-screen bg-slate-100 font-[family-name:var(--font-display)]">
      {/* Portfolio hero — shorter banner */}
      <section className="relative overflow-hidden bg-[#0c1220] pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pb-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.18),transparent_55%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              We Shape Learning{' '}
              <span className="text-orange-400">Across Industries</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Explore JFKC portfolio samples across BFSI, retail, FMCG, e-commerce,
              logistics, healthcare, aviation, manufacturing, energy, IT, education, and
              enterprise learning — built for real-world skills and measurable impact.
            </p>
            <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-orange-400 uppercase sm:text-[0.7rem]">
              Learning <span className="mx-2 text-orange-400/50">•</span> Industries{' '}
              <span className="mx-2 text-orange-400/50">•</span> Samples
            </p>
          </div>
        </div>
      </section>

      {/* Industry showcase — alternating wide rows */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-2">
          <div className="mb-14 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                Our Portfolio & Samples
              </p>
              <h2 className="text-3xl  tracking-tight text-slate-900 sm:text-5xl">
                {industries.length} industries.
                <span className="block text-slate-500">One learning standard.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Browse each sector below and watch a sample module tailored for that industry.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:gap-10">
            {industries.map((item, index) => {
              const reverse = index % 2 === 1;
              const num = String(index + 1).padStart(2, '0');

              return (
                <article
                  key={item.name}
                  className={`group grid overflow-hidden rounded-[1.75rem] bg-white shadow-[0_10px_40px_-16px_rgba(15,23,42,0.2)] ring-1 ring-slate-200/90 lg:grid-cols-2 ${
                    reverse ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  {/* Media */}
                  <div className="relative min-h-[220px] overflow-hidden sm:min-h-[260px] lg:min-h-[300px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-wider text-slate-800 backdrop-blur-sm">
                      {num}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveVideo(item)}
                      className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition-colors hover:bg-orange-400 sm:bottom-6 sm:left-6"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                        <Play className="h-3.5 w-3.5 fill-current" />
                      </span>
                      Watch Sample
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
                    <div className="mb-3 h-1 w-10 rounded-full bg-orange-500" />
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      {item.name}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
                      {item.text}
                    </p>
                    <Link
                      to={`/portfolio/${item.slug}`}
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-500"
                    >
                      View details &amp; sample
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeVideo.name} sample video`}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <p className="text-sm font-semibold text-white">{activeVideo.name} — Sample</p>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video w-full">
              <iframe
                title={`${activeVideo.name} sample`}
                src={`https://drive.google.com/file/d/${activeVideo.videoId}/preview`}
                className="h-full w-full"
                allow="autoplay"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;
