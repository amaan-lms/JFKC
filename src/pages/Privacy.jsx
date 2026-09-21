import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-orange-50 to-slate-50 font-[family-name:var(--font-display)]">
      <section className="relative overflow-hidden bg-[#0c1220] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pb-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.2),transparent_55%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-bold tracking-[0.22em] text-orange-400 uppercase">
            Privacy Policy
          </p>
          <h1 className="max-w-3xl text-4xl tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            Ensuring Data Security in Corporate Training and{' '}
            <span className="text-orange-400">Education</span>
          </h1>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">
            <Shield className="h-6 w-6" />
          </div>

          <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              At JF Knowledge Centre, we understand the importance of data security. Our
              Privacy Policy is designed to reassure our clients that we adhere to the
              highest standards of data protection.
            </p>
            <p>
              Learn how we handle and safeguard sensitive information, ensuring a secure
              and trustworthy learning environment for your organization or institution.
            </p>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Questions about our privacy practices?{' '}
            <Link
              to="/contact"
              className="font-semibold text-orange-500 transition-colors hover:text-orange-600"
            >
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
