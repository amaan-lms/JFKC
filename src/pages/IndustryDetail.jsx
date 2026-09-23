import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Play } from 'lucide-react';
import { getIndustryBySlug, industries } from '../data/industries';
import CTA from '../components/CTA';

const IndustryDetail = () => {
  const { slug } = useParams();
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return <Navigate to="/portfolio" replace />;
  }

  const others = industries.filter((item) => item.slug !== industry.slug);

  return (
    <main className="min-h-screen bg-white font-[family-name:var(--font-display)]">
      {/* Hero with image backdrop */}
      <section className="relative min-h-[52svh] overflow-hidden bg-[#0c1220] pt-28 sm:min-h-[56svh] sm:pt-32">
        <img
          src={industry.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(52svh-7rem)] max-w-7xl flex-col justify-end px-4 pb-12 sm:min-h-[calc(56svh-8rem)] sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
          {/* <Link
            to="/portfolio"
            className="mb-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-orange-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link> */}

          <div className="mt-10 max-w-3xl">
            <p className="text-xs font-bold tracking-[0.22em] text-orange-400 uppercase">
              Industry Sample
            </p>
            <h1 className="mt-3 text-4xl tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              {industry.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {industry.short}
            </p>
          </div>
        </div>
      </section>

      {/* Overview + video */}
      <section className="relative py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Text column */}
            <div className="lg:col-span-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-10 bg-orange-400/70" />
                <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                  Overview
                </p>
              </div>
              <h2 className="text-2xl tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-snug">
                Learning built for{' '}
                <span className="text-orange-500">{industry.name}</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
                {industry.text}
              </p>
              {/* <a
                href="#sample-video"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
              >
                <Play className="h-4 w-4 fill-current" />
                Watch sample
              </a> */}
            </div>

            {/* Video column */}
            <div id="sample-video" className="scroll-mt-28 lg:col-span-7">
              <div className="overflow-hidden rounded-[1.5rem] bg-slate-900 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.45)] ring-1 ring-slate-800">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                      <Play className="h-3.5 w-3.5 fill-current" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Sample Walkthrough</p>
                      <p className="text-xs text-white/50">{industry.name}</p>
                    </div>
                  </div>
                </div>
                <div className="aspect-video w-full bg-black">
                  <iframe
                    title={`${industry.name} sample video`}
                    src={`https://drive.google.com/file/d/${industry.videoId}/preview`}
                    className="h-full w-full border-0"
                    allow="autoplay"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More industries — infinite autoscroll */}
      <section className="relative overflow-hidden border-t border-slate-100 bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                Explore more
              </p>
              <h2 className="mt-2 text-2xl tracking-tight text-slate-900 sm:text-3xl">
                Other industries
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
            >
              View all portfolio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="industry-marquee relative w-full overflow-hidden">
          <div className="industry-marquee__track flex gap-4 px-4 sm:gap-5 sm:px-6">
            {[...others, ...others].map((item, index) => (
              <Link
                key={`${item.slug}-${index}`}
                to={`/portfolio/${item.slug}`}
                className="group w-[240px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-16px_rgba(15,23,42,0.2)] ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:ring-orange-200 sm:w-[270px]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
                <div className="px-4 py-4">
                  <p className="text-sm font-semibold text-slate-900 transition-colors group-hover:text-orange-500">
                    {item.name}
                  </p>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500">
                    {item.short}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default IndustryDetail;
