import { NextResponse } from "next/server";

/*
  Приём заявок с лендинга. Серверная валидация обязательна (не доверяем клиенту).
  Отправка письма/интеграция с CRM не подключена: у клиента пока нет почтового
  бэкенда и мессенджеров (см. brief.md). Сейчас заявка валидируется и логируется —
  подключить nodemailer/Telegram-бота/CRM перед боевым запуском.
*/

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
};

function sanitize(value: unknown, max = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = sanitize(body.name, 120);
  const phone = sanitize(body.phone, 40);
  const service = sanitize(body.service, 120);
  const message = sanitize(body.message, 1000);

  const digits = phone.replace(/\D/g, "");
  if (name.length < 2 || digits.length < 10) {
    return NextResponse.json(
      { ok: false, error: "validation_failed" },
      { status: 422 },
    );
  }

  // TODO(client): подключить доставку заявки (email / Telegram / CRM).
  console.info("[lead]", { name, phone, service, message, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
