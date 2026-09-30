import Link from "next/link";
import PlaceholderArt from "@/components/PlaceholderArt";
import SectionHeading from "@/components/SectionHeading";
import StoryCard from "@/components/StoryCard";
import { categoryLabels, stories } from "@/lib/stories";
import { sceneForTag } from "@/lib/sceneForTag";

const featured = stories.slice(0, 3);
const gridPicks = stories.slice(3, 7);

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-16">
        <div className="grid grid-cols-1 items-end gap-8 border-t border-b border-ink py-10 md:grid-cols-[1.4fr_1fr]">
          <h1 className="font-serif-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            STORIES AND
            <br />
            BUSINESSES OF
            <br />
            THE PEOPLE OF
            <br />
            KASHMIR
          </h1>
          <div className="aspect-[4/3] w-full self-center overflow-hidden">
            <PlaceholderArt seed="hero-lake" scene="lake" className="h-full w-full" />
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-ink-soft">
            A living archive of the valley — craftspeople, farmers, teachers,
            ferrymen, and shopkeepers, each recorded in their own words and
            placed exactly where they live.
          </p>
          <div className="flex shrink-0 gap-3">
            <Link
              href="/stories"
              className="rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-wide-caps text-paper transition hover:bg-accent"
            >
              Read the Stories
            </Link>
            <Link
              href="/map"
              className="rounded-full border border-ink px-6 py-3 text-xs uppercase tracking-wide-caps text-ink transition hover:bg-ink hover:text-paper"
            >
              Open the Map
            </Link>
          </div>
        </div>
      </section>

      {/* Featured list */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeading eyebrow="Featured" />
        <ul className="divide-y divide-line">
          {featured.map((story) => (
            <li key={story.slug}>
              <Link
                href={`/stories/${story.slug}`}
                className="group grid grid-cols-1 gap-2 py-6 sm:grid-cols-[140px_1fr_auto] sm:items-center sm:gap-6"
              >
                <div className="text-xs uppercase tracking-wide-caps text-ink-soft">
                  <p>{categoryLabels[story.category]}</p>
                  <p className="mt-1">{story.district}</p>
                </div>
                <div>
                  <h3 className="font-serif-display text-2xl text-ink group-hover:text-accent">
                    {story.title}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm text-ink-soft line-clamp-2">
                    {story.excerpt}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="hidden text-2xl text-ink-soft transition group-hover:translate-x-1 group-hover:text-accent sm:block"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Best of grid, tabs style */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionHeading
          eyebrow="From the Valley"
          action={
            <div className="hidden gap-6 text-xs uppercase tracking-wide-caps text-ink-soft sm:flex">
              <span className="text-ink">Stories</span>
              <span>Businesses</span>
              <span>Voices</span>
            </div>
          }
        />
        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {gridPicks.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </section>

      {/* Map teaser */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <SectionHeading eyebrow="On the Map" />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <h2 className="font-serif-display text-3xl leading-tight text-ink sm:text-4xl">
              Every story has a place. Every place has a pin.
            </h2>
            <p className="mt-4 max-w-md text-ink-soft">
              Explore a satellite map of Kashmir and click on any pin to open
              the story of the person who lives or works there — from the
              houseboats of Dal Lake to the saffron fields of Pampore.
            </p>
            <Link
              href="/map"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-xs uppercase tracking-wide-caps text-paper transition hover:opacity-90"
            >
              View the Story Map
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden border border-line">
            <PlaceholderArt seed="map-teaser" scene="mountains" className="h-full w-full" />
          </div>
        </div>
      </section>

      {/* Tour-style scroller */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHeading eyebrow="Districts" />
        <div className="mt-8 flex gap-6 overflow-x-auto pb-2">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="group w-40 shrink-0"
            >
              <div className="aspect-square overflow-hidden">
                <PlaceholderArt
                  seed={story.slug + "-thumb"}
                  scene={sceneForTag(story.tag)}
                  className="h-full w-full transition group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-ink group-hover:text-accent">
                {story.district}
              </p>
              <p className="text-xs text-ink-soft">{story.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
