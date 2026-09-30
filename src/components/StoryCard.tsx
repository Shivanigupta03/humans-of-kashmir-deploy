import Link from "next/link";
import PlaceholderArt from "./PlaceholderArt";
import { categoryLabels, type Story } from "@/lib/stories";
import { sceneForTag } from "@/lib/sceneForTag";

export default function StoryCard({ story }: { story: Story }) {
  return (
    <Link href={`/stories/${story.slug}`} className="group flex flex-col">
      <div className="aspect-[4/3] overflow-hidden">
        <PlaceholderArt
          seed={story.slug}
          scene={sceneForTag(story.tag)}
          className="h-full w-full transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between pt-4 text-xs uppercase tracking-wide-caps text-ink-soft">
        <span>{categoryLabels[story.category]}</span>
        <span>{story.district}</span>
      </div>
      <h3 className="mt-2 font-serif-display text-xl leading-snug text-ink group-hover:text-accent">
        {story.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft line-clamp-3">
        {story.excerpt}
      </p>
    </Link>
  );
}
