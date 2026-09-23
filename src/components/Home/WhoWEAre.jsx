import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, MonitorPlay, Sparkles } from 'lucide-react';

const highlights = [
  { label: 'E-Learning Modules', Icon: BookOpen },
  { label: 'Athena LMS', Icon: MonitorPlay },
  { label: 'Immersive Design', Icon: Sparkles },
];

const WhoWeAre = () => {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-orange-50 to-slate-50 py-16 font-[family-name:var(--font-display)] text-gray-800 sm:py-20 lg:py-24"
    >
      {/* Soft atmosphere */}
      <div
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-slate-200/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-400/70" />
              <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                Who We Are
              </p>
            </div>
            <h2 className="max-w-xl text-3xl  tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              The people and craft behind{' '}
              <span className="text-orange-500">smarter learning</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-600 sm:text-base">
            Content developers, instructional designers, and multimedia experts —
            building learning that sticks.
          </p>
        </div>

        {/* Unique stage: image + overlapping story panel */}
        <div className="relative grid items-stretch gap-6 lg:grid-cols-12 lg:gap-0">
          {/* Image column */}
          <div className="relative lg:col-span-7 lg:pr-8">
            <div
              className="pointer-events-none absolute -bottom-4 -left-4 h-full w-full rounded-[2rem] bg-orange-200/50 sm:-bottom-5 sm:-left-5"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] ring-1 ring-orange-200/60 sm:aspect-[5/4]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                alt="JFKC team collaborating on e-learning and LMS solutions"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Floating brand chip on image */}
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-4 py-3 backdrop-blur-sm sm:bottom-6 sm:left-6">
                <p className="text-xs font-bold tracking-[0.16em] text-orange-500 uppercase">
                  Since day one
                </p>
                <p className="mt-0.5 text-sm font-semibold text-slate-900">
                  Knowledge that performs
                </p>
              </div>
            </div>
          </div>

          {/* Story panel — overlaps on desktop */}
          <div className="relative z-10 flex lg:col-span-5 lg:-ml-10 lg:items-center">
            <div className="w-full rounded-[1.75rem] bg-white p-6 ring-1 ring-slate-200/80 sm:p-8 lg:p-9">
              <p className="text-4xl font-bold tracking-[-0.04em] text-orange-500 sm:text-5xl">
                JFKC
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                E-Learning · Athena LMS
              </p>

              <p className="mt-6 text-base font-semibold leading-relaxed text-slate-900 sm:text-lg">
                We build high-quality e-learning modules and power them with{' '}
                <span className="text-orange-500">Athena</span> — our AI-powered LMS.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
                Athena helps teams deliver courses, track progress, and manage training at
                scale. Explore it at{' '}
                <a
                  href="https://lmsathena.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-orange-500 underline-offset-2 transition-colors hover:text-orange-600 hover:underline"
                >
                  lmsathena.com
                </a>
                .
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {highlights.map(({ label, Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700 ring-1 ring-orange-200/80"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
                >
                  Let&apos;s Collaborate
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://lmsathena.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-6 py-3.5 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-100"
                >
                  Visit Athena LMS
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
