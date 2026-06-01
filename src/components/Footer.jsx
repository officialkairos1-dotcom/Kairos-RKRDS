import { Link } from "react-router-dom";
import { SOCIALS, ARTIST } from "../lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-32 bg-[#050814]" data-testid="site-footer">
      <div className="absolute inset-x-0 -top-px hr-glow opacity-50" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="overline mb-3">An electronic music project</div>
          <div className="font-display text-5xl md:text-6xl font-black tracking-tighter uppercase">
            KAIROS
          </div>
          <p className="mt-5 text-slate-400 max-w-md text-balance">
            {ARTIST.tagline}
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="overline mb-5">Navigate</div>
          <ul className="space-y-3 text-slate-300">
            <li><Link to="/music" className="hover:text-[var(--accent-blue)] transition-colors">Music</Link></li>
            <li><Link to="/about" className="hover:text-[var(--accent-blue)] transition-colors">About</Link></li>
            <li><Link to="/live" className="hover:text-[var(--accent-blue)] transition-colors">DJ / Live</Link></li>
            <li><Link to="/sample-packs" className="hover:text-[var(--accent-blue)] transition-colors">Sample Packs</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--accent-blue)] transition-colors">Bookings</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="overline mb-5">Find Me</div>
          <ul className="space-y-3 text-slate-300">
            {SOCIALS.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[var(--accent-gold)] transition-colors"
                  data-testid={`footer-social-${s.id}`}
                >
                  <span className="text-slate-500">↗</span>
                  {s.label}
                </a>
              </li>
            ))}
            <li className="pt-3 mt-3 border-t border-white/5">
              <a
                href="https://ko-fi.com/kairosstudio7/shop"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[var(--accent-blue)] hover:text-[var(--accent-gold)] transition-colors text-sm uppercase tracking-[0.2em]"
                data-testid="footer-kofi-shop"
              >
                <span>More on Ko-fi</span>
                <span aria-hidden>→</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-500">
          <div>© {new Date().getFullYear()} Kairos — All rights reserved</div>
          <div>Crafted in the dark</div>
        </div>
      </div>
    </footer>
  );
}
