import { Reveal } from "./ui/reveal";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-amber">
            Как мы работаем
          </span>
          <h2 className="display mt-3 max-w-[20ch] text-4xl font-extrabold text-forest md:text-5xl">
            Прозрачный путь от идеи до ключей
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-x-6">
          {/* соединительная линия на десктопе */}
          <div
            aria-hidden
            className="absolute left-8 right-8 top-[31px] hidden h-px bg-forest/15 md:block"
          />
          {processSteps.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.1}>
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-xl font-bold text-bone shadow-soft ring-4 ring-bone">
                  {step.no}
                </div>
                <h3 className="display mt-6 text-2xl font-bold text-forest">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[30ch] leading-relaxed text-forest/70">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
