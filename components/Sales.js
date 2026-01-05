import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpotify,
  faTidal,
  faSoundcloud,
  faBandcamp,
  faDeezer,
  faApple,
} from '@fortawesome/free-brands-svg-icons';

const platforms = [
  { icon: faSpotify, name: 'Spotify' },
  { icon: faTidal, name: 'Tidal' },
  { icon: faSoundcloud, name: 'Soundcloud' },
  { icon: faBandcamp, name: 'Bandcamp' },
  { icon: faDeezer, name: 'Deezer' },
  { icon: faApple, name: 'Apple Music' },
];

const Sales = () => {
  return (
    <section className="bg-slate-900 py-16" id="featured">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-slate-400">Featured Release</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Stream the Crystal Sessions</h2>
          <p className="mt-4 text-base text-slate-300">
            A curated, cinematic set designed for immersive listening. Built with premium audio mastering and
            channel-ready visuals.
          </p>
          <div className="mt-8 grid gap-4 rounded-3xl border border-slate-800 bg-slate-950 p-6 text-sm text-slate-300">
            <div className="flex items-center justify-between">
              <span>Release Strategy</span>
              <span className="font-semibold text-white">12-week rollout</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Press Outreach</span>
              <span className="font-semibold text-white">Global placements</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Fan Engagement</span>
              <span className="font-semibold text-white">Live experiences</span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {platforms.map((platform) => (
              <span
                key={platform.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-white"
                aria-label={platform.name}
              >
                <FontAwesomeIcon icon={platform.icon} />
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="aspect-video overflow-hidden rounded-3xl border border-slate-800">
            <iframe
              title="Crystal Sessions"
              className="h-full w-full"
              src="https://www.youtube.com/embed/YKaiXY7zHxk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
