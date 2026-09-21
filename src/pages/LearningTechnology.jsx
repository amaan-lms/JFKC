import React, { useState } from 'react';
import {
  Compass,
  MonitorPlay,
  LayoutDashboard,
  Video,
  Zap,
  RefreshCw,
  PenTool,
} from 'lucide-react';
import CTA from '../components/CTA';

const topics = [
  {
    name: 'LXP Expertise',
    text: 'We analyze learning needs, advise on LXP selection, and design personalized pathways inside the platform. Content, social features, and admin training are integrated so learners and teams get more from every experience.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    Icon: Compass,
  },
  {
    name: 'LMS Expertise',
    text: 'We recommend and configure LMS platforms to match branding, roles, and reporting needs. Courses and assessments are uploaded, and administrators get hands-on training for enrollment, delivery, and tracking.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    Icon: MonitorPlay,
  },
  {
    name: 'Learning Portals',
    text: 'Custom learning portals built around your brand with clear navigation and easy access to training. Forums, progress tracking, and mobile-ready design keep learners engaged anytime, anywhere.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    Icon: LayoutDashboard,
  },
  {
    name: 'Interactive Video Framework',
    text: 'A framework for interactive videos with quizzes, hotspots, branching, and annotations. Built with authoring tools or custom development — plus analytics to measure engagement and impact.',
    image:
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop',
    Icon: Video,
  },
  {
    name: 'Speed Learning',
    text: 'Micro-learning modules that deliver focused content in short, digestible bursts. Rapid authoring, light gamification, and mobile delivery help teams learn on the go and improve faster.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    Icon: Zap,
  },
  {
    name: 'Technology Migration',
    text: 'We assess legacy e-learning assets and migrate courses, simulations, and interactions to modern tools. Content is tested across devices, refined for today’s standards, and supported with trainer and learner guidance.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    Icon: RefreshCw,
  },
  {
    name: 'Authoring Tools Experts',
    text: 'Expert guidance on choosing and using authoring tools for your budget and goals. We build courses, train your designers, and connect tools with LMS/LXP platforms for smoother delivery.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop',
    Icon: PenTool,
  },
];

const LearningTechnology = () => {
  const [active, setActive] = useState(0);
  const current = topics[active];
  const Icon = current.Icon;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-orange-50 to-slate-50 font-[family-name:var(--font-display)]">
      {/* Hero */}
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
              Learning <span className="text-orange-400">Technology</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              LXP, LMS, portals, interactive video, speed learning, migration, and
              authoring expertise — technology that makes learning scalable.
            </p>
            <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-orange-400 uppercase sm:text-[0.7rem]">
              Platforms <span className="mx-2 text-orange-400/50">•</span> Content{' '}
              <span className="mx-2 text-orange-400/50">•</span> Migration
            </p>
          </div>
        </div>
      </section>

      {/* Flipped layout: image left / headings right */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-orange-50 to-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-400/60" />
              <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                Learning Technology
              </p>
            </div>
            <h2 className="text-2xl tracking-tight text-slate-900 sm:text-3xl">
              Select a capability to explore
            </h2>
          </div>

          <div className="grid overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-orange-100 lg:grid-cols-[1.35fr_0.95fr] lg:items-stretch">
            {/* Left — image + content */}
            <div className="relative order-2 flex min-h-[360px] flex-col sm:min-h-[420px] lg:order-1 lg:min-h-full">
              <div className="relative flex-1 overflow-hidden">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {current.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                    {current.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Right — headings */}
            <div
              className="order-1 flex flex-col border-b border-orange-100 lg:order-2 lg:border-b-0 lg:border-l"
              role="tablist"
              aria-label="Learning technology topics"
            >
              {topics.map((item, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(index)}
                    className={`flex flex-1 items-center gap-3 border-b border-orange-50 px-5 py-4 text-left text-sm font-semibold transition-colors last:border-b-0 sm:px-6 sm:text-[0.95rem] ${
                      isActive
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-50 text-slate-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-orange-100 text-orange-600'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default LearningTechnology;
