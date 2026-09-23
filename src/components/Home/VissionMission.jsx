import React from 'react';
import { Eye, Target, Heart } from 'lucide-react';

const pillars = [
  {
    title: 'Vision',
    icon: Eye,
    text: 'We strive to transform the learning landscape in this dynamic era — making knowledge and education universally accessible to all.',
    tone: 'orange',
    large: false,
    side: 'left',
  },
  {
    title: 'Values',
    icon: Heart,
    text: 'Our unwavering commitment to keeping promises forms the foundation of lasting relationships built on trust, discipline, and integrity.',
    tone: 'slate',
    large: true,
    side: 'center',
  },
  {
    title: 'Mission',
    icon: Target,
    text: 'Our mission is to become the go-to provider of accessible, impactful e-learning solutions tailored to meet evolving needs.',
    tone: 'orange',
    large: false,
    side: 'right',
  },
];

const VisionMissionValues = () => {
  return (
    <section
      id="vision-mission-values"
      className="relative overflow-hidden bg-slate-50 py-16 font-[family-name:var(--font-display)] sm:py-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-orange-500 uppercase">
            Vision, Mission & Values
          </p>
          <div className="mx-auto mt-3 flex h-1 w-24 overflow-hidden rounded-full">
            <span className="flex-1 bg-orange-500" />
            <span className="flex-1 bg-orange-600" />
            <span className="flex-1 bg-orange-400" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
            Our vision drives us forward, our mission guides our actions, and our values anchor us in integrity and
            purpose.
          </p>
        </div>
      </div>

      <div className="relative mt-12 w-full sm:mt-14">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
          {pillars.map(({ title, icon: Icon, text, tone, large, side }, index) => {
            const isOrange = tone === 'orange';

            return (
              <article
                key={title}
                className={`relative flex flex-col text-white shadow-sm ${
                  isOrange ? 'bg-orange-500' : 'z-10 bg-slate-900'
                } ${
                  large
                    ? 'p-8 sm:p-10 md:min-h-[340px] md:rounded-3xl lg:min-h-[360px]'
                    : `p-7 sm:p-8 md:min-h-[280px] ${
                        side === 'left'
                          ? 'rounded-3xl md:rounded-l-none md:rounded-r-3xl'
                          : side === 'right'
                            ? 'rounded-3xl md:rounded-r-none md:rounded-l-3xl'
                            : 'rounded-3xl'
                      }`
                }`}
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${
                    isOrange ? 'bg-white/20 text-white' : 'bg-orange-500/20 text-orange-400'
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <span
                    className={`text-[11px] font-bold tracking-widest uppercase ${
                      isOrange ? 'text-white/70' : 'text-orange-400'
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
                </div>

                <p className="text-sm leading-relaxed text-white/90">{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
