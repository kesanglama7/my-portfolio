"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const lockRef = useRef(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (lockRef.current) return;
    lockRef.current = true;

    setLoading(true);

    const formEl = formRef.current; // ✅ store stable ref
    const form = new FormData(formEl ?? e.currentTarget);

    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      message: String(form.get("message") || ""),
      company: String(form.get("company") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: { ok?: boolean; message?: string } = await res
        .json()
        .catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Failed to send.");
      }

      toast.success("Sent.", { description: "I’ll get back to you soon." });

      // ✅ reset safely
      formRef.current?.reset();
    } catch (err: any) {
      toast.error("Not sent.", {
        description: err?.message || "Something went wrong.",
      });
    } finally {
      setLoading(false);
      lockRef.current = false;
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="mt-10 space-y-4 max-w-xl">
      {/* honeypot */}
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" />

      <div>
        <label className="text-sm text-black/70">Name</label>
        <input
          name="name"
          required
          minLength={2}
          className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black/40"
        />
      </div>

      <div>
        <label className="text-sm text-black/70">Email</label>
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black/40"
        />
      </div>

      <div>
        <label className="text-sm text-black/70">Message</label>
        <textarea
          name="message"
          required
          minLength={10}
          rows={6}
          className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black/40"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/20 px-5 py-3 text-sm cursor-pointer hover:bg-black hover:text-white transition disabled:pointer-events-none disabled:opacity-60"
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {loading ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
