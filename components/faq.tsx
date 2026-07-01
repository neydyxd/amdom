"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { faq } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="scroll-mt-24 bg-bone py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="display text-4xl font-extrabold text-forest md:text-5xl">
            Частые вопросы
          </h2>
          <p className="mt-5 max-w-[34ch] leading-relaxed text-forest/70">
            Не нашли ответ? Позвоните нам, ответим на всё и поможем оценить ваш
            проект.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="divide-y divide-forest/12 border-t border-forest/12">
            {faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={`text-lg font-semibold transition-colors duration-300 md:text-xl ${
                        isOpen ? "text-forest" : "text-forest/80 group-hover:text-forest"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-forest text-bone"
                          : "border border-forest/25 text-forest group-hover:bg-forest/5"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={18} weight="bold" />
                      ) : (
                        <Plus size={18} weight="bold" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[62ch] pb-6 leading-relaxed text-forest/70">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
