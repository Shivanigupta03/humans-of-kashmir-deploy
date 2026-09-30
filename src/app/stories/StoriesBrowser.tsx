"use client";

import { useMemo, useState } from "react";
import StoryCard from "@/components/StoryCard";
import type { Story, StoryCategory } from "@/lib/stories";

const tabs: { key: StoryCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "story", label: "Stories" },
  { key: "business", label: "Businesses" },
  { key: "voice", label: "Voices" },
];

export default function StoriesBrowser({
  stories,
  initialCategory,
}: {
  stories: Story[];
  initialCategory: StoryCategory | "all";
}) {
  const [active, setActive] = useState<StoryCategory | "all">(initialCategory);

  const filtered = useMemo(
    () => (active === "all" ? stories : stories.filter((s) => s.category === active)),
    [active, stories]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-6 border-b border-ink pb-3 text-xs uppercase tracking-wide-caps">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={
              active === tab.key
                ? "text-ink"
                : "text-ink-soft transition hover:text-ink"
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-ink-soft">No stories in this category yet.</p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      )}
    </div>
  );
}
