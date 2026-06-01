import { ExternalLink } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { SAMPLE_PACKS } from "../lib/site";

export default function SamplePacks() {
  return (
    <div data-testid="sample-packs-page">
      <section className="relative pt-28 md:pt-40 pb-16 overflow-hidden">
        <div className="orb-purple" style={{ top: "-10%", right: "10%" }} />
        <div className="absolute inset-0 cinematic-radial opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="overline mb-5">Sample Packs · Tools of the Trade</div>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-balance">
            The sounds. The textures. The atmosphere.
          </h1>
          <p className="mt-6 text-slate-400 max-w-2xl text-balance">
            Curated sample and preset packs from the Kairos studio — Serum patches, EDM presets, and
            cinematic textures used in the records. Available now on Ko-fi.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionHeader overline="The Catalog" title="ALL PACKS" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_PACKS.map((p, i) => (
              <article key={i} className="cine-card group overflow-hidden" data-testid={`pack-${i}`}>
                <div className="relative aspect-square overflow-hidden bg-[#050814]">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/80 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 overline bg-black/60 px-3 py-1 border border-white/10">{p.status}</div>
                </div>
                <div className="p-7">
                  <div className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight">{p.name}</div>
                  <p className="text-slate-400 mt-3 text-sm leading-relaxed">{p.desc}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href={p.kofi}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                      data-testid={`pack-kofi-${i}`}
                    >
                      <span>{p.cta || "Get on Ko-fi"}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 cine-card p-10 text-center">
            <div className="overline mb-3">Stay in the loop</div>
            <div className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-balance">
              More volumes dropping soon
            </div>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              The Kairos sample library is expanding. Follow on Ko-fi to be first when the next volume releases.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
