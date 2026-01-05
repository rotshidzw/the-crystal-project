import Image from 'next/image';
import Link from 'next/link';

const merchItems = [
  {
    title: 'Caps & Hats',
    description: 'Minimal streetwear essentials with premium embroidered finishes.',
    image:
      'https://static.wixstatic.com/media/503ea4_f5fbccc0050d42869bc3fa2bfb9e21c8~mv2.jpg/v1/fill/w_587,h_574,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/503ea4_f5fbccc0050d42869bc3fa2bfb9e21c8~mv2.jpg',
  },
  {
    title: 'Signature Hoodies',
    description: 'Heavyweight fleece silhouettes engineered for everyday wear.',
    image:
      'https://static.wixstatic.com/media/503ea4_06d97d0018414cb3ba4bd75f79401b94~mv2.jpg/v1/fill/w_587,h_574,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/503ea4_06d97d0018414cb3ba4bd75f79401b94~mv2.jpg',
  },
  {
    title: 'Vinyl & CD Drops',
    description: 'Limited pressings with collectible artwork and bonus material.',
    image:
      'https://static.wixstatic.com/media/503ea4_c3162699fdc54aaeaaa35ec02a9882ce~mv2.jpg/v1/fill/w_587,h_574,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/503ea4_c3162699fdc54aaeaaa35ec02a9882ce~mv2.jpg',
  },
];

const Merch = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-500">Merch</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Curated drops for devoted fans.</h2>
            <p className="mt-4 text-base text-slate-600">
              Every capsule is designed with premium materials and limited runs. Offerings rotate with each major
              release.
            </p>
          </div>
          <Link
            href="/shopping"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
          >
            Shop the drop
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {merchItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <div className="relative h-60">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merch;
