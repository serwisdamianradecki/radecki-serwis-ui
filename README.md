# Serwis IT - Landing Page

Profesjonalna strona landing page dla lokalnego serwisu komputerów i laptopów. Zbudowana w Next.js + TypeScript + Tailwind CSS, zoptymalizowana pod SEO i konwersję.

## 🚀 Szybki start

### Wymagania

- Node.js 18+
- npm lub yarn

### Instalacja

```bash
# Zainstaluj zależności
npm install

# Skopiuj i wypełnij zmienne środowiskowe
cp .env.example .env.local

# Uruchom serwer developerski
npm run dev
```

Aplikacja będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).

## 📁 Struktura projektu

```
serwis-it-v2.0.0/
├── app/
│   ├── layout.tsx          # Root layout z meta tagami
│   ├── page.tsx            # Strona główna z SEO i JSON-LD
│   ├── sitemap.ts          # Generator sitemap.xml
│   ├── robots.ts           # Generator robots.txt
│   └── globals.css         # Globalne style Tailwind
├── components/
│   ├── Button.tsx          # Komponent przycisku (wielokrotnego użytku)
│   ├── Section.tsx         # Komponent sekcji (wielokrotnego użytku)
│   ├── Header.tsx          # Nawigacja + sticky header
│   ├── Hero.tsx            # Sekcja hero z CTA
│   ├── Services.tsx        # Lista usług
│   ├── PricingTable.tsx    # Cennik usług
│   ├── About.tsx           # O mnie
│   ├── Contact.tsx         # Kontakt
│   ├── Footer.tsx          # Stopka
│   └── FloatingPhoneButton.tsx  # Floating button (mobile)
├── content/
│   ├── hero.text.ts        # Teksty sekcji hero
│   ├── services.text.ts    # Teksty usług
│   ├── pricing.text.ts     # Cennik (pełna struktura)
│   ├── about.text.ts       # Teksty O mnie
│   └── contact.text.ts     # Teksty kontakt
├── lib/
│   ├── seo.ts              # Helpery SEO / metadata
│   └── schema.ts           # Generator JSON-LD (LocalBusiness)
├── public/
│   └── img/
│       ├── hero_image.png      # Główny obraz hero (należy dodać)
│       └── profile_image.png   # Zdjęcie profilowe (należy dodać)
├── .env.example            # Przykładowy plik zmiennych środowiskowych
├── tailwind.config.js      # Konfiguracja Tailwind (paleta kaszmirowa)
├── next.config.js          # Konfiguracja Next.js
└── package.json
```

## 🎨 Zmiana treści

### Edycja tekstów

Wszystkie teksty widoczne na stronie znajdują się w plikach `/content/*.text.ts`.

**Przykład - zmiana nagłówka hero:**

Otwórz `content/hero.text.ts`:

```typescript
export const heroContent = {
  heading: "Twój nowy nagłówek",
  subheading: "Twój nowy podtytuł",
  // ...
};
```

### Edycja cennika

Pełny cennik znajduje się w `content/pricing.text.ts`. Możesz dodawać, usuwać lub modyfikować kategorie i pozycje:

```typescript
categories: [
  {
    name: "Nazwa kategorii",
    items: [
      {
        service: "Nazwa usługi",
        price: "100 zł",
        note: "Opcjonalna uwaga", // opcjonalne
      },
    ],
  },
];
```

### Zmiana danych kontaktowych

Dane kontaktowe (telefon, email, adres) są przechowywane w **zmiennych środowiskowych**.

Edytuj plik `.env.local`:

```env
NEXT_PUBLIC_PHONE=+48 123 456 789
NEXT_PUBLIC_EMAIL=kontakt@serwis-it.pl
NEXT_PUBLIC_CITY=Żory, Rybnik, Pawłowice
NEXT_PUBLIC_ADDRESS=Ul. Przykładowa 1, Żory
NEXT_PUBLIC_GOOGLE_MAPS_URL=https://maps.google.com/?q=Żory
NEXT_PUBLIC_SITE_URL=https://twoja-domena.pl
```

**Uwaga:** Po zmianie zmiennych środowiskowych **musisz zrestartować** serwer developerski (`npm run dev`).

### Zmiana obrazków

Umieść swoje obrazy w folderze `/public/img/`:

- `hero_image.png` - obraz w sekcji hero (zalecany rozmiar: 1200x800px)
- `profile_image.png` - zdjęcie profilowe (zalecany rozmiar: 400x400px)

Obrazy są automatycznie optymalizowane przez Next.js.

## 🎨 Zmiana kolorów (paleta kaszmirowa)

Kolory są zdefiniowane w `tailwind.config.js`:

```javascript
colors: {
  background: '#FBF9F7',      // Tło strony
  primary: {
    DEFAULT: '#6B5B95',       // Kolor główny (przyciski)
    600: '#58477A',           // Hover
  },
  accent: '#9FB7A7',          // Akcent (zielony)
  textMain: '#1E293B',        // Tekst główny
  textMuted: '#475569',       // Tekst wyciszony
  border: '#EAE7E4',          // Obramowania
}
```

Po zmianie kolorów w konfiguracji, użyj ich w komponentach poprzez klasy Tailwind:

- `bg-primary` - tło w kolorze głównym
- `text-primary` - tekst w kolorze głównym
- `border-border` - obramowanie

## 🚀 Deployment

### Build produkcyjny

```bash
npm run build
```

Zbudowana strona (statyczna) znajdzie się w folderze `/out`.

### Deploy na Vercel (zalecane)

1. Wyślij kod na GitHub
2. Zaloguj się na [vercel.com](https://vercel.com)
3. Zaimportuj repozytorium
4. Dodaj zmienne środowiskowe w ustawieniach projektu
5. Deploy!

### Deploy na innym hostingu (statyczny)

Ponieważ strona jest wyeksportowana jako statyczna (`output: 'export'` w `next.config.js`), możesz ją hostować na dowolnym hostingu statycznym:

1. Build: `npm run build`
2. Upload zawartości folderu `/out` na serwer
3. Gotowe!

**Wspierane hostingi:** Netlify, GitHub Pages, Cloudflare Pages, AWS S3, itp.

## 🔍 SEO

### Metadata

Metadata SEO jest skonfigurowana w `app/page.tsx`:

- Title
- Description (z lokalnymi słowami kluczowymi)
- Open Graph tags
- Twitter Card

### JSON-LD (Structured Data)

Strona zawiera structured data typu `LocalBusiness` dla lepszej widoczności w Google. Dane są generowane automatycznie z zmiennych środowiskowych.

### Sitemap & Robots.txt

- **Sitemap:** Automatycznie generowany w `app/sitemap.ts` (dostępny pod `/sitemap.xml`)
- **Robots.txt:** Automatycznie generowany w `app/robots.ts` (dostępny pod `/robots.txt`)

## 📱 Responsywność

Strona jest **mobile-first** i w pełni responsywna:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Floating przycisk telefonu jest widoczny tylko na mobile.

## 🔧 Komendy NPM

```bash
npm run dev          # Uruchom serwer developerski
npm run build        # Zbuduj wersję produkcyjną
npm run start        # Uruchom wersję produkcyjną lokalnie
npm run lint         # Sprawdź błędy ESLint
```

## 📊 Analytics (opcjonalne)

Strona nie zawiera domyślnie ciężkich narzędzi analytics. Zalecenia:

**Szanujące prywatność:**

- [Plausible Analytics](https://plausible.io/) - lekkie, bez cookies
- [Simple Analytics](https://simpleanalytics.com/) - minimalistyczne

**Tradycyjne:**

- Google Analytics 4 (wymaga zgody na cookies)

## 🛠 Wsparcie techniczne

W razie problemów:

1. Sprawdź czy zainstalowałeś wszystkie zależności (`npm install`)
2. Sprawdź czy plik `.env.local` istnieje i ma poprawne wartości
3. Zrestartuj serwer developerski
4. Sprawdź konsolę przeglądarki i terminal pod kątem błędów

## 📄 Licencja

Ten projekt jest własnością prywatną. Wszelkie prawa zastrzeżone.

---

**Wersja:** 2.0.0  
**Technologie:** Next.js 14, React 18, TypeScript, Tailwind CSS
