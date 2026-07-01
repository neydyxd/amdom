import { Reveal } from "./ui/reveal";
import { values } from "@/lib/content";

export function Values() {
  return (
    <section className="bg-forest py-24 text-bone md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <h2 className="display max-w-[16ch] text-4xl font-extrabold text-bone md:text-5xl">
            Почему клиенты выбирают нас снова
          </h2>
          <p className="mt-5 max-w-[54ch] text-lg leading-relaxed text-bone/70">
            Мы собрали то, за что нас чаще всего благодарят в отзывах. Это не
            обещания с сайта, а слова людей, которые уже живут в наших домах.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <div className="flex gap-5 border-t border-bone/15 pt-6">
                <span className="display shrink-0 text-3xl font-extrabold text-amber-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-bone">{v.title}</h3>
                  <p className="mt-2 max-w-[42ch] leading-relaxed text-bone/70">
                    {v.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
