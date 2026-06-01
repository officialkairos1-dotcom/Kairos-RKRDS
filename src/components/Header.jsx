import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/music", label: "Music" },
  { to: "/about", label: "About" },
  { to: "/live", label: "DJ / Live" },
  { to: "/sample-packs", label: "Sample Packs" },
  { to: "/contact", label: "Bookings" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="glass-header fixed top-0 inset-x-0 z-50" data-testid="site-header">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" data-testid="brand-link">
          <span className="tick" />
          <span className="font-display text-lg tracking-[0.25em] uppercase">Kairos</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
              className={({ isActive }) =>
                `text-[0.72rem] uppercase tracking-[0.25em] transition-colors ${
                  isActive ? "text-[var(--accent-blue)]" : "text-slate-300 hover:text-white"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex btn-primary !py-2.5 !px-4 text-[0.7rem]"
          data-testid="header-booking-btn"
        >
          Book
        </Link>

        <button
          className="md:hidden text-slate-200"
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
          data-testid="mobile-menu-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#050814]/95 backdrop-blur-xl" data-testid="mobile-menu">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.25em] ${
                    isActive ? "text-[var(--accent-blue)]" : "text-slate-300"
                  }`
                }
                data-testid={`mobile-nav-${n.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
