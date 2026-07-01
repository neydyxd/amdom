import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { StatsBand } from "@/components/stats-band";
import { Services } from "@/components/services";
import { Values } from "@/components/values";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { company, faq, reviews } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  description:
    "Строительство каркасных домов, дач, коттеджей, бань и купелей под ключ в Нижнем Новгороде.",
  telephone: company.phone,
  email: company.email,
  url: "https://amdom.ru",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Добролюбова, 10, помещение 11",
    addressLocality: "Нижний Новгород",
    postalCode: "603000",
    addressCountry: "RU",
  },
  areaServed: "Нижний Новгород и Нижегородская область",
  openingHours: "Mo-Su 09:00-19:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: reviews.length,
    bestRating: "5",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: r.text,
  })),
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <StatsBand />
        <Services />
        <Values />
        <Process />
        <Projects />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
