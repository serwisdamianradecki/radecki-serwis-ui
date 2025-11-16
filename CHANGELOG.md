# CHANGELOG

All notable changes to this project will be documented in this file.

## [2.0.0] - 2024-11-16

### Projekt utworzony od podstaw

#### Dodane
- ✅ Next.js 14 + TypeScript + Tailwind CSS setup
- ✅ Kompletna paleta kolorów kaszmirowa (background, primary, accent)
- ✅ Modułowa architektura treści (`/content/*.text.ts`)
- ✅ Zmienne środowiskowe dla danych kontaktowych
- ✅ Komponenty wielokrotnego użytku (Button, Section)
- ✅ Pełna responsywność (mobile-first)
- ✅ SEO optimization:
  - Meta tags (title, description, OG, Twitter Card)
  - JSON-LD structured data (LocalBusiness schema)
  - Sitemap.xml generator
  - Robots.txt generator
- ✅ Wszystkie sekcje strony:
  - Header (sticky navigation)
  - Hero (z CTA i telefonem)
  - Services (lista usług)
  - PricingTable (pełny cennik z kategoraimi)
  - About (opis serwisu)
  - Contact (karty kontaktowe)
  - Footer
  - FloatingPhoneButton (mobile)
- ✅ Pełna treść w języku polskim
- ✅ Dokumentacja (README.md, DEPLOYMENT.md)
- ✅ Environment variables example
- ✅ Static export ready (dla prostego hostingu)

#### Treści
- Użyto dokładnych tekstów z briefu:
  - Heading hero: "Prof. serwis komputerów i laptopów — Żory, Rybnik, Pawłowice"
  - Opis z Google Business
  - Blurb z Facebooka
  - Pełny cennik ze wszystkimi kategoriami
  - Uwagi prawne i disclaimery
- Wszystkie teksty w modułach content/*.text.ts (łatwa edycja)

#### Techniczne
- TypeScript strict mode
- Tailwind CSS z customową konfiguracją
- Next.js App Router
- Static Site Generation (SSG)
- Image optimization ready
- Mobile floating phone button
- Accessibility (ARIA labels, semantic HTML)

---

## Przyszłe udoskonalenia (TODO)

- [ ] Dodać rzeczywiste obrazy (hero_image.png, profile_image.png)
- [ ] Opcjonalnie: formularz kontaktowy z integracją email
- [ ] Opcjonalnie: Google Maps embed w sekcji kontakt
- [ ] Opcjonalnie: galeria zrealizowanych napraw
- [ ] Opcjonalnie: sekcja z opiniami klientów
- [ ] Analytics (Plausible lub GA4)
