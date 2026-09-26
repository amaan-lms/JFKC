import React from 'react';
import {
  Globe,
  MonitorPlay,
  BookOpen,
  AppWindow,
  Clapperboard,
  Bot,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import CTA from '../components/CTA';

const products = [
  {
    name: 'Website Services',
    short: 'Website Services',
    text: 'Custom website design and development for brands that need a sharp, modern digital presence.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop',
    Icon: Globe,
    href: '/contact',
    cta: 'Get in touch',
    external: false,
  },
  {
    name: 'Athena LMS',
    short: 'Athena LMS',
    text: 'AI-powered learning management and experience platform for courses, progress, and training at scale.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
    Icon: MonitorPlay,
    href: 'https://lmsathena.com/',
    cta: 'Visit Athena LMS',
    external: true,
  },
  {
    name: 'E-book Athena',
    short: 'E-book',
    text: 'Transform PDFs into interactive digital booklets learners can explore on any device.',
    image:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=900&auto=format&fit=crop',
    Icon: BookOpen,
    href: 'https://ebook.lmsathena.com/',
    cta: 'Open E-book Athena',
    external: true,
  },
  {
    name: 'WebStudio',
    short: 'WebStudio',
    text: 'Website builder for creating polished, on-brand sites without a long development cycle.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=900&auto=format&fit=crop',
    Icon: AppWindow,
    href: 'https://webstudio.lmsathena.com/',
    cta: 'Open WebStudio',
    external: true,
  },
  {
    name: 'Virtual Studio',
    short: 'Virtual Studio',
    text: 'Create AI-powered videos that speak your language. Transform text into engaging video content with lifelike AI avatars — professional videos in minutes, not hours.',
    image:
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=900&auto=format&fit=crop',
    Icon: Clapperboard,
    href: 'https://virtualstudio.lmsathena.com/',
    cta: 'Open Virtual Studio',
    external: true,
  },
  {
    name: 'AI Chatbot',
    short: 'AI Chatbot',
    text: 'Human-like AI video agents for support — coming soon.',
    image:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=900&auto=format&fit=crop',
    Icon: Bot,
    href: null,
    cta: 'Coming soon',
    external: false,
  },
  {
    name: 'AI Course Creator',
    short: 'Course Creator',
    text: 'Design complete, interaction-rich courses in minutes with AI-assisted authoring.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop',
    Icon: Sparkles,
    href: 'https://lmsathena.com/signup',
    cta: 'Start creating',
    external: true,
  },
];

const ProductCard = ({ item, index }) => {
  const Icon = item.Icon;
  const num = String(index + 1).padStart(2, '0');
  const linkClass =
    'mt-4 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors';

  const cta = item.href ? (
    <a
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noreferrer' : undefined}
      className={`${linkClass} bg-orange-500 text-white hover:bg-orange-400`}
    >
      {item.cta}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  ) : (
    <span className={`${linkClass} cursor-default bg-slate-100 text-slate-500 ring-1 ring-slate-200`}>
      {item.cta}
    </span>
  );

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

        {!item.href && (
          <span className="absolute right-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-wider text-orange-600">
            Coming soon
          </span>
        )}

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
        {cta}
      </div>
    </article>
  );
};

const Products = () => {
  const loop = [...products, ...products];

  return (
    <main className="min-h-screen bg-white font-[family-name:var(--font-display)]">
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
              Athena Learning{' '}
              <span className="text-orange-400">Products</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              LMS, e-books, studios, and AI tools — built to create, deliver, and
              scale learning.
            </p>
            <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-orange-400 uppercase sm:text-[0.7rem]">
              LMS <span className="mx-2 text-orange-400/50">•</span> Studio{' '}
              <span className="mx-2 text-orange-400/50">•</span> AI
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-orange-50 to-slate-100 py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-200/35 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto mb-8 max-w-7xl px-4 text-center sm:mb-10 sm:px-6 lg:px-8">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-orange-400/60" />
            <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
              Our Products
            </p>
            <span className="h-px w-10 bg-orange-400/60" />
          </div>
          <h2 className="text-2xl tracking-tight text-slate-900 sm:text-3xl">
            Platforms that power modern learning
          </h2>

          <div className="mt-6 flex flex-nowrap items-center justify-start gap-1 overflow-x-auto pb-1 sm:mt-7 sm:justify-center sm:gap-1.5">
            {products.map((item, index) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.name}
                  className="inline-flex shrink-0 items-center gap-1 rounded-full border border-orange-200/80 bg-white/90 px-1.5 py-0.5 text-[10px] font-semibold text-slate-700 sm:px-2 sm:py-1 sm:text-[11px]"
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
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-100 to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-100 to-transparent sm:w-20" />

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
