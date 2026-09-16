import {
  faqCapacitaciones,
  faqGeneral,
  faqPrograma,
  negocio,
  origin,
  site,
  testimonios,
} from "../content/site";

export type Schema = Record<string, unknown>;

const personId = `${origin}/#person`;
const businessId = `${origin}/#localbusiness`;
const image = `${origin}/images/soy-martin-dicovsky.webp`;
const logo = `${origin}/favicon.png`;

const BREADCRUMB_LABELS: Record<string, string> = {
  "coach-para-empaticos": "Coaching para empáticos",
  capacitaciones: "Capacitaciones",
  "clase-gratuita": "Clase gratuita",
  "sobre-mi": "Sobre mí",
  testimonios: "Testimonios",
  podcast: "Podcast",
  "preguntas-frecuentes": "Preguntas frecuentes",
  contacto: "Contacto",
};

export function getPostalAddressJsonLd() {
  return {
    "@type": "PostalAddress",
    streetAddress: negocio.calle,
    postalCode: negocio.codigoPostal,
    addressLocality: negocio.localidad,
    addressRegion: negocio.provincia,
    addressCountry: "AR",
  };
}

export function getGeoJsonLd() {
  return {
    "@type": "GeoCoordinates",
    latitude: negocio.geo.latitude,
    longitude: negocio.geo.longitude,
  };
}

export function getSameAs() {
  return [site.instagram, site.tiktok, site.linkedin, site.spotify, negocio.mapsUrl];
}

export function getOpeningHoursJsonLd() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
  ];
}

export function getReviewJsonLd() {
  return {
    review: testimonios.map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.name,
      },
      reviewBody: item.quote,
      itemReviewed: {
        "@id": businessId,
      },
    })),
  };
}

export function getPersonJsonLd(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.name,
    jobTitle: site.role,
    description: site.claim,
    url: `${origin}/`,
    image,
    email: site.email,
    telephone: negocio.telefonoTel,
    address: getPostalAddressJsonLd(),
    sameAs: getSameAs(),
    knowsAbout: [
      "autoestima",
      "relaciones sanas",
      "coaching",
      "límites",
      "liderazgo",
      "Método S.I.A.",
    ],
    knowsLanguage: [
      { "@type": "Language", name: "Español" },
      { "@type": "Language", name: "Inglés" },
    ],
    areaServed: [
      { "@type": "Country", name: "Argentina" },
      { "@type": "Place", name: "Latinoamérica" },
      { "@type": "Place", name: "Europa" },
    ],
    worksFor: { "@id": businessId },
  };
}

export function getLocalBusinessJsonLd(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": businessId,
    name: "Coach Martín Dicovsky",
    alternateName: site.name,
    description: site.claim,
    url: `${origin}/`,
    image,
    logo,
    telephone: negocio.telefonoTel,
    email: site.email,
    address: getPostalAddressJsonLd(),
    geo: getGeoJsonLd(),
    hasMap: negocio.mapsUrl,
    openingHoursSpecification: getOpeningHoursJsonLd(),
    sameAs: getSameAs(),
    areaServed: [
      { "@type": "Place", name: "Pilar, Buenos Aires" },
      { "@type": "Place", name: "Zona Norte, Buenos Aires" },
      { "@type": "Place", name: "Ciudad Autónoma de Buenos Aires" },
      { "@type": "Country", name: "Argentina" },
    ],
    availableLanguage: ["Español", "Inglés"],
    founder: { "@id": personId },
    employee: { "@id": personId },
    ...getReviewJsonLd(),
  };
}

export function buildFaqPageJsonLd(opts: {
  items: { q: string; a: string }[];
  url: string;
}): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${opts.url}#faq`,
    url: opts.url,
    mainEntity: opts.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function buildBreadcrumbListJsonLd(
  crumbs: { name: string; item: string }[],
): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function buildBreadcrumbListFromPath(pathname: string): Schema | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const crumbs = [{ name: "Inicio", item: `${origin}/` }];
  let acc = "";
  for (const segment of segments) {
    acc += `/${segment}`;
    crumbs.push({
      name: BREADCRUMB_LABELS[segment] ?? segment,
      item: `${origin}${acc}`,
    });
  }
  return buildBreadcrumbListJsonLd(crumbs);
}

export function schemaIsBreadcrumbList(schema: Schema) {
  const type = schema["@type"];
  return type === "BreadcrumbList" || (Array.isArray(type) && type.includes("BreadcrumbList"));
}

export function getCoachingServiceJsonLd(description: string): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${origin}/coach-para-empaticos#service`,
    name: "Método S.I.A. — Programa de coaching 1:1 para personas empáticas (90 días)",
    serviceType: "Coaching de autoestima y relaciones",
    description,
    provider: { "@id": personId },
    url: `${origin}/coach-para-empaticos`,
    areaServed: [
      { "@type": "Country", name: "Argentina" },
      { "@type": "Place", name: "Latinoamérica" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: site.calendly,
      serviceLocation: { "@type": "VirtualLocation", name: "Videollamada online" },
    },
  };
}

export function getCapacitacionesServiceJsonLd(description: string): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${origin}/capacitaciones#service`,
    name: "Capacitaciones Ejecutivas y Liderazgo",
    serviceType: "Capacitación in-company de liderazgo y comunicación",
    description,
    provider: { "@id": businessId },
    url: `${origin}/capacitaciones`,
    areaServed: [
      { "@type": "Place", name: "Zona Norte, Buenos Aires" },
      { "@type": "Place", name: "Ciudad Autónoma de Buenos Aires" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceLocation: {
        "@type": "Place",
        name: "In-company, Zona Norte y CABA",
        address: getPostalAddressJsonLd(),
      },
    },
  };
}

export function getPodcastJsonLd(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Protagonistas Podcast",
    description:
      "Conversaciones sobre autoestima, límites y relaciones sanas para personas empáticas.",
    url: `${origin}/podcast`,
    webFeed: site.spotify,
    author: { "@id": personId },
  };
}

export function getClaseJsonLd(description: string): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Clase gratuita para empáticos: autoestima y límites",
    description,
    url: `${origin}/clase-gratuita`,
    isAccessibleForFree: true,
    learningResourceType: "Clase online",
    author: { "@id": personId },
    provider: { "@id": personId },
  };
}

export const faqSchemas = {
  programa: (url: string) => buildFaqPageJsonLd({ items: faqPrograma, url }),
  general: (url: string) => buildFaqPageJsonLd({ items: faqGeneral, url }),
  capacitaciones: (url: string) => buildFaqPageJsonLd({ items: faqCapacitaciones, url }),
};
