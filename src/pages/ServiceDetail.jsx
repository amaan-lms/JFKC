import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { getServiceBySlug, services } from '../data/services';
import CTA from '../components/CTA';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-orange-50/40 to-slate-50 font-[family-name:var(--font-display)]">
      <section className="relative min-h-[58svh] overflow-hidden bg-[#0c1220] pt-28 sm:min-h-[62svh] sm:pt-32">
        <img
          src={service.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/75 to-slate-950/45"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.22),transparent_55%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(58svh-7rem)] max-w-7xl flex-col justify-end px-4 pb-12 sm:min-h-[calc(62svh-8rem)] sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <Link
            to="/services"
            className="mb-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-orange-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          <div className="mt-10 max-w-3xl">
            <h1 className="text-4xl tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
              {service.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {service.text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
              >
                Talk to us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              {/* <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/15"
              >
                Read the brief
              </a> */}
            </div>
          </div>
        </div>
      </section>

      <section
        id="overview"
        className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-orange-50 via-white to-orange-50/70 py-14 sm:py-16 lg:py-20"
      >
        <div
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-200/50 blur-[90px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-orange-100/80 blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="relative overflow-hidden rounded-[1.5rem] lg:col-span-5">
            <img
              src={service.image}
              alt={service.name}
              className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"
              aria-hidden="true"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold tracking-[0.16em] text-orange-500 uppercase">
              Overview
            </span>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-2xl tracking-tight text-slate-900 sm:text-3xl lg:text-[2.1rem] lg:leading-snug">
              How JFKC delivers{' '}
              <span className="text-orange-500">{service.short}</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              {service.overview[0]}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {service.outcomes.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-2 text-xs font-semibold text-slate-700 ring-1 ring-orange-100"
                >
                  <Check className="h-3.5 w-3.5 text-orange-500" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-12 max-w-7xl px-4 sm:mt-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-white/70 p-6 shadow-[0_24px_60px_-36px_rgba(234,88,12,0.4)] ring-1 ring-orange-100 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-10 bg-orange-400/70" />
                  <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                    What you get
                  </p>
                </div>
                <h2 className="max-w-xl text-2xl tracking-tight text-slate-900 sm:text-3xl">
                  The work inside this service
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-500">
                Four pieces we actually deliver — not a menu of extras.
              </p>
            </div>

            <div className="relative mt-8 grid gap-4 lg:grid-cols-4 lg:gap-0">
              <span
                className="pointer-events-none absolute top-[2.15rem] right-8 left-8 hidden h-px bg-orange-200 lg:block"
                aria-hidden="true"
              />
              {service.offerings.map((item, index) => (
                <article
                  key={item}
                  className={`group relative rounded-[1.5rem] p-5 transition-all duration-300 sm:p-6 lg:rounded-none lg:px-5 lg:py-2 lg:first:pl-0 lg:last:pr-0 ${
                    index === 0
                      ? 'bg-orange-500 text-white shadow-[0_16px_40px_-18px_rgba(234,88,12,0.7)] lg:rounded-[1.5rem] lg:px-6 lg:py-7'
                      : 'bg-orange-50/80 ring-1 ring-orange-100 hover:-translate-y-1 hover:bg-white lg:bg-transparent lg:ring-0 lg:hover:translate-y-0 lg:hover:bg-transparent'
                  }`}
                >
                  <span
                    className={`relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${
                      index === 0
                        ? 'bg-white text-orange-500'
                        : 'bg-orange-500 text-white lg:shadow-[0_0_0_6px_rgba(255,247,237,0.95)]'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p
                    className={`text-sm leading-relaxed sm:text-[0.95rem] ${
                      index === 0 ? 'text-white/90' : 'text-slate-600'
                    }`}
                  >
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0c1220] py-14 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.16),transparent_50%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.2em] text-orange-400 uppercase">
            How we work
          </p>
          <h2 className="mt-3 max-w-xl text-2xl tracking-tight text-white sm:text-3xl">
            A short path from brief to live
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {service.process.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.5rem] bg-white/5 p-6 ring-1 ring-white/10"
              >
                <p className="text-xs font-bold tracking-[0.18em] text-orange-400 uppercase">
                  Step {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-xl text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-white p-7 ring-1 ring-slate-200 sm:p-10">
            <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
              What changes
            </p>
            <h2 className="mt-3 text-2xl tracking-tight text-slate-900 sm:text-3xl">
              Outcomes you can hold the work to
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {service.outcomes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4 ring-1 ring-slate-100"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium leading-snug text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Start this service
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-slate-100 bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                More services
              </p>
              <h2 className="mt-2 text-2xl tracking-tight text-slate-900 sm:text-3xl">
                Explore other offerings
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
            >
              View all services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="industry-marquee relative w-full overflow-hidden">
          <div className="industry-marquee__track flex gap-4 px-4 sm:gap-5 sm:px-6">
            {[...others, ...others].map((item, index) => (
              <Link
                key={`${item.slug}-${index}`}
                to={`/services/${item.slug}`}
                className="group w-[240px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-16px_rgba(15,23,42,0.2)] ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:ring-orange-200 sm:w-[270px]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-4">
                  <p className="text-sm font-semibold text-slate-900 transition-colors group-hover:text-orange-500">
                    {item.name}
                  </p>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500">
                    {item.text}
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

export default ServiceDetail;
