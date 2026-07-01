import { Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./ui/logo";
import { company } from "@/lib/content";

const NAV = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Как работаем" },
  { href: "#projects", label: "Проекты" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contact", label: "Контакты" },
];

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="bone" />
            <p className="mt-5 max-w-[38ch] leading-relaxed text-bone/60">
              {company.tagline}. Каркасные дома, дачи, коттеджи, бани и купели
              под ключ в Нижнем Новгороде и области.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Разделы сайта">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-bone/40">
              Разделы
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline text-bone/80 hover:text-bone">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-bone/40">
              Контакты
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 text-lg font-semibold text-bone"
                >
                  <Phone size={20} weight="fill" className="text-amber-soft" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="flex items-center gap-3 text-bone/80"
                >
                  <EnvelopeSimple size={20} weight="fill" className="text-amber-soft" />
                  {company.email}
                </a>
              </li>
              <li className="text-bone/60">{company.address}</li>
              <li className="text-bone/60">{company.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-bone/10 pt-6 text-sm text-bone/45 md:flex-row md:items-center md:justify-between">
          <span>
            © {year} «Ам Дом». Строительство каркасных домов в Нижнем Новгороде.
          </span>
          <span>Оплата по безналичному расчёту через банк.</span>
        </div>
      </div>
    </footer>
  );
}
