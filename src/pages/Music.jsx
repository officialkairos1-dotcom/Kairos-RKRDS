import SectionHeader from "../components/SectionHeader";
import { RELEASES, UNRELEASED } from "../lib/site";

export default function Music() {
  return (
    <div className="relative" data-testid="music-page">
      <section className="relative pt-28 md:pt-40 pb-20 overflow-hidden">
        <div className="orb-blue" style={{ top: "-15%", right: "-10%" }} />
        <div className="absolute inset-0 cinematic-radial opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="overline mb-5">Discography · Fraybounds Universe</div>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-balance">
            The Records. The Demos. The World.
          </h1>
          <p className="mt-6 text-slate-400 max-w-2xl text-balance">
            Released work lives on Spotify. Unreleased material — festival IDs, demos, mainstage edits — premieres here first via SoundCloud.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionHeader overline="Released · Streaming Everywhere" title="OFFICIAL RELEASES" />
          <div className="grid gap-6">
            {RELEASES.map((r, i) => (
              <div key={i} className="cine-card p-6 md:p-8" data-testid={`released-${i}`}>
                <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                  <div>
                    <div className="overline mb-2">{r.type} · {r.year}</div>
                    <div className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight">{r.title}</div>
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-[0.25em]">{r.label}</div>
                </div>
                <iframe
                  src={r.embed}
                  width="100%"
                  height={r.height || 152}
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={r.title}
                  data-testid={`spotify-iframe-${i}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5 bg-[#080d1c]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionHeader
            overline="Unreleased · SoundCloud Exclusive"
            title="FROM THE VAULT"
            subtitle="Edits, IDs and works-in-progress. Premiered here before they hit the stage."
          />
          <div className="grid gap-6">
            {UNRELEASED.map((u, i) => (
              <div key={i} className="cine-card p-6 md:p-8" data-testid={`unreleased-${i}`}>
                <div className="overline mb-2">{u.note}</div>
                <div className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight mb-5">{u.title}</div>
                <iframe
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={u.embed}
                  title={u.title}
                  data-testid={`soundcloud-iframe-${i}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
