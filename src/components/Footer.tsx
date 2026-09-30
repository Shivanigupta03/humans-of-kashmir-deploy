import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif-display text-lg italic text-ink">
              Humans of Kashmir
            </p>
            <p className="mt-2 max-w-xs text-sm text-ink-soft">
              A living archive of the people, crafts, and small businesses of
              the valley — one story, one pin at a time.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wide-caps text-ink-soft">
                Explore
              </span>
              <Link href="/stories" className="text-sm text-ink hover:text-accent">
                Stories
              </Link>
              <Link href="/map" className="text-sm text-ink hover:text-accent">
                Map
              </Link>
              <Link href="/about" className="text-sm text-ink hover:text-accent">
                About
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wide-caps text-ink-soft">
                Contribute
              </span>
              <Link href="/about#share" className="text-sm text-ink hover:text-accent">
                Share your story
              </Link>
              <Link href="/about#share" className="text-sm text-ink hover:text-accent">
                List a business
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Humans of Kashmir. All stories shared with consent.</p>
          <p className="tracking-wide-caps uppercase">Made in the valley</p>
        </div>
      </div>
    </footer>
  );
}
