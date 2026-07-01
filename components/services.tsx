import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./ui/reveal";
import { services, type Service } from "@/lib/content";

function ServiceCard({ service, large }: { service: Service; large?: boolean }) {
  return (
    <a
      href="#contact"
      className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-forest/10 bg-white/55 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:border-forest/20 hover:shadow-soft-lg"
    >
      <div
        className={`relative w-full overflow-hidden ${large ? "aspect-[16/10]" : "aspect-[16/11]"}`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3
            className={`display font-bold text-forest ${large ? "text-3xl md:text-[2.1rem]" : "text-2xl"}`}
          >
            {service.title}
          </h3>
          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest/8 text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-bone">
            <ArrowUpRight size={18} weight="bold" />
          </span>
        </div>

        <p className="mt-3 max-w-[52ch] text-[0.98rem] leading-relaxed text-forest/70">
          {service.blurb}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {service.points.map((p) => (
            <li
              key={p}
              className="rounded-full bg-bone-200 px-3 py-1.5 text-[0.8rem] font-medium text-forest/75"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-amber">
            Услуги
          </span>
          <h2 className="display mt-3 max-w-[18ch] text-4xl font-extrabold text-forest md:text-5xl">
            Что мы строим
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <Reveal className="h-full lg:col-span-7" y={28}>
            <ServiceCard service={services[0]} large />
          </Reveal>
          <Reveal className="h-full lg:col-span-5" y={28} delay={0.08}>
            <ServiceCard service={services[1]} />
          </Reveal>
          <Reveal className="h-full lg:col-span-5" y={28} delay={0.04}>
            <ServiceCard service={services[2]} />
          </Reveal>
          <Reveal className="h-full lg:col-span-7" y={28} delay={0.1}>
            <ServiceCard service={services[3]} large />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
