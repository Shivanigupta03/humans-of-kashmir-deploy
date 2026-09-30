export default function SectionHeading({
  eyebrow,
  action,
}: {
  eyebrow: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between border-b border-ink pb-3">
      <h2 className="font-serif-display text-sm uppercase tracking-wide-caps text-ink">
        {eyebrow}
      </h2>
      {action}
    </div>
  );
}
