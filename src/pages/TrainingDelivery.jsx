import React, { useState } from 'react';
import {
  Video,
  MonitorPlay,
  Smartphone,
  Zap,
  Layers,
  UserRound,
  Presentation,
  ScreenShare,
} from 'lucide-react';
import CTA from '../components/CTA';

const deliveries = [
  {
    name: 'Interactive Videos',
    text: 'Engaging video-based content enhanced with interactive elements such as quizzes, polls, clickable hotspots, and branching scenarios. Interactive videos encourage active participation and can be delivered through web browsers or mobile devices.',
    image:
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop',
    Icon: Video,
  },
  {
    name: 'Online Courses',
    text: 'Developing comprehensive content for online courses delivered through LMS or LXP. Learners access course materials, complete assignments, and engage with interactive content at their own pace.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    Icon: MonitorPlay,
  },
  {
    name: 'Mobile Learning',
    text: 'Delivering content and training through mobile devices, allowing learners to access materials anytime, anywhere.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
    Icon: Smartphone,
  },
  {
    name: 'Micro-Learning',
    text: 'Dividing educational material into concise, specialized segments to impart precise knowledge swiftly and effectively. Bite-sized learning modules concentrate on distinct subjects or learning goals. Microlearning modules are usually disseminated in brief content bursts, making them perfect for rapid, on-the-fly learning accessible through mobile devices or desktop browsers.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    Icon: Zap,
  },
  {
    name: 'Blended Learning',
    text: 'Crafting holistic and adaptable training methodologies by integrating diverse learning modalities, including both digital and physical elements. Hybrid training initiatives fuse online education with traditional in-person teaching methods. This blended learning approach incorporates a spectrum of activities, including self-paced online modules, real-time virtual sessions, face-to-face workshops, and hands-on training opportunities.',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop',
    Icon: Layers,
  },
  {
    name: 'Personalized Learning',
    text: 'Customizing learning journeys to align with individual preferences, requirements, and unique learning styles, frequently harnessing technology for personalization. Interactive tutorials and self-paced learning modules empower learners to advance through material at their preferred pace. These self-paced tutorials are commonly accessible via web browsers and may incorporate multimedia components like videos, animations, and simulations to enhance engagement and comprehension.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    Icon: UserRound,
  },
  {
    name: 'Instructor Led Training (ILT)',
    text: 'This refers to a traditional form of training where an instructor facilitates learning in a classroom or training environment. It involves direct interaction between the instructor and the learners.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    Icon: Presentation,
  },
  {
    name: 'Virtual Instructor Led Training (VILT)',
    text: 'Creating and delivering interactive training sessions live in virtual environments, typically using video conferencing or online platforms. Designing modules for both live and pre-recorded webinars, as well as virtual classroom sessions conducted through various video conferencing tools.',
    image:
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1200&auto=format&fit=crop',
    Icon: ScreenShare,
  },
];

const TrainingDelivery = () => {
  const [active, setActive] = useState(0);
  const current = deliveries[active];
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
              Training <span className="text-orange-400">Delivery</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              From interactive videos and micro-learning to blended, personalized,
              ILT, and VILT — delivery formats built for how modern teams learn.
            </p>
            <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-orange-400 uppercase sm:text-[0.7rem]">
              Digital <span className="mx-2 text-orange-400/50">•</span> Live{' '}
              <span className="mx-2 text-orange-400/50">•</span> Hybrid
            </p>
          </div>
        </div>
      </section>

      {/* Interactive delivery modes */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-orange-50 to-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-400/60" />
              <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                Our Training Delivery
              </p>
            </div>
            <h2 className="text-2xl tracking-tight text-slate-900 sm:text-3xl">
              Select a delivery mode to explore
            </h2>
          </div>

          <div className="grid overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-orange-100 lg:grid-cols-[0.95fr_1.35fr] lg:items-stretch">
            {/* Left — headings */}
            <div
              className="flex flex-col border-b border-orange-100 lg:border-r lg:border-b-0"
              role="tablist"
              aria-label="Training delivery modes"
            >
              {deliveries.map((item, index) => {
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

            {/* Right — image + content */}
            <div className="relative flex min-h-[360px] flex-col sm:min-h-[420px] lg:min-h-full">
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
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default TrainingDelivery;
