import React from 'react';
import {
  MonitorPlay,
  BookOpen,
  AppWindow,
  Clapperboard,
  Bot,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import CTA from '../components/CTA';
import athenaLmsImage from '../assets/athena_dash.png';
import ebookImage from '../assets/ebook.png';
import webstudioImage from '../assets/webstudio.png';
import virtualStudioImage from '../assets/vi.png';
import chatbot from '../assets/chatbot.png';

const products = [
  {
    name: 'Athena LMS',
    short: 'Athena LMS',
    text: 'AI-powered learning management and experience platform for courses, progress, and training at scale.',
    image: athenaLmsImage,
    Icon: MonitorPlay,
    href: 'https://lmsathena.com/',
    cta: 'Visit Athena LMS',
    external: true,
  },
  {
    name: 'AI Course Creator',
    short: 'AI Course Creator',
    text: 'Design complete, interaction-rich courses in minutes with AI-assisted authoring.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop',
    Icon: Sparkles,
    href: 'https://lmsathena.com/signup',
    cta: 'Start creating',
    external: true,
  },
  {
    name: 'AI ebook Athena',
    short: 'AI ebook Athena',
    text: 'Transform PDFs into interactive digital booklets learners can explore on any device.',
    image: ebookImage,
    Icon: BookOpen,
    href: 'https://ebook.lmsathena.com/',
    cta: 'Open E-book Athena',
    external: true,
  },
  {
    name: 'WebStudio',
    short: 'WebStudio',
    text: 'Website builder for creating polished, on-brand sites without a long development cycle.',
    image: webstudioImage,
    Icon: AppWindow,
    href: 'https://webstudio.lmsathena.com/',
    cta: 'Open WebStudio',
    external: true,
  },
  {
    name: 'Virtual Studio',
    short: 'Virtual Studio',
    text: 'Create AI-powered videos that speak your language. Transform text into engaging video content with lifelike AI avatars — professional videos in minutes, not hours.',
    image: virtualStudioImage,
    Icon: Clapperboard,
    href: 'https://virtualstudio.lmsathena.com/',
    cta: 'Open Virtual Studio',
    external: true,
  },
  {
    name: 'AI Chatbot',
    short: 'AI Chatbot',
    text: 'Human-like AI video agents for support — coming soon.',
    image: chatbot,
    Icon: Bot,
    href: null,
    cta: 'Coming soon',
    external: false,
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
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)] ring-1 ring-orange-200/70">
      <div className="relative overflow-hidden bg-white">
        <img
          src={item.image}
          alt={item.name}
          className="block h-auto w-full"
        />
        <span className="absolute left-4 top-4 rounded-full bg-orange-500/95 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white">
          {num}
        </span>
        {!item.href && (
          <span className="absolute right-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-wider text-orange-600">
            Coming soon
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="text-lg font-bold tracking-tight text-slate-900">
            {item.name}
          </h3>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
          {item.text}
        </p>
        {cta}
      </div>
    </article>
  );
};

const Products = () => {
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
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-8 lg:px-8">
          {products.map((item, index) => (
            <ProductCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default Products;
