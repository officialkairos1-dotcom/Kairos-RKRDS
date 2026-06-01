import { useState } from "react";
import axios from "axios";
import { Send, CheckCircle2 } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { IMG, SOCIALS } from "../lib/site";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiry_type: "booking",
  });
  const [status, setStatus] = useState({ state: "idle", error: "" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", error: "" });
    try {
      await axios.post(`${API}/bookings`, form);
      setStatus({ state: "success", error: "" });
      setForm({ name: "", email: "", subject: "", message: "", inquiry_type: "booking" });
    } catch (err) {
      const msg = err?.response?.data?.detail || "Couldn't send right now. Please try again.";
      setStatus({ state: "error", error: typeof msg === "string" ? msg : "Submission failed." });
    }
  };

  return (
    <div data-testid="contact-page">
      <section className="relative pt-28 md:pt-40 pb-16 overflow-hidden">
        <img src={IMG.gear} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/70 via-[#050814]/85 to-[#050814]" />
        <div className="orb-gold" style={{ bottom: "-20%", left: "10%" }} />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="overline mb-5">Contact · Bookings · Press</div>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-balance">
            Book the moment.
          </h1>
          <p className="mt-6 text-slate-400 max-w-2xl text-balance">
            Promoters, labels, collaborators, press — reach out. Every show, release, and partnership
            starts with a single message.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionHeader overline="Send a Message" title="GET IN TOUCH" />
            {status.state === "success" ? (
              <div className="cine-card p-10 text-center" data-testid="contact-success">
                <CheckCircle2 className="mx-auto text-[var(--accent-blue)] mb-4" size={42} />
                <div className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight">Message Received</div>
                <p className="text-slate-400 mt-3">
                  Thanks for reaching out. Kairos will be in touch soon — keep an eye on your inbox.
                </p>
                <button
                  onClick={() => setStatus({ state: "idle", error: "" })}
                  className="btn-secondary mt-8"
                  data-testid="send-another-btn"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5" data-testid="booking-form">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="overline block mb-2">Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={update("name")}
                      className="cine-input"
                      placeholder="Your name"
                      data-testid="form-name"
                    />
                  </div>
                  <div>
                    <label className="overline block mb-2">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      className="cine-input"
                      placeholder="you@email.com"
                      data-testid="form-email"
                    />
                  </div>
                </div>

                <div>
                  <label className="overline block mb-2">Inquiry Type</label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { v: "booking", label: "Booking" },
                      { v: "press", label: "Press" },
                      { v: "collab", label: "Collaboration" },
                      { v: "general", label: "General" },
                    ].map((opt) => (
                      <button
                        key={opt.v}
                        type="button"
                        onClick={() => setForm({ ...form, inquiry_type: opt.v })}
                        className={`px-4 py-2 text-[0.7rem] uppercase tracking-[0.25em] border transition-colors ${
                          form.inquiry_type === opt.v
                            ? "border-[var(--accent-blue)] text-[var(--accent-blue)] bg-[rgba(0,229,255,0.06)]"
                            : "border-white/10 text-slate-300 hover:border-white/30"
                        }`}
                        data-testid={`inquiry-${opt.v}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="overline block mb-2">Subject</label>
                  <input
                    required
                    value={form.subject}
                    onChange={update("subject")}
                    className="cine-input"
                    placeholder="What's this about?"
                    data-testid="form-subject"
                  />
                </div>

                <div>
                  <label className="overline block mb-2">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={update("message")}
                    rows={6}
                    className="cine-input"
                    placeholder="Tell Kairos about the show, the project, the idea..."
                    data-testid="form-message"
                  />
                </div>

                {status.state === "error" && (
                  <div className="text-sm text-red-400" data-testid="form-error">{status.error}</div>
                )}

                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status.state === "loading"}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    data-testid="form-submit"
                  >
                    <span>{status.state === "loading" ? "Sending…" : "Send Message"}</span>
                    <Send size={14} />
                  </button>
                  <div className="text-xs text-slate-500 uppercase tracking-[0.25em]">Replies within 48h</div>
                </div>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="cine-card p-7">
              <div className="overline mb-3">Direct</div>
              <div className="font-display text-2xl font-bold uppercase">Get a Show</div>
              <p className="text-slate-400 mt-3 text-sm">
                Booking requests for clubs, festivals, opening slots, and live electronic showcases.
                Send venue, date window, and capacity.
              </p>
            </div>
            <div className="cine-card p-7">
              <div className="overline mb-3">Channels</div>
              <ul className="space-y-3">
                {SOCIALS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 hover:text-[var(--accent-blue)] transition-colors"
                      data-testid={`contact-social-${s.id}`}
                    >
                      <span className="text-slate-500">↗</span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
