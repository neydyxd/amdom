import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./ui/reveal";
import { gallery } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-bone-200/60 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="display max-w-[16ch] text-4xl font-extrabold text-forest md:text-5xl">
              Дома, которые мы построили
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-base font-semibold text-forest"
            >
              Хочу такой же дом
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {gallery.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06}>
              <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[24px] ring-1 ring-forest/10 shadow-soft transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-soft-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
