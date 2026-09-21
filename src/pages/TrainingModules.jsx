import React, { useState } from 'react';
import {
  UserPlus,
  Award,
  ShieldCheck,
  BookOpen,
  Package,
  MessageCircle,
  HeartHandshake,
  PenTool,
} from 'lucide-react';
import CTA from '../components/CTA';

const modules = [
  {
    name: 'Induction & Onboarding',
    text: 'Facilitating the smooth integration of new employees into the organization through orientation and onboarding programs.',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop',
    Icon: UserPlus,
  },
  {
    name: 'Leadership Training',
    text: 'Developing and enhancing leadership skills and competencies through need based training programs.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    Icon: Award,
  },
  {
    name: 'Compliance',
    text: 'Ensuring adherence to legal and regulatory requirements through training on compliance policies and procedures.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
    Icon: ShieldCheck,
  },
  {
    name: 'Storytelling for Learning',
    text: 'A module teaching learners how to incorporate storytelling techniques into e-learning content to make it more engaging, relatable, and memorable.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop',
    Icon: BookOpen,
  },
  {
    name: 'Product Training',
    text: 'Educating employees or clients about the features, benefits, and usage of specific products or services.',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop',
    Icon: Package,
  },
  {
    name: 'Professional Soft Skills Training',
    text: 'Modules developing soft skills such as communication, leadership, teamwork, time management, and emotional intelligence, with interactive scenarios and exercises for skill-building. Enhancing skills and knowledge relevant to a specific profession or industry.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
    Icon: MessageCircle,
  },
  {
    name: 'Diversity, Equity & Inclusion',
    text: 'Fostering awareness and understanding of diversity, equity, and inclusion issues within the workplace.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    Icon: HeartHandshake,
  },
  {
    name: 'Content Authoring Tools',
    text: 'A module introducing learners to popular e-learning authoring tools such as Articulate Storyline, Adobe Captivate, Camtasia and Lectora, and providing hands-on training on how to use them to develop interactive courseware.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    Icon: PenTool,
  },
];

const TrainingModules = () => {
  const [active, setActive] = useState(0);
  const current = modules[active];
  const Icon = current.Icon;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-orange-50 to-slate-50 font-[family-name:var(--font-display)]">
      {/* Hero — keep as is */}
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
              Training <span className="text-orange-400">Modules</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Ready-to-deploy learning modules spanning onboarding, leadership,
              compliance, soft skills, DEI, and authoring tools — built for real
              workplace impact.
            </p>
            <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-orange-400 uppercase sm:text-[0.7rem]">
              Onboard <span className="mx-2 text-orange-400/50">•</span> Upskill{' '}
              <span className="mx-2 text-orange-400/50">•</span> Lead
            </p>
          </div>
        </div>
      </section>

      {/* Interactive modules — left headings / right image */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-orange-50 to-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-400/60" />
              <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                Our Training Modules
              </p>
            </div>
            <h2 className="text-2xl tracking-tight text-slate-900 sm:text-3xl">
              Select a module to explore
            </h2>
          </div>

          <div className="grid overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-orange-100 lg:grid-cols-[0.95fr_1.35fr] lg:items-stretch">
            {/* Left — headings */}
            <div
              className="flex flex-col border-b border-orange-100 lg:border-r lg:border-b-0"
              role="tablist"
              aria-label="Training modules"
            >
              {modules.map((item, index) => {
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

export default TrainingModules;
