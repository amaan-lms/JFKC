import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImg from '../../assets/bg3.png';

const Hero = () => {
  return (
    <section className="hero-banner relative w-full min-h-[100svh] overflow-hidden bg-[#0a0604] font-[family-name:var(--font-display)] text-white">
      {/* Full-bleed background — fills under navbar, no top gap */}
      <img
        src={heroImg}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[35%_center] md:object-right md:object-top"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent md:via-black/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
        aria-hidden="true"
      />
      {/* Extra dark wash on mobile only */}
      <div
        className="absolute inset-0 bg-black/35 md:hidden"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[100svh] items-end">
        <div className="w-full px-4 pb-20 pt-28 sm:px-5 sm:pb-24 lg:px-8 lg:pb-28">
          <div className="max-w-xl lg:max-w-[52%]">
            <h1 className="hero-banner__rise hero-banner__rise--2 mb-5 font-[family-name:var(--font-display)] text-5xl leading-[1.28] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.25rem]">
              Unleashing the{' '}
              <span className="hero-banner__accent">Knowledge</span>{' '}
              Brilliance
            </h1>

            <p className="hero-banner__rise hero-banner__rise--3 mb-9 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
              Smart & sharp learning — transforming how modern teams grow.
            </p>

            <div className="hero-banner__rise hero-banner__rise--4 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="group inline-flex items-center gap-2 rounded-4xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-400 sm:text-base"
              >
                About Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-4xl border border-white/35 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/15 sm:text-base"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
