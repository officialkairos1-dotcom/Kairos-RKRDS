export default function SectionHeader({ overline, title, subtitle, align = "left" }) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center mx-auto max-w-3xl" : ""}`}>
      {overline && <div className="overline mb-4">{overline}</div>}
      <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-slate-400 max-w-2xl text-balance">{subtitle}</p>
      )}
    </div>
  );
}
