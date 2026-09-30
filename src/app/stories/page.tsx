import StoriesBrowser from "./StoriesBrowser";
import { stories, type StoryCategory } from "@/lib/stories";

export const metadata = {
  title: "Stories — Humans of Kashmir",
};

const validCategories: StoryCategory[] = ["story", "business", "voice"];

export default async function StoriesPage(props: PageProps<"/stories">) {
  const searchParams = await props.searchParams;
  const raw = searchParams.category;
  const category = Array.isArray(raw) ? raw[0] : raw;
  const initialCategory =
    category && validCategories.includes(category as StoryCategory)
      ? (category as StoryCategory)
      : "all";

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className="border-b border-ink pb-8">
        <p className="text-xs uppercase tracking-wide-caps text-ink-soft">
          The Archive
        </p>
        <h1 className="mt-2 font-serif-display text-5xl leading-tight text-ink sm:text-6xl">
          Stories &amp; Businesses
        </h1>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Every entry here was recorded with the consent of the person telling
          it. Browse by category, or find them all on the{" "}
          <a href="/map" className="text-accent underline underline-offset-4">
            map
          </a>
          .
        </p>
      </div>

      <div className="pt-10">
        <StoriesBrowser stories={stories} initialCategory={initialCategory} />
      </div>
    </div>
  );
}
