"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import { categoryLabels, stories, type Story } from "@/lib/stories";

const KASHMIR_CENTER: [number, number] = [34.05, 74.85];

function pinIcon(active: boolean) {
  const color = active ? "#9c3b25" : "#171410";
  return L.divIcon({
    className: "hok-pin",
    html: `<svg width="26" height="34" viewBox="0 0 26 34" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 0C5.8 0 0 5.8 0 13c0 9.7 13 21 13 21s13-11.3 13-21C26 5.8 20.2 0 13 0z" fill="${color}"/>
      <circle cx="13" cy="13" r="5.5" fill="#faf7f1"/>
    </svg>`,
    iconSize: [26, 34],
    iconAnchor: [13, 34],
    popupAnchor: [0, -30],
  });
}

function FlyToStory({ story }: { story?: Story }) {
  const map = useMap();
  useEffect(() => {
    if (story) {
      map.flyTo([story.lat, story.lng], 12, { duration: 0.8 });
    }
  }, [story, map]);
  return null;
}

export default function MapView({ initialSlug }: { initialSlug?: string }) {
  const [activeSlug, setActiveSlug] = useState<string | undefined>(initialSlug);
  const markerRefs = useRef<Record<string, L.Marker | null>>({});

  const activeStory = useMemo(
    () => stories.find((s) => s.slug === activeSlug),
    [activeSlug]
  );

  useEffect(() => {
    if (activeSlug && markerRefs.current[activeSlug]) {
      markerRefs.current[activeSlug]?.openPopup();
    }
  }, [activeSlug]);

  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-[320px_1fr]">
      <aside className="order-2 h-full overflow-y-auto border-line bg-paper md:order-1 md:border-r">
        <div className="border-b border-line px-5 py-4">
          <p className="text-xs uppercase tracking-wide-caps text-ink-soft">
            {stories.length} locations
          </p>
        </div>
        <ul className="divide-y divide-line">
          {stories.map((story) => (
            <li key={story.slug}>
              <button
                onClick={() => setActiveSlug(story.slug)}
                className={`w-full px-5 py-4 text-left transition hover:bg-accent-soft ${
                  activeSlug === story.slug ? "bg-accent-soft" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-wide-caps text-ink-soft">
                  {categoryLabels[story.category]} · {story.district}
                </p>
                <p className="mt-1 font-serif-display text-lg leading-snug text-ink">
                  {story.title}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="order-1 h-[60vh] md:order-2 md:h-full">
        <MapContainer
          center={KASHMIR_CENTER}
          zoom={9}
          className="h-full w-full"
          scrollWheelZoom
        >
          <TileLayer
            attribution="Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          <FlyToStory story={activeStory} />
          {stories.map((story) => (
            <Marker
              key={story.slug}
              position={[story.lat, story.lng]}
              icon={pinIcon(story.slug === activeSlug)}
              ref={(ref) => {
                markerRefs.current[story.slug] = ref;
              }}
              eventHandlers={{
                click: () => setActiveSlug(story.slug),
              }}
            >
              <Popup>
                <div className="max-w-[220px]">
                  <p className="text-[10px] uppercase tracking-wide-caps text-ink-soft">
                    {categoryLabels[story.category]} · {story.location}
                  </p>
                  <p className="mt-1 font-serif-display text-base leading-snug text-ink">
                    {story.title}
                  </p>
                  <p className="mt-1 text-xs text-ink-soft line-clamp-3">
                    {story.excerpt}
                  </p>
                  <Link
                    href={`/stories/${story.slug}`}
                    className="mt-2 inline-block text-xs uppercase tracking-wide-caps text-accent underline underline-offset-4"
                  >
                    Read story →
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
