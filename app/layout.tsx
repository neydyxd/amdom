import type { Metadata } from "next";
import { Manrope, Golos_Text } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://amdom.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Ам Дом. Строительство каркасных домов, дач и коттеджей в Нижнем Новгороде",
    template: "%s · Ам Дом",
  },
  description:
    "Строим каркасные дома под ключ за 1,5 месяца. Фиксированная смета без скрытых платежей, прозрачный процесс от проекта до сдачи. Дачи, коттеджи, бани и купели в Нижнем Новгороде и области.",
  keywords: [
    "каркасный дом",
    "строительство каркасных домов",
    "каркасный дом под ключ",
    "строительство дач и коттеджей",
    "баня под ключ",
    "купель",
    "Нижний Новгород",
  ],
  authors: [{ name: "Ам Дом" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Ам Дом",
    title: "Ам Дом. Каркасные дома под ключ в Нижнем Новгороде",
    description:
      "Строим каркасные дома за 1,5 месяца. Фиксированная смета, без скрытых платежей, прозрачный процесс. Рейтинг 5.0 в 2ГИС.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${golos.variable} antialiased`}
    >
      <body className="min-h-[100dvh] bg-bone text-ink">
        <div className="grain-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
