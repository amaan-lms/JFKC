import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import CTA from '../components/CTA';
import { services } from '../data/services';

const AUTO_MS = 4500;

const Services = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);
  const current = services[active];
  const Icon = current.Icon;

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % services.length);
      setTick((t) => t + 1);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused, active]);

  const select = (index) => {
    setActive(index);
    setTick((t) => t + 1);
  };

  const totalCount = String(services.length).padStart(2, '0');

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 font-[family-name:var(--font-display)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0c1220] pt-28 pb-12 sm:pt-32 sm:pb-14">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.2),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-bold tracking-[0.22em] text-orange-400 uppercase">
            Our Services
          </p>
          <h1 className="max-w-3xl text-4xl tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.12]">
            Unparalleled Support For{' '}
            <span className="text-orange-400">Learning Needs</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Pick a service — explore how JFKC designs, delivers, and scales learning
            for modern teams.
          </p>
        </div>
      </section>

      {/* Interactive spotlight */}
      <section
        className="relative overflow-hidden bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 pb-20 pt-10 sm:pb-24 sm:pt-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-200/30 blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-10">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-orange-400/60" />
              <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                Our Services
              </p>
              <span className="h-px w-10 bg-orange-400/60" />
            </div>
            <h2 className="text-2xl tracking-tight text-slate-900 sm:text-3xl pb-10">
              Built to support every learning need
            </h2>
          </div>

          {/* Spotlight stage */}
          <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
            {/* Content panel */}
            <div className="relative flex flex-col justify-center overflow-hidden rounded-[2rem] bg-white p-7 ring-1 ring-slate-200 sm:p-10">
              <span
                key={`num-${tick}`}
                className="pointer-events-none absolute -right-2 -top-6 select-none text-[7.5rem] font-bold leading-none text-slate-100 sm:text-[9rem]"
                aria-hidden="true"
              >
                {String(active + 1).padStart(2, '0')}
              </span>

              <div
                key={`copy-${tick}`}
                className="services-spotlight-in relative z-10"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                  Service {String(active + 1).padStart(2, '0')} / {totalCount}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {current.name}
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                  {current.text}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={`/services/${current.slug}`}
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
                  >
                    View details
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>

              {/* Progress bar */}
              <div className="relative z-10 mt-10 h-1 overflow-hidden rounded-full bg-slate-200">
                <div
                  key={`bar-${tick}-${paused}`}
                  className={`h-full rounded-full bg-orange-500 ${
                    paused ? 'w-full' : 'services-progress'
                  }`}
                />
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] ring-1 ring-slate-200 sm:min-h-[400px] lg:min-h-full">
              <img
                key={`img-${tick}`}
                src={current.image}
                alt={current.name}
                className="services-spotlight-in absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-slate-900/55 via-slate-900/15 to-transparent"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border border-white/25"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-4 -right-4 h-28 w-28 rounded-full border border-white/20"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Numbered index strip */}
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {services.map((item, index) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className={`min-w-[calc(50%-0.25rem)] flex-1 rounded-2xl px-2 py-3 text-center transition-all duration-300 sm:min-w-[calc(33.333%-0.5rem)] lg:min-w-[calc(20%-0.6rem)] ${
                  index === active
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-slate-500 ring-1 ring-slate-200 hover:text-orange-500'
                }`}
              >
                <span className="block text-[10px] font-bold tracking-wider opacity-70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mt-1 block truncate text-[11px] font-semibold sm:text-xs">
                  {item.short}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default Services;

