import React, { useState } from 'react';
import { Eye, Target, Heart } from 'lucide-react';
import CTA from '../components/CTA';

const pillars = [
  {
    id: 'vision',
    label: 'Our Vision',
    Icon: Eye,
    text: 'Our vision is to actively elevate the learning process in an ever-evolving e-learning environment, making it universally accessible to the world.',
  },
  {
    id: 'mission',
    label: 'Our Mission',
    Icon: Target,
    text: 'Our mission is to become the go-to provider of accessible, impactful e-learning solutions tailored to meet evolving needs.',
  },
  {
    id: 'value',
    label: 'Our Value',
    Icon: Heart,
    text: 'Our unwavering commitment to keeping promises forms the foundation of lasting relationships built on trust, discipline, and integrity.',
  },
];

const stats = [
  { value: '105+', label: 'Team members' },
  { value: '15+', label: 'Winning awards' },
  { value: '10K+', label: 'Completed projects' },
  { value: '850K+', label: "Client's reviews" },
];

const About = () => {
  const [activePillar, setActivePillar] = useState(0);
  const current = pillars[activePillar];
  const Icon = current.Icon;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-orange-50 to-slate-50 font-[family-name:var(--font-display)]">
      {/* Hero */}
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
            About us
          </p>
          <h1 className="max-w-3xl text-4xl tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
            Choose The Best{' '}
            <span className="text-orange-400">E-Learning</span> Company
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Welcome to JF Knowledge Centre (JFKC), where creativity meets learning in
            the digital realm.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
              Why to choose us?
            </p>
            <h2 className="text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
              Creativity meets learning in the{' '}
              <span className="text-orange-500">digital realm</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
              <p>
                We craft engaging learning experiences and develop high-quality content
                tailored to empower learners worldwide.
              </p>
              <p>
                Our team of content developers, instructional designers, and multimedia
                experts builds immersive materials for corporate partners, institutions,
                and entrepreneurs.
              </p>
              <p>
                We leverage the latest technology and pedagogical best practices to design
                interactive modules, captivating videos, gamified quizzes, and more,
                ensuring that learners are fully engaged and motivated to succeed.
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div
              className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-orange-200/50 sm:-bottom-5 sm:-right-5"
              aria-hidden="true"
            />
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] ring-1 ring-orange-200/60">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                alt="JFKC team collaborating on e-learning solutions"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 backdrop-blur-sm sm:bottom-6 sm:left-6">
                <p className="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl">
                  12
                </p>
                <p className="mt-0.5 text-sm font-semibold text-slate-800">
                  years of experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Value */}
      <section className="relative border-y border-slate-200/80 bg-white/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Our Vision, Mission &amp; Value
            </h2>
            <p className="mt-3 text-base text-slate-500">
              The principles that guide how we build learning for modern teams.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="relative mb-8 grid grid-cols-3 rounded-full bg-slate-100 p-1 ring-1 ring-slate-200">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-1 rounded-full bg-orange-500 shadow-sm transition-all duration-300 ease-out"
                style={{
                  left: `calc(${(100 / 3) * activePillar}% + 0.25rem)`,
                  width: `calc(${100 / 3}% - 0.5rem)`,
                }}
              />
              {pillars.map((pillar, index) => (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillar(index)}
                  className={`relative z-10 rounded-full py-2.5 text-center text-xs font-semibold transition-colors duration-300 sm:text-sm ${
                    activePillar === index
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {pillar.label}
                </button>
              ))}
            </div>

            <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white sm:p-10">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                {current.label}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                {current.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Company / Who We Are */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                Our Company
              </p>
              <h2 className="max-w-xl text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Who We Are
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-600 sm:text-base">
              Content developers, instructional designers, and multimedia experts —
              building learning that sticks.
            </p>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="relative lg:col-span-5">
              <div className="aspect-[4/3] max-h-[380px] overflow-hidden rounded-[2rem] ring-1 ring-slate-200/80 sm:max-h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                  alt="JFKC professionals collaborating"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-5 text-base leading-relaxed text-slate-600 sm:text-[1.05rem] lg:col-span-7">
              <p className="text-lg font-semibold text-slate-900 sm:text-xl sm:leading-relaxed">
                Our experienced team of content developers, instructional designers and
                multimedia experts specializes in creating dynamic, interactive and
                immersive learning materials tailored to meet the unique needs of learners.
              </p>
              <p>
                We craft innovative e-learning solutions that resonate with diverse
                audiences and drive meaningful learning outcomes.
              </p>
              <p>
                We utilize the latest technology and pedagogical best practices to design
                interactive modules, captivating videos, gamified quizzes, and more,
                ensuring that learners are fully engaged and motivated to succeed.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-slate-200/80 pt-10 sm:grid-cols-4 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600 sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default About;
