import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight, Headphones } from "lucide-react";
import Particles from "../components/Particles";
import SectionHeader from "../components/SectionHeader";
import EmailCapture from "../components/EmailCapture";
import { ARTIST, IMG, RELEASES, SOCIALS, SAMPLE_PACKS } from "../lib/site";

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[100svh] -mt-16 pt-16 overflow-hidden" data-testid="hero-section">
        {/* atmosphere background */}
        <img
          src={IMG.hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/50 via-[#050814]/70 to-[#050814]" />
        <div className="absolute inset-0 cinematic-radial" />
        <Particles density={70} />
        <div className="orb-blue" style={{ top: "10%", left: "-10%" }} />
        <div className="orb-gold" style={{ bottom: "5%", right: "-8%" }} />
        <div className="absolute inset-0 bg-grain opacity-40" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 min-h-[100svh] flex flex-col justify-between py-20">
          <div className="flex items-center gap-3 overline">
            <span className="tick" />
            <span>NOW EMERGING · {new Date().getFullYear()}</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative w-full max-w-[1100px]"
              data-testid="hero-banner-wrap"
            >
              <div className="absolute -inset-12 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.18)_0%,transparent_60%)] blur-3xl" />
              <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(255,184,0,0.10)_0%,transparent_60%)] blur-3xl" />
              <img
                src={IMG.banner}
                alt="Kairos · Fraybounds Universe"
                className="relative w-full h-auto object-contain drop-shadow-[0_0_60px_rgba(0,229,255,0.30)]"
                data-testid="hero-banner"
              />
              {/* Hidden but kept for accessibility / SEO */}
              <h1 className="sr-only" data-testid="hero-title">KAIROS — Fraybounds Universe</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
              className="mt-10 max-w-2xl"
            >
              <div className="hr-glow w-24 mx-auto mb-6" />
              <p className="text-xl md:text-2xl text-slate-200 font-light leading-snug text-balance">
                {ARTIST.tagline}
              </p>
              <p className="mt-5 text-slate-400 text-balance">
                {ARTIST.bioShort}
              </p>

              <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
                <Link to="/music" className="btn-primary" data-testid="cta-listen-now">
                  <Play size={14} fill="currentColor" />
                  <span>Listen Now</span>
                </Link>
                <Link to="/about" className="btn-secondary" data-testid="cta-enter-world">
                  <span>Enter the World</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="mt-10 flex justify-center">
                <EmailCapture source="hero" />
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex items-center gap-5 flex-wrap">
              {SOCIALS.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400 hover:text-[var(--accent-blue)] transition-colors"
                  data-testid={`hero-social-${s.id}`}
                >
                  {s.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.3em] text-slate-500">
              <span>Scroll</span>
              <span className="w-10 h-px bg-slate-600" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <section className="relative py-10 overflow-hidden border-y border-white/5 bg-[#080d1c]">
        <div className="flex marquee-track gap-16 whitespace-nowrap will-change-transform">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["FESTIVAL READY", "CINEMATIC ELECTRONIC", "MAINSTAGE INCOMING", "EST. 2025", "ATMOSPHERE × RELEASE", "KAIROS"].map((t, j) => (
              <div key={`${i}-${j}`} className="flex items-center gap-16">
                <span className="font-display text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-200">{t}</span>
                <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
              </div>
            ))
          )}
        </div>
      </section>

      {/* ---------- NEWEST RELEASE ---------- */}
      <section className="relative py-28 md:py-40" data-testid="newest-release-section">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <SectionHeader
            overline="Now Streaming · Spotify"
            title="THE FULL CATALOG"
            subtitle="Press play and step into the atmosphere. Every released record from Kairos — engineered for headphones and main stages."
          />
          <div className="relative">
            <div className="cine-card p-6 md:p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 orb-blue" />
              <div className="absolute -bottom-20 -left-20 orb-gold" />
              <div className="flex items-center justify-between mb-5 flex-wrap gap-3 relative z-10">
                <div>
                  <div className="overline mb-2">{RELEASES[0].type} · {RELEASES[0].year}</div>
                  <div className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight">
                    {RELEASES[0].title}
                  </div>
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-[0.25em]">{RELEASES[0].label}</div>
              </div>
              <iframe
                data-testid="hero-spotify-embed"
                src={RELEASES[0].embed}
                width="100%"
                height={RELEASES[0].height || 352}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Kairos Spotify catalog"
                className="relative z-10"
              />
              <div className="mt-6 flex flex-wrap gap-3 relative z-10">
                <Link to="/music" className="btn-secondary" data-testid="explore-music-btn">
                  <Headphones size={14} />
                  <span>Explore Music + Unreleased</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT TEASE ---------- */}
      <section className="relative py-28 md:py-40 border-t border-white/5 bg-[#070b18]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={IMG.portrait} alt="Kairos portrait" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="overline">In the Studio</div>
                  <div className="font-display text-2xl md:text-3xl font-bold uppercase">Kairos</div>
                </div>
                <div className="overline text-right">Coryell County · TX</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="overline mb-4">Fraybounds Universe</div>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-balance">
              Cinematic EDM, built on storytelling, tension, and release.
            </h2>
            <p className="mt-8 text-slate-400 max-w-xl text-balance">
              Progressive house, big room energy, and atmospheric sound design — shaped across the
              US and Germany, designed to feel immersive, powerful, and human.
            </p>
            <Link to="/about" className="btn-secondary mt-10" data-testid="about-cta">
              <span>Read the story</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- SAMPLE PACKS TEASE ---------- */}
      <section className="relative py-28 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <SectionHeader overline="Tools of the Trade" title="SAMPLE PACKS" subtitle="Serum presets, drum hits, and atmospheres from the Kairos studio — available now on Ko-fi." />
            <Link to="/sample-packs" className="btn-secondary" data-testid="all-packs-link">
              <span>All Packs</span>
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_PACKS.map((p, i) => (
              <div key={i} className="cine-card group overflow-hidden">
                <div className="relative aspect-square overflow-hidden bg-[#050814]">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/80 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 overline bg-black/60 px-3 py-1 border border-white/10">{p.status}</div>
                </div>
                <div className="p-6">
                  <div className="font-display text-2xl font-bold uppercase tracking-tight">{p.name}</div>
                  <p className="text-slate-400 mt-2 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BOOKING CTA ---------- */}
      <section className="relative py-32 md:py-44 border-t border-white/5 overflow-hidden">
        <div className="orb-purple" style={{ top: "-20%", left: "30%" }} />
        <div className="absolute inset-0 cinematic-radial opacity-50" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center relative z-10">
          <div className="overline mb-4">For promoters · labels · collaborators</div>
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-balance">
            The drop is coming.<br />
            <span style={{ color: "var(--accent-blue)" }}>Bring it to life.</span>
          </h2>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary" data-testid="bottom-cta-book">
              <span>Book Kairos</span>
              <ArrowRight size={14} />
            </Link>
            <Link to="/live" className="btn-secondary" data-testid="bottom-cta-live">
              <span>See Live</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
