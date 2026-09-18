import React from 'react';

const sectors = [
  {
    name: 'BFSI & Fintech',
    desc: 'Secure, compliant learning for banking and finance teams.',
    src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=700&auto=format&fit=crop',
  },
  {
    name: 'Retail & FMCG',
    desc: 'Fast, engaging training for store and brand teams.',
    src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=700&auto=format&fit=crop',
  },
  {
    name: 'Healthcare & Pharma',
    desc: 'Precision modules for clinical and pharma workflows.',
    src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=700&auto=format&fit=crop',
  },
  {
    name: 'Aviation & Airlines',
    desc: 'Safety-first learning for air and ground operations.',
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=700&auto=format&fit=crop',
  },
  {
    name: 'Automobiles & Manufacturing',
    desc: 'Hands-on digital learning for plant and product teams.',
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=700&auto=format&fit=crop',
  },
  {
    name: 'Oil & Gas',
    desc: 'Field-ready training for energy and operations crews.',
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=700&auto=format&fit=crop',
  },
  {
    name: 'IT & Business Intelligence',
    desc: 'Upskilling paths for tech and data-driven teams.',
    src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=700&auto=format&fit=crop',
  },
  {
    name: 'Universities & Edtech',
    desc: 'Adaptive modules for campuses and learning platforms.',
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=700&auto=format&fit=crop',
  },
];

const SectorCard = ({ sector }) => (
  <div className="group relative w-[160px] shrink-0 sm:w-[180px] md:w-[200px]">
    <div className="overflow-hidden rounded-md border-[5px] border-white bg-white shadow-[0_12px_30px_rgba(0,0,0,0.14)] sm:border-[6px]">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={sector.src}
          alt={sector.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/45 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-4">
          <p className="text-sm font-bold text-white sm:text-base">{sector.name}</p>
          <p className="mt-1 text-xs leading-relaxed text-white/80">{sector.desc}</p>
        </div>
      </div>
    </div>
  </div>
);

const WhatSetsUsApart = () => {
  const loop = [...sectors, ...sectors];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50 to-orange-100 py-20 font-[family-name:var(--font-display)] text-gray-800 sm:py-24">
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium tracking-wide text-gray-500">What Set Us Apart?</p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl leading-tight font-bold tracking-[-0.03em] text-gray-900 sm:text-4xl lg:text-[2.75rem]">
          Driving Learning Success with{' '}
          <span className="text-orange-500">Innovative</span> Approaches
        </h2>
      </div>

      {/* Auto-scroll gallery */}
      <div className="set-apart-marquee relative mt-12 w-full overflow-hidden sm:mt-14">
        <div className="set-apart-marquee__track flex w-max gap-4 px-4 sm:gap-5">
          {loop.map((sector, index) => (
            <SectorCard key={`${sector.name}-${index}`} sector={sector} />
          ))}
        </div>
      </div>

      {/* Short copy */}
      <div className="relative mx-auto mt-12 max-w-2xl space-y-3 px-4 text-center text-sm leading-relaxed text-gray-600 sm:mt-14 sm:px-6 sm:text-base">
        <p>
          JFKC is dedicated to transforming learning for its partners — driving success with innovative approaches.
        </p>
        <p>
          Our expertise spans{' '}
          <span className="font-semibold text-gray-900">
            BFSI & Fintech, Retail & FMCG, Healthcare & Pharma, Aviation & Airlines, Automobiles & Manufacturing, Oil
            & Gas, IT & Business Intelligence, and Universities & Edtech
          </span>
          . With a decade of experience in design and digital solutions, we deliver engaging, adaptable knowledge
          modules for businesses and institutions.
        </p>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
