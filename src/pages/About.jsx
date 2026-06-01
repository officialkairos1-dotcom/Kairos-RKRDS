import { IMG, ARTIST } from "../lib/site";

export default function About() {
  return (
    <div data-testid="about-page">
      {/* ---------- HERO ---------- */}
      <section className="relative pt-28 md:pt-40 pb-20 overflow-hidden">
        <div className="orb-gold" style={{ top: "-10%", left: "-10%" }} />
        <div className="orb-blue" style={{ bottom: "-20%", right: "-10%" }} />
        <div className="absolute inset-0 cinematic-radial opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-end relative z-10">
          <div className="lg:col-span-7">
            <div className="overline mb-5">The Story · Fraybounds Universe</div>
            <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.92] text-balance">
              Built in the dark.<br />Designed for the drop.
            </h1>
            <p className="mt-8 text-slate-300 text-lg leading-relaxed max-w-2xl text-balance">
              {ARTIST.bioShort}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={IMG.portrait} alt="Kairos in the studio" className="w-full h-full object-cover" data-testid="about-portrait" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <div className="overline">In the Studio</div>
                  <div className="font-display text-xl font-bold uppercase">Kairos</div>
                </div>
                <div className="overline text-right">Coryell County · TX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BIO ---------- */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <aside className="md:col-span-4">
            <div className="overline">Profile</div>
            <ul className="mt-5 space-y-5 text-slate-300">
              <li>
                <span className="text-slate-500 text-xs uppercase tracking-[0.25em] block mb-1">Born</span>
                Reedley, California · Feb 13, 2007
              </li>
              <li>
                <span className="text-slate-500 text-xs uppercase tracking-[0.25em] block mb-1">Shaped By</span>
                Life across the US & Germany
              </li>
              <li>
                <span className="text-slate-500 text-xs uppercase tracking-[0.25em] block mb-1">Role</span>
                {ARTIST.role}
              </li>
              <li>
                <span className="text-slate-500 text-xs uppercase tracking-[0.25em] block mb-1">Universe</span>
                Fraybounds — visuals, emotion, storytelling
              </li>
              <li>
                <span className="text-slate-500 text-xs uppercase tracking-[0.25em] block mb-2">Influences</span>
                <div className="flex flex-wrap gap-2">
                  {ARTIST.influences.map((i) => (
                    <span
                      key={i}
                      className="text-xs uppercase tracking-[0.2em] px-3 py-1.5 border border-white/10 text-slate-300"
                      data-testid={`influence-${i.toLowerCase().replace(/[^a-z]/g, "-")}`}
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </li>
              <li>
                <span className="text-slate-500 text-xs uppercase tracking-[0.25em] block mb-1">Sound Spectrum</span>
                Cinematic Progressive House · Mainstage Big Room · Future Bass · Electro House
              </li>
            </ul>
          </aside>

          <article className="md:col-span-8 space-y-7 text-slate-300 text-base leading-relaxed">
            {ARTIST.bioLong.map((p, i) => (
              <p key={i} data-testid={`bio-paragraph-${i}`}>{p}</p>
            ))}

            <figure className="relative my-4" data-testid="about-germany-figure">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden max-w-md">
                <img src={IMG.germany} alt="Kairos in Germany" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="overline">Germany</div>
                    <div className="font-display text-lg font-bold uppercase tracking-tight">Years that shaped the sound</div>
                  </div>
                </figcaption>
              </div>
            </figure>

            <div className="hr-glow w-24 mt-8" />
            <blockquote
              className="text-[var(--accent-gold)] font-display text-2xl md:text-3xl uppercase tracking-tight leading-tight text-balance"
              data-testid="artist-quote"
            >
              &ldquo;{ARTIST.quote}&rdquo;
            </blockquote>
          </article>
        </div>
      </section>
    </div>
  );
}
