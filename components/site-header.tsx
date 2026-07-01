"use client";

import { useEffect, useState } from "react";
import { List, X, Phone } from "@phosphor-icons/react";
import { Logo } from "./ui/logo";
import { company } from "@/lib/content";

const NAV = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Как работаем" },
  { href: "#projects", label: "Проекты" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "Вопросы" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:pt-5">
      <div
        className={`relative z-10 mx-auto flex h-[60px] max-w-[1180px] items-center justify-between rounded-full pl-5 pr-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:pl-7 ${
          scrolled
            ? "border border-forest/10 bg-bone/80 shadow-float backdrop-blur-xl"
            : "border border-transparent bg-bone/40 backdrop-blur-md"
        }`}
      >
        <a href="#top" aria-label="Ам Дом, на главную">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-[0.92rem] font-medium text-forest/80 hover:text-forest"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-[0.92rem] font-semibold text-forest"
          >
            <Phone size={17} weight="fill" />
            {company.phone}
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-forest py-2 pl-5 pr-2 text-[0.88rem] font-semibold text-bone transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
          >
            Обсудить проект
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bone/15 transition-transform duration-300 group-hover:translate-x-0.5">
              <Phone size={14} weight="fill" />
            </span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full text-forest lg:hidden"
        >
          {open ? <X size={26} /> : <List size={26} />}
        </button>
      </div>

      {/* Мобильное меню — полноэкранный glass-overlay */}
      {open && (
        <div className="fixed inset-0 -z-0 flex flex-col justify-center gap-1 bg-bone/95 px-6 backdrop-blur-2xl lg:hidden">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${80 + i * 55}ms` }}
              className="animate-[revealUp_0.6s_var(--ease-out-quint)_both] border-b border-forest/10 py-5 text-4xl font-extrabold tracking-tight text-forest display"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-10 flex flex-col gap-3">
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 text-xl font-semibold text-forest"
            >
              <Phone size={22} weight="fill" />
              {company.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-forest px-6 py-4 text-center text-base font-semibold text-bone"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
