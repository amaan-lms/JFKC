import React, { useState } from 'react';
import {
  Gamepad2,
  Clapperboard,
  Video,
  BookOpen,
  GitBranch,
  Glasses,
  Scan,
  Sparkles,
} from 'lucide-react';
import CTA from '../components/CTA';

const topics = [
  {
    name: 'Gamification',
    text: 'Incorporating game elements such as rewards and challenges to increase engagement and participation in educational tasks. These elements are woven into learning courses to cultivate immersive environments that inspire learners and amplify their sense of accomplishment. JF Knowledge Centre integrate game mechanics like points, badges, levels, and leaderboards to acknowledge progress and foster involvement.',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    Icon: Gamepad2,
  },
  {
    name: 'Scenario Based Learning',
    text: 'Immersing learners in realistic situations to apply knowledge and skills through interactive simulations and role-playing exercises. JF Knowledge Centre creates engaging experiences where learners interact with virtual environments, such as simulated sales pitches in sales training courses, receiving feedback based on their performance.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    Icon: Clapperboard,
  },
  {
    name: 'Video Based Learning',
    text: 'Delivering educational content through visual mediums to effectively communicate information and concepts. JF Knowledge Centre content development company, produces 360-degree videos that allow learners to explore virtual environments from any angle. These immersive videos can transport learners to different locations, such as historical landmarks, scientific laboratories, or corporate offices, providing a rich and engaging learning experience.',
    image:
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop',
    Icon: Video,
  },
  {
    name: 'Story Based Learning',
    text: 'Learning through Stories: Captivating learners with narrative-driven methods, employing storytelling techniques to enhance comprehension and memory retention. Immersive learning incorporates interactive storytelling placing learners at the heart of the experience. JF Knowledge Centre crafts branching scenarios or choose-your-own-adventure narratives, enabling learners to make decisions and witness real-time consequences, thereby boosting engagement and retention.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop',
    Icon: BookOpen,
  },
  {
    name: 'Branching Simulations',
    text: 'Branching simulations provide learners with interactive training experiences where their decisions shape the course and outcome. Learners navigate real-world scenarios through decision points, with each choice leading to different paths and consequences. This allows them to apply critical thinking, problem-solving, and decision-making skills, explore different approaches, and understand the impact of their actions in a safe, controlled environment.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    Icon: GitBranch,
  },
  {
    name: 'VR Simulations',
    text: 'JF Knowledge Centre design VR simulations to immerse learners in lifelike scenarios tailored to their training requirements. For instance, a safety training program for industrial workers might feature a VR simulation of a hazardous workplace, enabling learners to practice safety protocols in a secure virtual environment. In subjects necessitating hands-on experience, virtual labs or simulations allow learners to conduct experiments virtually, facilitating exploration of concepts and principles without physical resources.',
    image:
      'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop',
    Icon: Glasses,
  },
  {
    name: 'AR Experience',
    text: "Integrating digital information or objects into real-world environments to enrich learning experiences. Augmented Reality technology overlays interactive elements onto the learner's physical surroundings. JF Knowledge Centre creates Augmented Reality content offering on-the-job guidance, like displaying step-by-step instructions on equipment or presenting contextual information in real-world scenarios.",
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop',
    Icon: Scan,
  },
  {
    name: 'Custom Learning',
    text: 'Custom learning and games involve creating personalised educational content and games that meet specific learning objectives and learner needs. These solutions may include interactive modules, quizzes, simulations, and gamified experiences designed with subject matter experts and instructional designers. By adapting content to different learning styles and skill levels, custom learning promotes engagement, motivation, personalised feedback, and more meaningful learning outcomes.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    Icon: Sparkles,
  },
];

const ImmersiveLearning = () => {
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
              Immersive <span className="text-orange-400">Learning</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Gamification, scenarios, VR, AR, and custom experiences — immersive
              formats that pull learners into the story and make skills stick.
            </p>
            <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-orange-400 uppercase sm:text-[0.7rem]">
              Engage <span className="mx-2 text-orange-400/50">•</span> Simulate{' '}
              <span className="mx-2 text-orange-400/50">•</span> Immerse
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
                Immersive Learning
              </p>
            </div>
            <h2 className="text-2xl tracking-tight text-slate-900 sm:text-3xl">
              Select an experience to explore
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
              aria-label="Immersive learning topics"
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

export default ImmersiveLearning;
