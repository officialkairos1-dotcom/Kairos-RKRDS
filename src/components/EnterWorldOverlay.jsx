import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function EnterWorldOverlay() {
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("kairos_entered") !== "1";
  });
  const [ready, setReady] = useState(false);

  const close = () => {
    sessionStorage.setItem("kairos_entered", "1");
    setOpen(false);
  };

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "#050814" }}
          data-testid="enter-world-overlay"
        >
          {/* faint background atmosphere */}
          <div className="orb-blue" style={{ top: "-20%", left: "-10%" }} />
          <div className="orb-gold" style={{ bottom: "-15%", right: "-10%" }} />
          <div className="absolute inset-0 cinematic-radial opacity-70" />
          <div className="absolute inset-0 bg-grain opacity-50" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 20 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center text-center px-6"
          >
            <div className="overline mb-6 flex items-center gap-3">
              <span className="tick" />
              <span>An electronic music project</span>
            </div>
            <h1
              className="font-display text-6xl md:text-8xl font-black tracking-tighter uppercase"
              style={{ color: "#F8FAFC", lineHeight: 0.95 }}
              data-testid="overlay-title"
            >
              KAIROS
            </h1>
            <p className="mt-6 max-w-md text-slate-400 text-sm md:text-base">
              The moment before the drop. Enter the atmosphere.
            </p>
            <button
              onClick={close}
              className="btn-primary mt-10"
              data-testid="enter-world-btn"
            >
              <span>Enter the World</span>
              <span aria-hidden>→</span>
            </button>
            <button
              onClick={close}
              className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500 hover:text-slate-200 transition-colors"
              data-testid="skip-intro-btn"
            >
              Skip intro
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
