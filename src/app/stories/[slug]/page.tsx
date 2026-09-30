import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderArt from "@/components/PlaceholderArt";
import { categoryLabels, getAllSlugs, getStoryBySlug, stories } from "@/lib/stories";
import { sceneForTag } from "@/lib/sceneForTag";
import StoryCard from "@/components/StoryCard";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/stories/[slug]">) {
  const { slug } = await props.params;
  const story = getStoryBySlug(slug);
  return { title: story ? `${story.title} — Humans of Kashmir` : "Not found" };
}

export default async function StoryPage(props: PageProps<"/stories/[slug]">) {
  const { slug } = await props.params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const related = stories
    .filter((s) => s.slug !== story.slug && s.district === story.district)
    .slice(0, 3);
  const fallbackRelated = stories.filter((s) => s.slug !== story.slug).slice(0, 3);
  const relatedStories = related.length > 0 ? related : fallbackRelated;

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <Link
        href="/stories"
        className="text-xs uppercase tracking-wide-caps text-ink-soft hover:text-ink"
      >
        ← Back to Stories
      </Link>

      <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-wide-caps text-ink-soft">
        <span>{categoryLabels[story.category]}</span>
        <span>·</span>
        <span>{story.tag}</span>
      </div>

      <h1 className="mt-3 font-serif-display text-4xl leading-tight text-ink sm:text-5xl">
        {story.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-soft">
        <span>{story.location}</span>
        <span aria-hidden>•</span>
        <span>
          {new Date(story.date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span aria-hidden>•</span>
        <span>{story.author}</span>
      </div>

      <div className="mt-8 aspect-[16/9] overflow-hidden">
        <PlaceholderArt seed={story.slug} scene={sceneForTag(story.tag)} className="h-full w-full" />
      </div>

      <p className="mt-8 font-serif-display text-2xl italic leading-snug text-ink">
        {story.excerpt}
      </p>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-ink">
        {story.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 border-t border-line pt-6">
        <Link
          href={`/map?slug=${story.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-xs uppercase tracking-wide-caps text-ink transition hover:bg-ink hover:text-paper"
        >
          View on the Map →
        </Link>
      </div>

      <div className="mt-16 border-t border-ink pt-8">
        <h2 className="font-serif-display text-sm uppercase tracking-wide-caps text-ink">
          More from the Archive
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {relatedStories.map((s) => (
            <StoryCard key={s.slug} story={s} />
          ))}
        </div>
      </div>
    </article>
  );
}
