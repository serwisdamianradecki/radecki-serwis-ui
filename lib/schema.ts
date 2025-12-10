export interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  image?: string;
  telephone: string;
  email?: string;
  address?: {
    "@type": string;
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  areaServed: string[];
  url: string;
  priceRange?: string;
  openingHours?: string[];
  serviceOffered?: Array<{
    "@type": string;
    name: string;
  }>;
}

export function generateLocalBusinessSchema(
  phone: string,
  email: string,
  address: string,
  city: string,
  url: string
): LocalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Serwis IT - Naprawa Komputerów i Laptopów",
    telephone: phone,
    email: email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: city,
      addressCountry: "PL",
    },
    areaServed: ["Żory", "Rybnik", "Pawłowice"],
    url: url,
    priceRange: "50-400 zł",
    serviceOffered: [
      {
        "@type": "Service",
        name: "Diagnostyka komputerów i laptopów",
      },
      {
        "@type": "Service",
        name: "Naprawa laptopów",
      },
      {
        "@type": "Service",
        name: "Naprawa komputerów",
      },
      {
        "@type": "Service",
        name: "Czyszczenie sprzętu komputerowego",
      },
      {
        "@type": "Service",
        name: "Wymiana podzespołów",
      },
      {
        "@type": "Service",
        name: "Reinstalacja systemu Windows",
      },
      {
        "@type": "Service",
        name: "Odzyskiwanie danych",
      },
      {
        "@type": "Service",
        name: "Usuwanie wirusów",
      },
      {
        "@type": "Service",
        name: "Składanie i modernizacja komputerów",
      },
      {
        "@type": "Service",
        name: "Serwis mobilny z dojazdem",
      },
    ],
  };
}
