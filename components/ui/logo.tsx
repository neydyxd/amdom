/**
 * Логотип «Ам Дом» — простой геометрический знак (крыша-домик + вордмарк).
 * Единичный минималистичный SVG-знак допустим по taste-skill: у клиента
 * нет брендбука (см. brief.md), временный лого до утверждения фирменного.
 */
export function Logo({
  className = "",
  tone = "forest",
}: {
  className?: string;
  tone?: "forest" | "bone";
}) {
  const color = tone === "bone" ? "#f0ede4" : "#004741";
  const accent = "#cf934a";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M4 15.5 16 5l12 10.5"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 14v12h18V14"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13 26v-6.5h6V26" stroke={accent} strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span
        className="display text-[1.35rem] font-extrabold tracking-tight"
        style={{ color }}
      >
        Ам&nbsp;Дом
      </span>
    </span>
  );
}
