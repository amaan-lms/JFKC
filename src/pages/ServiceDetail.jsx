import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getServiceBySlug, services } from '../data/services';
import CTA from '../components/CTA';

const CapabilityFlow = ({ items }) => {
  const count = items.length;
  const width = 1200;
  const height = 180;
  const midY = height / 2;
  const points = items.map((_, index) => ((index + 0.5) / count) * width);

  const curves = points.slice(0, -1).map((start, index) => {
    const end = points[index + 1];
    const gap = (end - start) * 0.16;
    const lift = index % 2 === 0 ? midY - 62 : midY + 62;
    return `M ${start + gap} ${midY} Q ${(start + end) / 2} ${lift} ${end - gap} ${midY}`;
  });

  return (
    <>
      <ol className="mt-8 space-y-3 lg:hidden">
        {items.map((item, index) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-2xl bg-white/90 px-4 py-4 ring-1 ring-orange-200/80"
          >
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-sm leading-relaxed text-slate-700">{item}</span>
          </li>
        ))}
      </ol>

      <div className="relative mt-6 hidden lg:block">
        <div
          className="grid items-end gap-3"
          style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
        >
          {items.map((item, index) => (
            <p
              key={item}
              className={`min-h-[4.5rem] px-2 text-center text-sm leading-snug text-slate-700 ${
                index % 2 === 0 ? '' : 'invisible'
              }`}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="relative my-1 h-16">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="pointer-events-none absolute top-1/2 left-0 h-44 w-full -translate-y-1/2"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="capability-arrow"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 Z" fill="#f97316" />
              </marker>
            </defs>
            {curves.map((path) => (
              <path
                key={path}
                d={path}
                fill="none"
                stroke="#f97316"
                strokeWidth="3"
                strokeLinecap="round"
                markerEnd="url(#capability-arrow)"
              />
            ))}
          </svg>
          <ol
            className="relative z-10 grid h-full items-center"
            style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
          >
            {items.map((item, index) => (
              <li key={item} className="flex justify-center">
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(234,88,12,0.8)]">
                  <span className="pointer-events-none absolute -inset-2.5 rounded-full border border-dashed border-orange-300" />
                  {String(index + 1).padStart(2, '0')}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div
          className="grid items-start gap-3"
          style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
        >
          {items.map((item, index) => (
            <p
              key={item}
              className={`min-h-[4.5rem] px-2 text-center text-sm leading-snug text-slate-700 ${
                index % 2 === 1 ? '' : 'invisible'
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (!service) return undefined;
    const previous = document.title;
    document.title = service.pageTitle;
    return () => {
      document.title = previous;
    };
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <main className="min-h-screen bg-white font-[family-name:var(--font-display)] text-slate-800">
      <section className="relative overflow-hidden bg-[#0c1220] pt-28 pb-16 sm:pt-32 sm:pb-20">
        <img
          src={service.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1220] via-[#0c1220]/92 to-[#0c1220]/70" />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.18),transparent_50%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-orange-300"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>

          <p className="mt-10 text-xs font-semibold tracking-[0.22em] text-orange-400 uppercase">
            {service.name}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            {service.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {service.lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {service.ctas.map((label, index) => (
              <Link
                key={label}
                to="/contact"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  index === 0
                    ? 'bg-orange-500 text-white hover:bg-orange-400'
                    : 'text-white ring-1 ring-white/25 hover:bg-white/10'
                }`}
              >
                {label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-orange-50/40 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="grid overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_-36px_rgba(234,88,12,0.45)] ring-1 ring-orange-100 lg:grid-cols-2">
            <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-12 lg:px-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-orange-400" />
                <p className="text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase">
                  Overview
                </p>
              </div>
              <div className="space-y-5">
                {service.intro.map((paragraph, index) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className={
                      index === 0
                        ? 'text-lg leading-relaxed text-slate-800 sm:text-xl sm:leading-relaxed'
                        : 'text-base leading-relaxed text-slate-600'
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative min-h-[260px] sm:min-h-[320px]">
              <img
                src={service.image}
                alt={service.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-orange-100/80 to-orange-50">
        <div
          className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-orange-200/70 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-10 bottom-6 h-64 w-64 rounded-full bg-amber-100 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase">
            Key capabilities
          </p>
          <h2 className="mt-3 max-w-xl text-2xl tracking-tight text-slate-900 sm:text-3xl">
            What this service covers
          </h2>
          <CapabilityFlow items={service.highlights} />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {service.blocks.map((block) => {
            const highlighted = /team/i.test(block.title);

            if (highlighted) {
              return (
                <div
                  key={block.title}
                  className="my-10 rounded-[1.75rem] bg-gradient-to-br from-orange-500 via-orange-500 to-orange-400 px-6 py-8 text-white sm:px-8 sm:py-10"
                >
                  <h2 className="text-2xl tracking-tight sm:text-3xl">{block.title}</h2>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {block.items.map((item, index) => (
                      <li
                        key={item}
                        className="rounded-2xl bg-white px-4 py-5 text-slate-900 shadow-[0_12px_30px_-18px_rgba(124,45,18,0.45)]"
                      >
                        <span className="text-sm font-semibold tabular-nums text-orange-500">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <p className="mt-2 text-sm font-semibold leading-snug">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            return (
              <div
                key={block.title}
                className="grid gap-6 border-b border-slate-200 py-12 sm:py-14 lg:grid-cols-12 lg:gap-12"
              >
                <h2 className="text-xl tracking-tight text-slate-900 sm:text-2xl lg:col-span-4">
                  {block.title}
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-orange-400 pl-4 text-sm leading-relaxed text-slate-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#0c1220]">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-20">
          <p className="max-w-xl text-3xl tracking-tight text-white sm:text-4xl sm:leading-tight">
            {service.closing}
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            {service.ctas.map((label, index) => (
              <Link
                key={label}
                to="/contact"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  index === 0
                    ? 'bg-orange-500 text-white hover:bg-orange-400'
                    : 'text-white ring-1 ring-white/25 hover:bg-white/10'
                }`}
              >
                {label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase">
                More services
              </p>
              <h2 className="mt-2 text-2xl tracking-tight text-slate-900">
                Other ways we can help
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 sm:inline-flex"
            >
              View all
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="industry-marquee relative mt-8 w-full overflow-hidden pb-16">
          <div className="industry-marquee__track flex gap-5 px-4 sm:px-6">
            {[...others, ...others].map((item, index) => {
              const ItemIcon = item.Icon;
              return (
                <Link
                  key={`${item.slug}-${index}`}
                  to={`/services/${item.slug}`}
                  className="group relative h-[250px] w-[280px] shrink-0 overflow-hidden rounded-[1.4rem] ring-1 ring-orange-200/70 sm:w-[320px]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10" />
                  <div className="relative flex h-full flex-col justify-end p-5">
                    <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white">
                      <ItemIcon className="h-4 w-4" />
                    </span>
                    <p className="text-base font-semibold leading-snug text-white">
                      {item.name}
                    </p>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/75">
                      {item.text}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-orange-300">
                      View service
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
};

export default ServiceDetail;
