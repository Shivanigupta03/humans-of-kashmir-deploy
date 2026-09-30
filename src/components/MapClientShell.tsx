"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import "leaflet/dist/leaflet.css";

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-sm uppercase tracking-wide-caps text-ink-soft">
      Loading map…
    </div>
  ),
});

export default function MapClientShell() {
  const searchParams = useSearchParams();
  const initialSlug = searchParams.get("slug") ?? undefined;
  return <MapView initialSlug={initialSlug} />;
}
