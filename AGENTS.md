<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Ам Дом — лендинг

Одностраничный лендинг строительной компании «Ам Дом» (каркасные дома, дачи, бани, купели, Нижний Новгород).

## Стек
- Next.js 16 (App Router, RSC) + React 19 + TypeScript
- Tailwind CSS v4 (токены в `app/globals.css` через `@theme`)
- Motion (`motion/react`) — scroll-reveal и микроанимации
- Иконки: `@phosphor-icons/react`
- Шрифты: Manrope (display) + Golos Text (body), сабсет `cyrillic` через `next/font`

## Структура
- `app/page.tsx` — сборка секций + JSON-LD (LocalBusiness/FAQ)
- `app/layout.tsx` — шрифты, SEO-метаданные, OpenGraph
- `app/api/lead/route.ts` — приём заявок (серверная валидация)
- `components/*` — секции (hero, services, values, process, projects, testimonials, faq, contact, header, footer)
- `components/ui/*` — примитивы (Reveal, Logo)
- `lib/content.ts` — единый источник контента (услуги, отзывы, FAQ, статистика, фото)

## Команды
- `npm run dev` / `npm run build` / `npm run lint`

## Дизайн-договорённости
- Палитра залочена: лес `#004741` + костяной `#F0EDE4`, единственный акцент — янтарь `#cf934a`. Тема одна (light), без dark-инверсии.
- Радиусы: кнопки — pill, карточки — 24-28px, инпуты — 12px.
- Строгий запрет em/en-dash в видимом тексте (taste-skill).

## Что НЕ делать / открытые задачи перед боевым запуском
- **Фото объектов — временные заглушки Unsplash** (`lib/content.ts`: `gallery`, `services[].image`). Заменить на реальные фото объектов.
- **Форма заявки не доставляется** — `app/api/lead` только валидирует и логирует. Подключить email/Telegram/CRM.
- Уточнить у клиента: реквизиты/договор/гарантия, мессенджеры, домен, реальный логотип (сейчас временный SVG-знак в `components/ui/logo.tsx`).
