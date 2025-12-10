interface PricingItem {
  service: string;
  price: string;
  note?: string;
}

interface PricingCategory {
  name: string;
  items: PricingItem[];
}

export const pricingContent = {
  heading: "Cennik – uczciwe ceny bez ukrytych kosztów",
  note: "Ceny są orientacyjne i zależą od skomplikowania naprawy oraz stanu sprzętu. Każdą usługę wyceniam indywidualnie po bezpłatnej diagnozie (50 zł diagnostyki odliczam przy naprawie). Żadnych ukrytych opłat – wiesz, za co płacisz.",
  legalFootnote:
    "* Usługi świadczone w ramach działalności nierejestrowanej zgodnie z art. 5 ustawy Prawo przedsiębiorców.",

  categories: [
    {
      name: "Diagnostyka",
      items: [
        {
          service: "Diagnostyka sprzętu (komputer/laptop)",
          price: "50 zł",
          note: "Gratis przy zleceniu naprawy",
        },
      ],
    },
    {
      name: "Czyszczenie i konserwacja",
      items: [
        {
          service: "Czyszczenie laptopa + wymiana pasty termicznej",
          price: "120–160 zł",
        },
        {
          service: "Czyszczenie komputera stacjonarnego + wymiana pasty",
          price: "100–150 zł",
        },
        {
          service: "Czyszczenie układu chłodzenia GPU (komputer)",
          price: "80–120 zł",
        },
        {
          service:
            "Wymiana pasty termicznej klasy premium (np. Thermal Grizzly)",
          price: "+30–50 zł",
        },
      ],
    },
    {
      name: "Przyspieszanie i optymalizacja",
      items: [
        {
          service: "Optymalizacja systemu (Windows/Mac/Linux)",
          price: "80–120 zł",
        },
        {
          service: "Przyspieszenie laptopa (czyszczenie + optymalizacja)",
          price: "180–240 zł",
        },
        {
          service: "Przeniesienie systemu na SSD (klonowanie)",
          price: "100–150 zł",
          note: "Cena bez dysku – pomogę wybrać odpowiedni SSD",
        },
      ],
    },
    {
      name: "Instalacja i konfiguracja systemów",
      items: [
        {
          service: "Reinstalacja Windows / Linux z zachowaniem Twoich danych",
          price: "120–150 zł",
        },
        {
          service: "Reinstalacja systemu + konfiguracja + instalacja programów",
          price: "150–200 zł",
        },
        {
          service: "Instalacja macOS (legalna, na Macach)",
          price: "150–250 zł",
        },
      ],
    },
    {
      name: "Wymiana podzespołów",
      items: [
        {
          service: "Wymiana dysku HDD/SSD",
          price: "40–70 zł",
        },
        {
          service: "Wymiana RAM",
          price: "30–50 zł",
        },
        {
          service: "Wymiana klawiatury w laptopie",
          price: "80–150 zł",
        },
        {
          service: "Wymiana matrycy w laptopie",
          price: "100–150 zł + koszt matrycy",
        },
        {
          service: "Wymiana gniazda zasilania",
          price: "150–250 zł",
        },
        {
          service: "Wymiana chłodzenia / wentylatora",
          price: "80–150 zł",
        },
        {
          service: "Wymiana karty graficznej / zasilacza / płyty głównej",
          price: "80–150 zł",
        },
      ],
    },
    {
      name: "Usuwanie wirusów i problemów z oprogramowaniem",
      items: [
        {
          service: "Usuwanie wirusów / malware / reklam",
          price: "80–150 zł",
        },
        {
          service: "Naprawa systemu bez reinstalacji",
          price: "80–150 zł",
        },
        {
          service: "Odblokowanie systemu, naprawa bootloadera",
          price: "100–150 zł",
        },
      ],
    },
    {
      name: "Składanie i modernizacja komputerów",
      items: [
        {
          service: "Złożenie komputera od podstaw",
          price: "150–250 zł",
        },
        {
          service: "Modernizacja PC (dobór części + montaż)",
          price: "80–150 zł",
        },
        {
          service: "Testy stabilności, undervolting, profile wentylatorów",
          price: "50–120 zł",
        },
      ],
    },
    {
      name: "Usługi mobilne – z dojazdem",
      items: [
        {
          service: "Dojazd na terenie Żory / Rybnik / Pawłowice i okolice",
          price: "10–40 zł",
          note: "Gratis przy większych naprawach",
        },
        {
          service:
            "Naprawa na miejscu u klienta (diagnostyka + drobne naprawy)",
          price: "80–120 zł",
        },
      ],
    },
  ],

  ctaButton: "Umów naprawę",
  ctaMicro: "Potrzebujesz wyceny? Zadzwoń:",
} as const;
