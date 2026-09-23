export const industries = [
  {
    slug: 'bfsi-fintech',
    name: 'BFSI & Fintech',
    short:
      'Secure, compliant learning for banking and finance teams.',
    text: 'JFKC is a transformative force developing courses on compliance, product & risk, digital banking, blockchain, interactive simulations & case studies for financial expertise.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=900&auto=format&fit=crop',
    videoId: '1cIaHztrtiV7BT_ch4XGYM0CsV2_QwAbr',
  },
  {
    slug: 'retail-fmcg-ecommerce',
    name: 'Retail, FMCG & E-Commerce',
    short: 'Fast, engaging training for store, brand, and online teams.',
    text: 'The JFKC e-learning modules and its LMS platform support Retail, FMCG & E-Commerce for product training, customer service, sales, operations, merchandising, and digital storefronts—enhancing skills across teams and covering launches and promotions.',
    image:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=900&auto=format&fit=crop',
    videoId: '15_sMIJSYMvwLSugT8lMHJzhx2yL4HFb8',
  },
  {
    slug: 'logistics-supply-chain',
    name: 'Logistics & Supply Chain',
    short: 'Operations training for warehouse, delivery, and fleet teams.',
    text: 'JFKC builds training for logistics and supply chain teams covering warehouse operations, inventory, last-mile delivery, safety compliance, and fleet coordination—helping partners move goods smarter and safer.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
    videoId: '15_sMIJSYMvwLSugT8lMHJzhx2yL4HFb8',
  },
  {
    slug: 'corporate-enterprises',
    name: 'Corporate & Enterprises',
    short: 'Scalable learning for leadership, compliance, and upskilling.',
    text: 'For corporate and enterprise partners, JFKC delivers scalable learning on leadership, compliance, onboarding, soft skills, and role-based upskilling—aligned to organizational goals and measurable outcomes.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop',
    videoId: '1evcGAPhBCgYIx0N6o3AoIxUgilX9dheT',
  },
  {
    slug: 'healthcare-pharma',
    name: 'Healthcare & Pharma',
    short: 'Precision modules for clinical and pharma workflows.',
    text: 'In Healthcare & Pharma, we support CME, training, and sales for continuous learning. Our modules cover procedures, patient care, compliance, and medical updates—tailored for pharmacology, disease management, and sales reps.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop',
    videoId: '1WR6PM4NNGlcevS6wZuUgMwGHqGPPWaJw',
  },
  {
    slug: 'aviation-airlines',
    name: 'Aviation & Airlines',
    short: 'Safety-first learning for air and ground operations.',
    text: 'We develop Safety, Technical, and Customer Service training modules covering aircraft systems, emergency procedures, compliance, and customer interaction—tailored for pilots, crew, and technicians, with immersive VR simulations.',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=900&auto=format&fit=crop',
    videoId: '1ktrz2WaKVxFC1xp-lXkbsoF8P-ANzhFX',
  },
  {
    slug: 'automobiles-manufacturing',
    name: 'Automobiles & Manufacturing',
    short: 'Hands-on digital learning for plant and product teams.',
    text: 'We focus on Employee Skills, Just-in-Time Training, and Simulations with modules on assembly line operations, maintenance, quality, and safety—minimizing downtime and boosting efficiency through interactive and 3D simulations.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=900&auto=format&fit=crop',
    videoId: '1CFXU6mdj2mDb86zzpjJ3tI3XpVLF47xE',
  },
  {
    slug: 'oil-gas',
    name: 'Oil & Gas',
    short: 'Field-ready training for energy and operations crews.',
    text: 'We prioritize Safety, Compliance, Technical, and Emergency Response training with modules on drilling, rig safety, hazardous materials, and environmental regulations—customized for upstream, midstream, and downstream operations, featuring interactive emergency simulations.',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=900&auto=format&fit=crop',
    videoId: '1bzFwkrbn2jC5kHmM4dXk0SxE0d_zs2xh',
  },
  {
    slug: 'it-business-intelligence',
    name: 'IT & Business Intelligence',
    short: 'Upskilling paths for tech and data-driven teams.',
    text: 'JF Knowledge Centre focus on Continuous Learning with modules in programming, cybersecurity, cloud computing, data analytics, and Business Intelligence—keeping learners updated through trends and micro-learning for seamless progress.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop',
    videoId: '1evcGAPhBCgYIx0N6o3AoIxUgilX9dheT',
  },
  {
    slug: 'universities-edtech',
    name: 'Universities & Edtech',
    short: 'Adaptive modules for campuses and learning platforms.',
    text: 'In the evolving landscape of higher Education and EdTech, JF Knowledge Centre (JFKC) is redefining learning through AI-powered personalization and seamless LMS integration.',
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=900&auto=format&fit=crop',
    videoId: '1E-kk6SIpKywtr3abjzOgK9W4lx6b_n6V',
  },
];

export const getIndustryBySlug = (slug) =>
  industries.find((item) => item.slug === slug);
