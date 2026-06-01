import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import { IMG, SHOWS } from "../lib/site";
import { ArrowRight } from "lucide-react";

export default function DJLive() {
  return (
    <div data-testid="live-page">
      <section className="relative pt-28 md:pt-40 pb-20 overflow-hidden">
        <img src={IMG.live1} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/60 via-[#050814]/80 to-[#050814]" />
        <div className="orb-blue" style={{ bottom: "-30%", right: "-10%" }} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="overline mb-5">DJ / Live</div>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-balance">
            On the way to the mainstage.
          </h1>
          <p className="mt-6 text-slate-400 max-w-2xl text-balance">
            The live show is being built. Atmospheric intros, festival-tuned edits, and
            unreleased records — engineered for the room, ready for the road.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <SectionHeader overline="Shows · Timeline" title="UPCOMING & PAST" />
            <ul className="space-y-4">
              {SHOWS.map((s, i) => (
                <li key={i} className="cine-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4" data-testid={`show-${i}`}>
                  <div className="flex items-center gap-6">
                    <div className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight w-28">{s.date}</div>
                    <div>
                      <div className="text-base font-medium">{s.venue}</div>
                      <div className="text-slate-400 text-sm">{s.city}</div>
                    </div>
                  </div>
                  <div className={`text-[0.7rem] uppercase tracking-[0.3em] ${
                    s.status === "upcoming" ? "text-[var(--accent-blue)]" : "text-[var(--accent-gold)]"
                  }`}>{s.status}</div>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link to="/contact" className="btn-primary" data-testid="live-book-cta">
                <span>Book a Show</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={IMG.austin} alt="Kairos at a fair in Austin, TX" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="overline">Austin · TX</div>
                  <div className="font-display text-lg font-bold uppercase tracking-tight">In the crowd</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={IMG.live2} alt="Stage lights" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814] to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
