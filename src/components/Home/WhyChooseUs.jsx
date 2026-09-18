import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="overflow-hidden bg-white font-[family-name:var(--font-display)] text-gray-800">
      <div className="grid min-h-[640px] grid-cols-1 lg:grid-cols-12">
        {/* Left — tall image */}
        <div className="relative min-h-[360px] lg:col-span-5 lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
            alt="JFKC partnership and collaboration"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-950/40 via-transparent to-transparent" />
        </div>

        {/* Right — content */}
        <div className="flex flex-col justify-between bg-gradient-to-b from-white via-orange-50/40 to-orange-50 lg:col-span-7">
          <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
              Why Choose Us?
            </p>
            <h2 className="max-w-xl text-3xl leading-[1.2]  tracking-[-0.03em] text-gray-900 sm:text-4xl lg:text-[2.6rem]">
              Empower your e-learning journey on digital platforms with{' '}
              <span className="text-orange-500">JFKC</span>.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base">
              We inspire curiosity, foster critical thinking, and build lasting partnerships — aligning every project
              with your goals and vision.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-4xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
            >
              Let&apos;s work together
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Bottom feature cards */}
          <div className="grid grid-cols-1 gap-3 px-6 pb-10 sm:grid-cols-2 sm:px-10 lg:gap-4 lg:px-14 lg:pb-12">
            <div className="rounded-xl bg-gray-100/90 p-5 sm:p-6">
              <h3 className="text-base font-bold text-gray-900">Goal-aligned learning</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                We work closely with clients to understand goals, audiences, and outcomes — so every module matches
                your vision.
              </p>
            </div>
            <div className="rounded-xl bg-gray-100/90 p-5 sm:p-6">
              <h3 className="text-base font-bold text-gray-900">Trusted partnership</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Collaboration is our cornerstone. Choose JFKC as your long-term ally for e-learning transformation
                and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
