const pricingTiers = [
  {
    name: 'Starter Launch',
    price: '$2,500',
    description: 'Perfect for single releases and focused drops.',
    features: ['Launch roadmap', 'Press kit design', '2 campaign touchpoints'],
  },
  {
    name: 'Growth Campaign',
    price: '$6,500',
    description: 'Multi-channel strategy with audience growth focus.',
    features: ['Everything in Starter', 'Merch capsule plan', 'Creative direction'],
  },
  {
    name: 'Signature Partner',
    price: 'Custom',
    description: 'Full-service, white-glove execution for scaled releases.',
    features: ['Dedicated team', 'Live activation', 'Brand partnerships'],
  },
];

const PricingSection = () => {
  return (
    <section className="bg-white py-16" id="pricing">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-500">Pricing</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Flexible packages for every phase.</h2>
          <p className="mt-4 text-base text-slate-600">
            Transparent pricing that scales with your growth. Every tier includes an experience roadmap.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article key={tier.name} className="flex h-full flex-col rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{tier.price}</p>
              <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className="mt-auto inline-flex items-center justify-center rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
              >
                Request details
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
