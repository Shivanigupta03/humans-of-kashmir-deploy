import PlaceholderArt from "@/components/PlaceholderArt";
import SectionHeading from "@/components/SectionHeading";
import ShareForm from "./ShareForm";

export const metadata = {
  title: "About — Humans of Kashmir",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <p className="text-xs uppercase tracking-wide-caps text-ink-soft">
        About the Archive
      </p>
      <h1 className="mt-2 font-serif-display text-5xl leading-tight text-ink sm:text-6xl">
        Every valley is made of people, not just mountains.
      </h1>

      <div className="mt-10 aspect-[21/9] overflow-hidden">
        <PlaceholderArt seed="about-hero" scene="mountains" className="h-full w-full" />
      </div>

      <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink-soft">
        <p>
          Humans of Kashmir is a small, growing archive of the everyday
          people of the valley — craftspeople, farmers, teachers, boatmen,
          shopkeepers, and shawl weavers — told in their own words and placed
          exactly where they live and work.
        </p>
        <p>
          Every story is recorded with the consent of the person telling it.
          We keep names, but change nothing about their words. Each story is
          pinned to a real location on the story map, so the archive reads
          as much like a map of the valley as it does a book about it.
        </p>
      </div>

      <div className="mt-16" id="share">
        <SectionHeading eyebrow="Share a Story or a Business" />
        <p className="mt-6 max-w-2xl text-ink-soft">
          Know someone whose story belongs here — a craftsperson, a shop, a
          farmer, a teacher? Tell us a little about them below and we&apos;ll
          get in touch to record it properly.
        </p>
        <div className="mt-8">
          <ShareForm />
        </div>
      </div>
    </div>
  );
}
