import Image from "next/image";
import { ArrowRight, Star } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./ui/reveal";
import { company } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-bone">
      {/* мягкие фоновые контуры — тонкая топографика, декоративный слой */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-24 h-[560px] w-[560px] rounded-full border border-forest/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-52 h-[380px] w-[380px] rounded-full border border-forest/10"
      />

      <div className="mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 items-center gap-12 px-5 pb-16 pt-28 md:px-8 lg:grid-cols-12 lg:gap-10 lg:pt-24">
        {/* Левая колонка — сообщение */}
        <div className="lg:col-span-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-white/40 px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-forest/70 bezel-inset">
              Каркасное домостроение под ключ
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="display mt-7 text-[3.1rem] font-extrabold text-forest sm:text-6xl xl:text-[5rem]">
              Каркасный дом
              <br />
              под ключ за{" "}
              <span className="whitespace-nowrap text-amber">{company.buildTime}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-forest/75">
              Фиксированная смета без скрытых платежей и прозрачный процесс от
              проекта до сдачи ключей. Строим дома, дачи, бани и купели в Нижнем
              Новгороде и области.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-forest py-2.5 pl-7 pr-2.5 text-base font-semibold text-bone transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
              >
                Обсудить проект
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bone/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                  <ArrowRight size={18} weight="bold" />
                </span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-forest/25 px-7 py-4 text-base font-semibold text-forest transition-colors duration-300 hover:bg-forest/5"
              >
                Наши работы
              </a>
            </div>
          </Reveal>
        </div>

        {/* Правая колонка — фото объекта в double-bezel */}
        <div className="lg:col-span-6">
          <Reveal delay={0.2} y={32}>
            <div className="relative">
              <div className="rounded-[32px] bg-white/50 p-2 ring-1 ring-forest/10 shadow-soft-lg">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] sm:aspect-[16/12] lg:aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=80"
                    alt="Каркасный дом под ключ на закате, построенный компанией Ам Дом"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Плавающая карточка рейтинга внахлёст */}
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-forest px-5 py-4 text-bone shadow-soft-lg sm:left-6">
                <span className="flex items-center gap-0.5 text-amber-soft">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} weight="fill" />
                  ))}
                </span>
                <div className="text-sm leading-tight">
                  <span className="block font-bold">{company.rating} из 5 в 2ГИС</span>
                  <span className="block text-bone/70">только положительные отзывы</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
