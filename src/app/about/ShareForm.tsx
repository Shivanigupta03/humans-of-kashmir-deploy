"use client";

import { useState } from "react";

export default function ShareForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-line bg-accent-soft px-6 py-8 text-ink">
        <p className="font-serif-display text-xl">Thank you.</p>
        <p className="mt-2 text-ink-soft">
          We&apos;ve noted the details. Someone from the team will reach out
          before any story goes up.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      <label className="flex flex-col gap-2 text-sm">
        <span className="text-xs uppercase tracking-wide-caps text-ink-soft">
          Your name
        </span>
        <input
          required
          type="text"
          className="border border-line bg-transparent px-3 py-2.5 text-ink outline-none focus:border-ink"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm">
        <span className="text-xs uppercase tracking-wide-caps text-ink-soft">
          Contact (phone or email)
        </span>
        <input
          required
          type="text"
          className="border border-line bg-transparent px-3 py-2.5 text-ink outline-none focus:border-ink"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm sm:col-span-2">
        <span className="text-xs uppercase tracking-wide-caps text-ink-soft">
          Who should we talk to, and where are they located?
        </span>
        <input
          required
          type="text"
          placeholder="e.g. Ghulam, a papier-mâché artist near Zaina Kadal, Srinagar"
          className="border border-line bg-transparent px-3 py-2.5 text-ink outline-none focus:border-ink"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm sm:col-span-2">
        <span className="text-xs uppercase tracking-wide-caps text-ink-soft">
          A little about their story
        </span>
        <textarea
          required
          rows={4}
          className="resize-none border border-line bg-transparent px-3 py-2.5 text-ink outline-none focus:border-ink"
        />
      </label>
      <button
        type="submit"
        className="w-fit rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-wide-caps text-paper transition hover:bg-accent"
      >
        Submit
      </button>
    </form>
  );
}
