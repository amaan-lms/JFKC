import React from 'react';
import {
  MessageSquare,
  Sparkles,
  Zap,
  Play,
  Library,
  Globe2,
  Glasses,
  Gamepad2,
} from 'lucide-react';
import CTA from '../components/CTA';

const products = [
  {
    name: 'Consultation & Training',
    short: 'Consultation',
    text: 'Unlock the full potential of learning with expert guidance.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop',
    Icon: MessageSquare,
  },
  {
    name: 'Custom Learning',
    short: 'Custom',
    text: 'Tailor-made online experiences for your unique needs.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=900&auto=format&fit=crop',
    Icon: Sparkles,
  },
  {
    name: 'Micro-Learning',
    short: 'Micro',
    text: 'Bite-sized modules for on-the-go learning.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop',
    Icon: Zap,
  },
  {
    name: 'Video Practice',
    short: 'Video',
    text: 'Use videos for interactive skill development.',
    image:
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=900&auto=format&fit=crop',
    Icon: Play,
  },
  {
    name: 'Content Libraries',
    short: 'Libraries',
    text: 'Access a treasure trove of pre-built courses and modules on diverse topics.',
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=900&auto=format&fit=crop',
    Icon: Library,
  },
  {
    name: 'Content Localization',
    short: 'Localization',
    text: 'Reach a global audience by localizing e-learning content through the translation of text, audio, and visuals, all while honoring cultural nuances.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
    Icon: Globe2,
  },
  {
    name: 'VR & AR Simulations',
    short: 'VR & AR',
    text: 'Create immersive environments for practical training.',
    image:
      'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=900&auto=format&fit=crop',
    Icon: Glasses,
  },
  {
    name: 'Gamification',
    short: 'Gamification',
    text: 'Integrate game elements for engagement in learning.',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=900&auto=format&fit=crop',
    Icon: Gamepad2,
  },
];

const ProductCard = ({ item, index }) => {
  const Icon = item.Icon;
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className="group relative flex w-[300px] shrink-0 flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-orange-50 to-white ring-1 ring-orange-200/70 sm:w-[320px] lg:w-[340px]">
      <div className="relative">
        <div className="aspect-[16/11] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-orange-900/35 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-orange-500/95 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white">
          {num}
        </span>

        <div className="absolute -bottom-5 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-2 border-orange-300 bg-orange-50 text-orange-500 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-8 text-center">
        <h3 className="text-[0.95rem] font-bold tracking-tight text-slate-900 sm:text-base">
          {item.name}
        </h3>
        <p className="mt-2.5 flex-1 text-left text-sm leading-relaxed text-slate-600">
          {item.text}
        </p>
        <div className="mt-4 h-1 w-12 self-center rounded-full bg-orange-300/80 transition-all duration-300 group-hover:w-20 group-hover:bg-orange-400" />
      </div>
    </article>
  );
};

const Products = () => {
  const loop = [...products, ...products];

  return (
    <main className="min-h-screen bg-white font-[family-name:var(--font-display)]">
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
              Innovative Learning{' '}
              <span className="text-orange-400">Products</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              From custom learning and micro-modules to VR simulations and
              gamification — products built to engage, scale, and deliver results.
            </p>
            <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-orange-400 uppercase sm:text-[0.7rem]">
              Design <span className="mx-2 text-orange-400/50">•</span> Content{' '}
              <span className="mx-2 text-orange-400/50">•</span> Immersion
            </p>
          </div>
        </div>
      </section>

      {/* Products marquee */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="relative z-10 mx-auto mb-8 max-w-7xl px-4 text-center sm:mb-10 sm:px-6 lg:px-8">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-orange-400/60" />
            <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
              Our Products
            </p>
            <span className="h-px w-10 bg-orange-400/60" />
          </div>
          <h2 className="text-2xl tracking-tight text-slate-900 sm:text-3xl">
            Innovative Learning Products
          </h2>

          {/* All product names — compact */}
          <div className="mt-6 flex flex-nowrap items-center justify-start gap-1 overflow-x-auto pb-1 sm:mt-7 sm:justify-center sm:gap-1.5">
            {products.map((item, index) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.name}
                  className="inline-flex shrink-0 items-center gap-1 rounded-full border border-orange-200/80 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-700 sm:px-2 sm:py-1 sm:text-[11px]"
                >
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-orange-500 text-[7px] font-bold text-white sm:h-4 sm:w-4 sm:text-[8px]">
                    {index + 1}
                  </span>
                  <Icon className="h-2.5 w-2.5 text-orange-500" />
                  {item.short}
                </div>
              );
            })}
          </div>
        </div>

        <div className="products-marquee relative z-10 w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />

          <div className="products-marquee__track flex w-max gap-5 px-4 sm:gap-6 sm:px-6">
            {loop.map((item, index) => (
              <ProductCard
                key={`${item.name}-${index}`}
                item={item}
                index={index % products.length}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default Products;
