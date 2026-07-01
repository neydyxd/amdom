import { Star } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./ui/reveal";
import { stats, company } from "@/lib/content";

export function StatsBand() {
  return (
    <section className="bg-forest text-bone">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div>
                <div className="display flex items-baseline gap-1.5 text-5xl font-extrabold text-bone md:text-6xl">
                  {s.value}
                  {s.unit && (
                    <span className="text-base font-semibold text-amber-soft">
                      {s.unit}
                    </span>
                  )}
                </div>
                <p className="mt-3 max-w-[22ch] text-sm leading-snug text-bone/70">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-bone/15 pt-6 text-sm text-bone/70">
            <span className="inline-flex items-center gap-1 text-amber-soft">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} weight="fill" />
              ))}
            </span>
            <span className="font-semibold text-bone">{company.rating} из 5</span>
            <span>по оценкам клиентов в 2ГИС. Все отзывы положительные.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
