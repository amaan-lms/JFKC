import React from 'react';
import { ArrowRight } from 'lucide-react';

const aboutItems = [
  {
    id: 'who-we-are',
    title: 'Who We Are',
    content:
      'JF Knowledge Centre develops high-quality E-Learning modules and best-in-class Learning Management Systems.',
    link: '#who-we-are',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop',
    height: 'h-[400px] lg:h-[420px]',
  },
  {
    id: 'what-sets-us-apart',
    title: 'What Sets Us Apart',
    content:
      'We transform learning for our partners — driving success with innovative, learner-first approaches.',
    link: '#what-sets-us-apart',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop',
    height: 'h-[300px] lg:h-[340px]',
  },
  {
    id: 'why-choose-us',
    title: 'Why Choose Us',
    content:
      'Empower your e-learning journey on digital platforms with tailored modules built for real impact.',
    link: '#why-choose-us',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop',
    height: 'h-[300px] lg:h-[340px]',
  },
  {
    id: 'vision-mission-values',
    title: 'Vision & Values',
    content:
      'Our vision drives us forward, our mission guides our actions, and our values keep us grounded in purpose.',
    link: '#vision-mission-values',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop',
    height: 'h-[400px] lg:h-[420px]',
  },
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-[#fff7ed] to-orange-100/70 py-20 font-[family-name:var(--font-display)] text-gray-800">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-100/40 via-transparent to-white/50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]">
            Why <span className="text-orange-500">JFKC</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
            Four pillars that define how we design learning experiences for modern teams.
          </p>
        </div>

        {/* Staggered pillar cards — bottoms aligned */}
        <div className="flex flex-col items-stretch gap-5 md:flex-row md:items-end md:gap-4 lg:gap-5">
          {aboutItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className={`group relative flex w-full flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 pb-5 text-left shadow-lg transition-transform duration-500 hover:-translate-y-1.5 sm:p-7 sm:pb-5 md:flex-1 ${item.height}`}
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-[2px] transition-transform duration-700 group-hover:scale-[1.15]"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/30 via-transparent to-transparent opacity-80" />

              <div className="relative z-10">
                <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="max-w-[16rem] text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
                  {item.content}
                </p>
              </div>

              <div className="relative z-10 mt-4 flex justify-center">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-300 transition-all duration-300 group-hover:gap-2.5 group-hover:text-orange-200">
                  Know More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
