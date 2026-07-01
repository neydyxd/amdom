"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  CheckCircle,
  CircleNotch,
} from "@phosphor-icons/react";
import { company, services } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

type Errors = { name?: string; phone?: string };

function validate(name: string, phone: string): Errors {
  const errors: Errors = {};
  if (name.trim().length < 2) errors.name = "Укажите имя";
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10) errors.phone = "Укажите корректный номер телефона";
  return errors;
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");

    const found = validate(name, phone);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          service: String(data.get("service") ?? ""),
          message: String(data.get("message") ?? ""),
        }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-forest py-24 text-bone md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Левая — приглашение и контакты */}
        <div>
          <h2 className="display max-w-[16ch] text-4xl font-extrabold text-bone md:text-5xl">
            Обсудим ваш дом
          </h2>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-bone/75">
            Оставьте заявку, перезвоним и зададим пару вопросов об участке.
            Бесплатно подготовим предварительный расчёт стоимости и сроков.
          </p>

          <dl className="mt-10 space-y-5">
            <ContactRow icon={<Phone size={22} weight="fill" />} label="Телефон">
              <a href={company.phoneHref} className="link-underline">
                {company.phone}
              </a>
            </ContactRow>
            <ContactRow icon={<EnvelopeSimple size={22} weight="fill" />} label="Почта">
              <a href={company.emailHref} className="link-underline">
                {company.email}
              </a>
            </ContactRow>
            <ContactRow icon={<MapPin size={22} weight="fill" />} label="Офис">
              {company.address}
            </ContactRow>
            <ContactRow icon={<Clock size={22} weight="fill" />} label="Режим работы">
              {company.hours}
            </ContactRow>
          </dl>
        </div>

        {/* Правая — форма */}
        <div className="rounded-[28px] bg-bone p-6 text-ink shadow-soft-lg ring-1 ring-black/5 md:p-9">
          {status === "success" ? (
            <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
              <CheckCircle size={56} weight="fill" className="text-forest" />
              <h3 className="display mt-5 text-2xl font-bold text-forest">
                Заявка отправлена
              </h3>
              <p className="mt-3 max-w-[36ch] text-forest/70">
                Спасибо! Мы свяжемся с вами в ближайшее рабочее время. Если
                вопрос срочный, позвоните нам напрямую.
              </p>
              <a
                href={company.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 font-semibold text-bone"
              >
                <Phone size={18} weight="fill" />
                {company.phone}
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
              <Field
                label="Как вас зовут"
                name="name"
                placeholder="Иван"
                error={errors.name}
                autoComplete="name"
              />
              <Field
                label="Телефон"
                name="phone"
                type="tel"
                placeholder="+7 900 000-00-00"
                error={errors.phone}
                autoComplete="tel"
              />

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-semibold text-forest">
                  Что хотите построить
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue={services[0].title}
                  className="rounded-xl border border-forest/20 bg-white px-4 py-3 text-forest outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-amber/40"
                >
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Другое">Другое / пока не решил</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-forest">
                  Комментарий{" "}
                  <span className="font-normal text-forest/50">(необязательно)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Площадь, участок, пожелания по срокам"
                  className="resize-none rounded-xl border border-forest/20 bg-white px-4 py-3 text-forest placeholder:text-forest/40 outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-amber/40"
                />
              </div>

              {status === "error" && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  Не удалось отправить заявку. Попробуйте ещё раз или позвоните
                  нам напрямую.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 text-base font-semibold text-bone transition-transform duration-200 hover:bg-forest-700 active:scale-[0.98] disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <CircleNotch size={20} className="animate-spin" />
                    Отправляем
                  </>
                ) : (
                  "Отправить заявку"
                )}
              </button>
              <p className="text-center text-xs leading-relaxed text-forest/50">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bone/10 text-amber-soft">
        {icon}
      </span>
      <div>
        <dt className="text-sm text-bone/55">{label}</dt>
        <dd className="mt-0.5 text-lg font-medium text-bone">{children}</dd>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-forest">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={!!error}
        className={`rounded-xl border bg-white px-4 py-3 text-forest placeholder:text-forest/40 outline-none transition-colors focus:ring-2 focus:ring-amber/40 ${
          error ? "border-red-400" : "border-forest/20 focus:border-forest"
        }`}
        {...rest}
      />
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
}
