import { useState } from "react";
import axios from "axios";
import { CheckCircle2 } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function EmailCapture({ source = "hero" }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState({ status: "idle", message: "" });

  const submit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setState({ status: "loading", message: "" });
    try {
      await axios.post(`${API}/subscribers`, { email: email.trim(), source });
      setState({ status: "success", message: "You're in. Check your inbox before the drop." });
      setEmail("");
    } catch (err) {
      const detail = err?.response?.data?.detail;
      const msg =
        err?.response?.status === 409
          ? typeof detail === "string"
            ? detail
            : "You're already on the list."
          : err?.response?.status === 422
          ? "Please enter a valid email."
          : "Couldn't subscribe — try again in a moment.";
      setState({ status: "error", message: msg });
    }
  };

  return (
    <div className="w-full max-w-md" data-testid="email-capture">
      <div className="overline mb-3 flex items-center gap-2">
        <span className="tick" />
        <span>Join the Fraybounds Inner Circle</span>
      </div>
      {state.status === "success" ? (
        <div
          className="flex items-center gap-3 cine-card px-4 py-3 border-[var(--accent-blue)]/40"
          data-testid="email-capture-success"
        >
          <CheckCircle2 size={18} className="text-[var(--accent-blue)] shrink-0" />
          <span className="text-sm text-slate-200">{state.message}</span>
        </div>
      ) : (
        <form
          onSubmit={submit}
          className="flex flex-col sm:flex-row gap-3 items-stretch"
          data-testid="email-capture-form"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="cine-input !py-3 flex-1"
            data-testid="email-capture-input"
            aria-label="Email"
          />
          <button
            type="submit"
            disabled={state.status === "loading"}
            className="btn-primary !py-3 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
            data-testid="email-capture-submit"
          >
            {state.status === "loading" ? "…" : "Get In"}
          </button>
        </form>
      )}
      {state.status === "error" && (
        <div className="mt-2 text-xs text-red-400" data-testid="email-capture-error">
          {state.message}
        </div>
      )}
      <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">
        First listens · Show announcements · No spam
      </p>
    </div>
  );
}
