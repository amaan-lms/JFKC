import React from 'react';
import { ArrowRight } from 'lucide-react';
import whoWeAreImg from '../../assets/who_we_are.png';

const WhoWeAre = () => {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50 to-orange-100 py-16 font-[family-name:var(--font-display)] text-gray-800 sm:py-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Featured image — slightly cropped from bottom */}
        <div className="w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
          <img
            src={whoWeAreImg}
            alt="Who We Are — JFKC team collaborating"
            className="block h-auto w-full max-w-full object-cover object-top mb-[-6%] sm:mb-[-7%]"
          />
        </div>

        {/* Content + CTA */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
          
            <p className="mt-5 max-w-2xl text-base font-semibold leading-relaxed text-gray-900 sm:text-lg">
              JF Knowledge Centre (JFKC) develops high quality E-Learning Modules and provides a best-in-class
              Learning Management System (LMS).
            </p>

            <div className="mt-5 grid grid-cols-1 gap-4 text-sm leading-relaxed text-gray-600 sm:grid-cols-2 sm:gap-6 sm:text-base">
              <p>
                Our team of content developers, instructional designers, and multimedia experts creates dynamic,
                interactive learning materials tailored to every learner.
              </p>
              <p>
                Using the latest technology and teaching practices, we design modules, videos, and gamified quizzes
                that keep learners engaged and motivated to succeed.
              </p>
            </div>
          </div>

          <aside className="flex flex-col justify-start lg:col-span-4 lg:pl-4">
            <p className="text-3xl font-bold tracking-[-0.03em] text-orange-500 uppercase sm:text-4xl">
              JFKC
            </p>
            <p className="mt-1 text-sm font-medium text-gray-800 sm:text-base">
              E-Learning | LMS Solutions
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-600">
              Innovative e-learning that resonates with diverse audiences and drives real outcomes.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
            >
              Let&apos;s Collaborate
              <ArrowRight className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
