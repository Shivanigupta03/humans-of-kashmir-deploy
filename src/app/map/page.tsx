import { Suspense } from "react";
import MapClientShell from "@/components/MapClientShell";

export const metadata = {
  title: "Story Map — Humans of Kashmir",
};

export default function MapPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b border-ink px-6 py-6">
        <p className="text-xs uppercase tracking-wide-caps text-ink-soft">
          Interactive
        </p>
        <h1 className="mt-1 font-serif-display text-3xl text-ink sm:text-4xl">
          The Story Map of Kashmir
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-ink-soft">
          A satellite view of the valley. Click any pin to open the story of
          the person who lives or works there.
        </p>
      </div>
      <div className="h-[calc(100vh-196px)] min-h-[520px]">
        <Suspense
          fallback={
            <div className="flex h-full items-center justify-center text-sm uppercase tracking-wide-caps text-ink-soft">
              Loading map…
            </div>
          }
        >
          <MapClientShell />
        </Suspense>
      </div>
    </div>
  );
}
