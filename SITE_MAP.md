# 🗺️ Site Structure & Component Map

Visual representation of the website structure and how components are organized.

---

## 📄 Page Structure

```
┌─────────────────────────────────────────────────┐
│                   HEADER                         │
│  [Logo] [Nav: Start|Usługi|Cennik|O mnie|      │
│         Kontakt] [☎] [Umów serwis]              │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                    HERO                          │
│  ┌──────────────┐  ┌──────────────┐            │
│  │   Content    │  │    Image     │            │
│  │  - Heading   │  │ hero_image   │            │
│  │  - Subtitle  │  │    .png      │            │
│  │  - 2x CTA    │  │              │            │
│  │  - Phone     │  │              │            │
│  └──────────────┘  └──────────────┘            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  SERVICES                        │
│  [Heading]                                       │
│  [Description with emojis]                       │
│                                                  │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          │
│  │ ✓ 1  │ │ ✓ 2  │ │ ✓ 3  │ │ ✓ 4  │          │
│  └──────┘ └──────┘ └──────┘ └──────┘          │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          │
│  │ ✓ 5  │ │ ✓ 6  │ │ ✓ 7  │ │ ✓ 8  │          │
│  └──────┘ └──────┘ └──────┘ └──────┘          │
│                                                  │
│  [CTA Button] [Micro CTA with phone]            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  PRICING                         │
│  [Heading: "Przykładowe ceny usług"]            │
│  [Important Note - highlighted]                  │
│                                                  │
│  ┌─────────────────────────────────────────┐   │
│  │ Diagnostyka                              │   │
│  ├──────────────────────────────────────────┤   │
│  │ Service name               Price         │   │
│  │ Optional note                            │   │
│  └─────────────────────────────────────────┘   │
│                                                  │
│  [9 total categories, 30+ service items]         │
│                                                  │
│  [Legal footnote - small italic]                 │
│  [CTA Button] [Micro CTA with phone]            │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                    ABOUT                         │
│  [Heading: "O mnie"]                            │
│                                                  │
│  ┌──────────┐  ┌───────────────────────────┐   │
│  │  Profile │  │  Long description from    │   │
│  │   Image  │  │  Google Business listing  │   │
│  │  (round) │  │  (Professional services)  │   │
│  │          │  │                           │   │
│  │          │  │  [CTA Button]             │   │
│  └──────────┘  └───────────────────────────┘   │
│                                                  │
│  [Micro CTA with phone]                         │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  CONTACT                         │
│  [Heading: "Kontakt"]                           │
│  [Short description]                             │
│                                                  │
│  ┌──────────┐  ┌──────────────────────────┐    │
│  │ ☎ Phone  │  │  Quick Action Box        │    │
│  │  Card    │  │  "Gotowy na naprawę?"    │    │
│  ├──────────┤  │                          │    │
│  │ ✉ Email  │  │  [Zadzwoń teraz]         │    │
│  │  Card    │  │  [Wyślij email]          │    │
│  ├──────────┤  │                          │    │
│  │ 📍 Address│  │                          │    │
│  │  Card    │  │                          │    │
│  └──────────┘  └──────────────────────────┘    │
│                                                  │
│  [Micro CTA with phone]                         │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                   FOOTER                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐   │
│  │ Serwis IT│ │ Kontakt  │ │ Obszar       │   │
│  │ Tagline  │ │ Phone    │ │ działania    │   │
│  │          │ │ Email    │ │ • Żory       │   │
│  │          │ │ City     │ │ • Rybnik     │   │
│  │          │ │          │ │ • Pawłowice  │   │
│  └──────────┘ └──────────┘ └──────────────┘   │
│                                                  │
│  [Copyright] [Legal disclaimer]                  │
└─────────────────────────────────────────────────┘

        ┌──────────────────────────┐
        │ FLOATING PHONE BUTTON    │
        │  (Mobile only - sticky)  │
        │       ☎                  │
        └──────────────────────────┘
```

---

## 🧩 Component Hierarchy

```
App (app/layout.tsx)
└── Page (app/page.tsx)
    ├── <script type="application/ld+json"> (JSON-LD)
    ├── Header
    │   ├── Logo (link)
    │   ├── Navigation (desktop)
    │   │   └── Links × 5
    │   ├── Phone icon (link)
    │   ├── CTA Button
    │   └── Mobile menu (hamburger)
    │
    ├── Main
    │   ├── Hero (Section)
    │   │   ├── Heading (h1)
    │   │   ├── Subheading
    │   │   ├── CTA Buttons × 2
    │   │   ├── Phone micro CTA
    │   │   └── Image (Next/Image)
    │   │
    │   ├── Services (Section)
    │   │   ├── Heading (h2)
    │   │   ├── Description
    │   │   ├── Service Cards × 10
    │   │   ├── CTA Button
    │   │   └── Phone micro CTA
    │   │
    │   ├── PricingTable (Section)
    │   │   ├── Heading (h2)
    │   │   ├── Important Note
    │   │   ├── Categories × 9
    │   │   │   ├── Category Header
    │   │   │   └── Items (variable)
    │   │   ├── Legal Footnote
    │   │   ├── CTA Button
    │   │   └── Phone micro CTA
    │   │
    │   ├── About (Section)
    │   │   ├── Heading (h2)
    │   │   ├── Profile Image (Next/Image)
    │   │   ├── Description
    │   │   ├── CTA Button
    │   │   └── Phone micro CTA
    │   │
    │   └── Contact (Section)
    │       ├── Heading (h2)
    │       ├── Description
    │       ├── Contact Cards × 3
    │       │   ├── Phone Card
    │       │   ├── Email Card
    │       │   └── Address Card
    │       ├── Quick Action Box
    │       │   └── CTA Buttons × 2
    │       └── Phone micro CTA
    │
    ├── Footer
    │   ├── Column 1 (About)
    │   ├── Column 2 (Contact)
    │   ├── Column 3 (Service Area)
    │   └── Copyright + Legal
    │
    └── FloatingPhoneButton (mobile only)
```

---

## 📦 Component Dependencies

```
Button.tsx (reusable)
  ├── Used by: Header, Hero, Services, PricingTable, About, Contact
  └── Props: variant, size, href, onClick

Section.tsx (reusable)
  ├── Used by: Hero, Services, PricingTable, About, Contact
  └── Props: id, backgroundColor, paddingY

Header.tsx
  ├── Uses: Button
  └── Imports: NEXT_PUBLIC_PHONE from env

Hero.tsx
  ├── Uses: Section, Button, Next/Image
  ├── Imports: heroContent from content/hero.text.ts
  └── Imports: NEXT_PUBLIC_PHONE from env

Services.tsx
  ├── Uses: Section, Button
  ├── Imports: servicesContent from content/services.text.ts
  └── Imports: NEXT_PUBLIC_PHONE from env

PricingTable.tsx
  ├── Uses: Section, Button
  ├── Imports: pricingContent from content/pricing.text.ts
  └── Imports: NEXT_PUBLIC_PHONE from env

About.tsx
  ├── Uses: Section, Button, Next/Image
  ├── Imports: aboutContent from content/about.text.ts
  └── Imports: NEXT_PUBLIC_PHONE from env

Contact.tsx
  ├── Uses: Section, Button
  ├── Imports: contactContent from content/contact.text.ts
  └── Imports: NEXT_PUBLIC_PHONE, EMAIL, ADDRESS, etc. from env

Footer.tsx
  └── Imports: NEXT_PUBLIC_PHONE, EMAIL, CITY from env

FloatingPhoneButton.tsx
  └── Imports: NEXT_PUBLIC_PHONE from env
```

---

## 🎨 Styling Architecture

```
Tailwind Config (tailwind.config.js)
  ├── Custom Colors
  │   ├── background
  │   ├── primary (+ primary-600)
  │   ├── accent
  │   ├── textMain
  │   ├── textMuted
  │   └── border
  │
  └── Custom Utilities
      └── .section-container (max-width + padding)

Global Styles (app/globals.css)
  ├── @tailwind base
  ├── @tailwind components
  ├── @tailwind utilities
  └── Custom layers
      └── .section-container utility
```

---

## 🔗 Data Flow

```
Environment Variables (.env.local)
  ├── NEXT_PUBLIC_PHONE
  ├── NEXT_PUBLIC_EMAIL
  ├── NEXT_PUBLIC_ADDRESS
  ├── NEXT_PUBLIC_CITY
  ├── NEXT_PUBLIC_GOOGLE_MAPS_URL
  └── NEXT_PUBLIC_SITE_URL
      │
      ├──> Used in: All components for contact info
      ├──> Used in: app/page.tsx for metadata
      └──> Used in: lib/schema.ts for JSON-LD

Content Modules (/content/*.text.ts)
  ├── hero.text.ts ──────> Hero.tsx
  ├── services.text.ts ──> Services.tsx
  ├── pricing.text.ts ───> PricingTable.tsx
  ├── about.text.ts ─────> About.tsx
  └── contact.text.ts ───> Contact.tsx

SEO Utilities (/lib/)
  ├── seo.ts
  │   └── generateMetadata() ──> app/page.tsx (metadata export)
  │
  └── schema.ts
      └── generateLocalBusinessSchema() ──> app/page.tsx (JSON-LD script)
```

---

## 🎯 Interaction Flow (User Journey)

```
1. User lands on page
   └─> Sees Hero with 2 CTAs
       ├─> Click "Umów serwis" → scroll to Contact
       └─> Click "Szybki kontakt" → opens phone dialer

2. User scrolls to Services
   └─> Reads service list
       └─> Click "Wyceń naprawę" → scroll to Contact

3. User scrolls to Pricing
   └─> Browses pricing categories
       ├─> Click "Umów serwis" → scroll to Contact
       └─> Click phone micro CTA → opens phone dialer

4. User scrolls to About
   └─> Reads description
       └─> Click "Zadzwoń" → opens phone dialer

5. User scrolls to Contact
   └─> Multiple contact options
       ├─> Click phone card → opens phone dialer
       ├─> Click email card → opens email client
       ├─> Click address card → opens Google Maps
       ├─> Click "Zadzwoń teraz" → opens phone dialer
       └─> Click "Wyślij email" → opens email client

6. Mobile users (any point)
   └─> See floating phone button (bottom-right)
       └─> Click → opens phone dialer
```

---

## 📱 Responsive Breakpoints

```
Mobile:  < 768px
  ├── Single column layouts
  ├── Stacked elements
  ├── Mobile menu (hamburger)
  └── Floating phone button visible

Tablet:  768px - 1024px
  ├── 2-column grids (services, contact)
  └── Desktop navigation visible

Desktop: > 1024px
  ├── Full 3-column layouts (footer)
  ├── 2-column hero
  └── Optimal readability
```

---

**This map provides a complete visual overview of the website's structure and component relationships.**
