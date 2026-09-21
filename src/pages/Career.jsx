import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Lightbulb, Rocket } from 'lucide-react';
import CTA from '../components/CTA';

const highlights = [
  {
    title: 'Shape learning',
    text: 'Build experiences that change how people grow at work and in education.',
    Icon: Sparkles,
  },
  {
    title: 'Empower enterprises',
    text: 'Help organizations move forward on their digital transformation journey.',
    Icon: Rocket,
  },
  {
    title: 'Make real impact',
    text: 'Bring your skills and enthusiasm to solutions that empower learners.',
    Icon: Lightbulb,
  },
  {
    title: 'Join a creative team',
    text: 'Collaborate with designers, developers, and learning experts at JFKC.',
    Icon: Users,
  },
];

const Career = () => {
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
            Careers
          </p>
          <h1 className="max-w-3xl text-4xl tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12]">
            Shape the future of the{' '}
            <span className="text-orange-400">learning process</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Are you passionate about shaping the future of learning? Explore exciting
            career opportunities at JF Knowledge Centre.
          </p>
        </div>
      </section>

      {/* Main story */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="lg:col-span-6">
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
              Why join JFKC
            </p>
            <h2 className="text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
              Empower enterprises through the power of{' '}
              <span className="text-orange-500">knowledge</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
              <p>
                At JF Knowledge Centre, our endeavor is to empower enterprises in their
                digital transformation journey through the transformative power of
                knowledge.
              </p>
              <p>
                Explore exciting career opportunities where your skills and enthusiasm
                can make a real impact. Join us in creating innovative learning solutions
                that empower learners.
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative lg:col-span-6">
            <div
              className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-orange-200/50 sm:-bottom-5 sm:-right-5"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] max-h-[420px] overflow-hidden rounded-[2rem] ring-1 ring-orange-200/60">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1400&auto=format&fit=crop"
                alt="JFKC team collaborating on learning solutions"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative border-y border-slate-200/80 bg-white/60 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl tracking-tight text-slate-900 sm:text-4xl">
              What you&apos;ll be part of
            </h2>
            <p className="mt-3 text-base text-slate-500">
              A place where passion for learning meets real-world impact.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ title, text, Icon }) => (
              <div key={title}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default Career;
