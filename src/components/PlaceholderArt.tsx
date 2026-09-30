const PALETTES = [
  { bg: "#e7ddca", fg: "#5c4a34" },
  { bg: "#ded0c9", fg: "#7a3b2a" },
  { bg: "#d9e0d6", fg: "#3f5142" },
  { bg: "#e3d7e6", fg: "#5b3f63" },
  { bg: "#dbe2e6", fg: "#33505c" },
];

function paletteFor(seed: string) {
  const index = Array.from(seed).reduce((sum, c) => sum + c.charCodeAt(0), 0);
  return PALETTES[index % PALETTES.length];
}

const SCENES: Record<string, (fg: string) => React.ReactNode> = {
  mountains: (fg) => (
    <>
      <path d="M0 150 L60 90 L110 130 L170 60 L230 140 L300 150 Z" fill={fg} opacity={0.9} />
      <circle cx="245" cy="55" r="16" fill={fg} opacity={0.5} />
    </>
  ),
  lake: (fg) => (
    <>
      <path d="M0 155 L70 100 L140 150 L210 80 L300 150 Z" fill={fg} opacity={0.55} />
      <path d="M40 175 Q90 160 140 175 T240 175 T300 178 L300 200 L0 200 Z" fill={fg} opacity={0.9} />
      <path d="M120 160 q10 -14 22 0 l-4 14 h-16z" fill={fg} />
      <line x1="132" y1="160" x2="132" y2="130" stroke={fg} strokeWidth="2" />
    </>
  ),
  chinar: (fg) => (
    <>
      <path
        d="M150 50 L162 85 L198 80 L172 105 L188 140 L150 118 L112 140 L128 105 L102 80 L138 85 Z"
        fill={fg}
        opacity={0.85}
      />
      <line x1="150" y1="118" x2="150" y2="165" stroke={fg} strokeWidth="3" opacity={0.7} />
    </>
  ),
  saffron: (fg) => (
    <>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${90 + i * 60} 110)`}>
          <ellipse cx="0" cy="0" rx="22" ry="30" fill={fg} opacity={0.25} />
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx="0"
              cy="0"
              rx="7"
              ry="18"
              fill={fg}
              opacity={0.85}
              transform={`rotate(${a})`}
            />
          ))}
        </g>
      ))}
    </>
  ),
  weave: (fg) => (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`h${i}`} x1="20" y1={40 + i * 20} x2="280" y2={40 + i * 20} stroke={fg} strokeWidth="3" opacity={0.5} />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`v${i}`} x1={20 + i * 26} y1="40" x2={20 + i * 26} y2="140" stroke={fg} strokeWidth="3" opacity={0.5} />
      ))}
    </>
  ),
  market: (fg) => (
    <>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={60 + i * 50} y={110 - (i % 2) * 20} width="38" height="38" fill={fg} opacity={0.75} />
      ))}
    </>
  ),
};

const sceneKeys = Object.keys(SCENES);

export default function PlaceholderArt({
  seed,
  scene,
  className,
}: {
  seed: string;
  scene?: keyof typeof SCENES;
  className?: string;
}) {
  const { bg, fg } = paletteFor(seed);
  const key =
    scene ??
    sceneKeys[Array.from(seed).reduce((s, c) => s + c.charCodeAt(0), 0) % sceneKeys.length];
  const render = SCENES[key] ?? SCENES.mountains;

  return (
    <svg
      viewBox="0 0 300 200"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="Illustrative placeholder artwork"
    >
      <rect width="300" height="200" fill={bg} />
      {render(fg)}
    </svg>
  );
}
