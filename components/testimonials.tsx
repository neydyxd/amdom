import { Quotes, Star } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./ui/reveal";
import { reviews, company } from "@/lib/content";

function Stars({ tone = "amber" }: { tone?: "amber" | "amber-soft" }) {
  return (
    <span
      className={`flex items-center gap-0.5 ${tone === "amber-soft" ? "text-amber-soft" : "text-amber"}`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} weight="fill" />
      ))}
    </span>
  );
}

function Avatar({ name, dark }: { name: string; dark?: boolean }) {
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold ${
        dark ? "bg-bone/15 text-bone" : "bg-forest text-bone"
      }`}
    >
      {name.charAt(0)}
    </span>
  );
}

export function Testimonials() {
  const [featured, ...rest] = reviews;

  return (
    <section id="reviews" className="scroll-mt-24 bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="display max-w-[15ch] text-4xl font-extrabold text-forest md:text-6xl">
              Что говорят клиенты
            </h2>
            <div className="flex items-center gap-3">
              <Stars />
              <span className="text-forest/70">
                <span className="font-semibold text-forest">{company.rating} из 5</span>{" "}
                в 2ГИС
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Featured — крупный отзыв на форесте */}
          <Reveal className="lg:col-span-5" y={28}>
            <figure className="flex h-full flex-col justify-between rounded-[28px] bg-forest p-8 text-bone shadow-soft-lg md:p-10">
              <div>
                <Quotes size={44} weight="fill" className="text-amber-soft" />
                <blockquote className="mt-6 text-2xl font-medium leading-snug text-bone md:text-[1.7rem]">
                  {featured.text}
                </blockquote>
              </div>
              <figcaption className="mt-10 flex items-center gap-4 border-t border-bone/15 pt-6">
                <Avatar name={featured.name} dark />
                <span>
                  <span className="block font-semibold text-bone">{featured.name}</span>
                  <span className="block text-sm text-bone/60">{featured.date}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Остальные — равные карточки */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-1 xl:grid-cols-3">
            {rest.map((r, i) => (
              <Reveal key={r.name} className="h-full" delay={0.08 + i * 0.07}>
                <figure className="flex h-full flex-col rounded-[26px] border border-forest/10 bg-white/55 p-7 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:shadow-soft">
                  <Stars />
                  <blockquote className="mt-5 flex-1 leading-relaxed text-forest/85">
                    {r.text}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-forest/10 pt-5">
                    <Avatar name={r.name} />
                    <span>
                      <span className="block font-semibold text-forest">{r.name}</span>
                      <span className="block text-sm text-forest/55">{r.date}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
