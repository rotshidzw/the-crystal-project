const services = [
  {
    title: 'Release Strategy',
    description: 'Campaign planning, editorial pitches, and launch sequencing tuned for growth.',
  },
  {
    title: 'Experience Design',
    description: 'Live events, pop-ups, and VIP activations that feel premium and intentional.',
  },
  {
    title: 'Merchandising',
    description: 'Product design, inventory planning, and ecommerce-ready drop strategy.',
  },
  {
    title: 'Brand Partnerships',
    description: 'Secure collaborations with aligned partners and clear revenue targets.',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-slate-50 py-16" id="services">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-500">Services</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Everything needed to turn an audience into a community.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            We operate like a creative partner and an operations team in one, focused on premium execution.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
