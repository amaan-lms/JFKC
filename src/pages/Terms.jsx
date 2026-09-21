import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const restrictions = [
  'Publishing any Website material in any media;',
  'Selling, sublicensing and/or otherwise commercializing any Website material;',
  'Publicly performing and/or showing any Website material;',
  'Using this Website in any way that is, or may be, damaging to this Website;',
];

const Terms = () => {
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
            Terms &amp; Conditions
          </p>
          <h1 className="max-w-3xl text-4xl tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            Guidelines for a seamless{' '}
            <span className="text-orange-400">partnership</span>
          </h1>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">
            <FileText className="h-6 w-6" />
          </div>

          <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              Before embarking on a learning journey with JF Knowledge Centre, familiarize
              yourself with our Terms &amp; Conditions.
            </p>
            <p>
              These guidelines ensure a seamless partnership, covering everything from
              access to our learning platform to the usage of customized content.
            </p>
            <p>
              We believe in transparent and fair interactions, and our terms are crafted to
              provide a clear understanding of the responsibilities and benefits associated
              with collaborating with us.
            </p>
          </div>

          <div className="mt-14 space-y-10">
            <article>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Intellectual Property Rights
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
                Other than content you own, which you may have opted to include on this
                Website, under these Terms, JF Knowledge Centre Pvt. Ltd. and/or its
                licensors own all rights to the intellectual property and material contained
                in this Website, and all such rights are reserved. You are granted a limited
                license only, subject to the restrictions provided in these Terms, for
                purposes of viewing the material contained on this Website.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Restrictions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
                You are expressly and emphatically restricted from all of the following:
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
                {restrictions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>

            <article>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Variation of Terms
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
                JF Knowledge Centre Pvt. Ltd is permitted to revise these Terms at any time
                as it sees fit, and by using this Website you are expected to review such
                Terms on a regular basis to ensure you understand all terms and conditions
                governing use of this Website.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Governing Law &amp; Jurisdiction
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
                These Terms will be governed by and construed in accordance with the laws of
                the State of Delhi, and you submit to the non-exclusive jurisdiction of the
                state and federal courts located in Delhi for the resolution of any disputes.
              </p>
            </article>
          </div>

          <p className="mt-12 text-sm text-slate-500">
            Need clarity on these terms?{' '}
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

export default Terms;
