import Image from 'next/image';

const galleryImages = [
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
];

const Gallery = () => {
  return (
    <section className="bg-slate-50 py-16" id="gallery">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-500">Gallery</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Moments from the tour diary.</h2>
          </div>
          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            Book a session
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="relative h-56 overflow-hidden rounded-2xl">
              <Image
                src={image}
                alt={`Gallery highlight ${index + 1}`}
                fill
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
