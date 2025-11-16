# ✅ Pre-Launch Checklist

Use this checklist before deploying your website to production.

## 📋 Setup & Configuration

### Environment Variables
- [ ] Skopiowano `.env.example` do `.env.local`
- [ ] Wprowadzono **prawdziwy numer telefonu** w `NEXT_PUBLIC_PHONE`
- [ ] Wprowadzono **prawdziwy email** w `NEXT_PUBLIC_EMAIL`
- [ ] Wprowadzono **adres** w `NEXT_PUBLIC_ADDRESS` (opcjonalne)
- [ ] Wprowadzono **miasto** w `NEXT_PUBLIC_CITY`
- [ ] Wprowadzono **URL strony** w `NEXT_PUBLIC_SITE_URL`
- [ ] Wprowadzono **Google Maps URL** w `NEXT_PUBLIC_GOOGLE_MAPS_URL` (opcjonalne)

### Images
- [ ] Dodano `hero_image.png` do `/public/img/`
  - Zalecany rozmiar: minimum 1200x800px
  - Format: PNG lub JPG
  - Dobra jakość (zostanie automatycznie zoptymalizowane)
- [ ] Dodano `profile_image.png` do `/public/img/`
  - Zalecany rozmiar: 400x400px (kwadrat)
  - Format: PNG lub JPG
  - Zdjęcie profilowe lub logo firmy

### Content Review
- [ ] Przejrzano teksty w `/content/hero.text.ts`
- [ ] Przejrzano teksty w `/content/services.text.ts`
- [ ] Przejrzano i zaktualizowano cennik w `/content/pricing.text.ts`
- [ ] Przejrzano opis w `/content/about.text.ts`
- [ ] Przejrzano teksty w `/content/contact.text.ts`

---

## 🧪 Testing

### Local Testing
- [ ] Uruchomiono `npm install` bez błędów
- [ ] Uruchomiono `npm run dev` bez błędów
- [ ] Sprawdzono stronę lokalnie na http://localhost:3000
- [ ] Zbudowano wersję produkcyjną: `npm run build`
- [ ] Uruchomiono build lokalnie: `npm run start`
- [ ] Sprawdzono czy build działa poprawnie

### Functionality
- [ ] Wszystkie linki w nawigacji działają (przewijają do sekcji)
- [ ] Kliknięcie w telefon (`tel:`) otwiera dialer
- [ ] Kliknięcie w email (`mailto:`) otwiera klienta email
- [ ] Wszystkie przyciski CTA działają
- [ ] Floating button (mobile) jest widoczny i działa
- [ ] Mobile menu otwiera się i zamyka poprawnie

### Responsiveness
- [ ] Sprawdzono na telefonie (lub Chrome DevTools mobile view)
- [ ] Sprawdzono na tablecie
- [ ] Sprawdzono na desktopie
- [ ] Wszystkie sekcje wyświetlają się poprawnie
- [ ] Tekst jest czytelny na wszystkich urządzeniach
- [ ] Obrazy ładują się poprawnie

### Content Verification
- [ ] Wszystkie teksty są po polsku
- [ ] Numer telefonu wyświetla się poprawnie wszędzie
- [ ] Email wyświetla się poprawnie
- [ ] Adres/miasto wyświetla się poprawnie
- [ ] Cennik wyświetla się kompletnie
- [ ] Obrazy mają właściwe alt-texty

---

## 🔍 SEO Verification

### Meta Tags
- [ ] Title wyświetla się poprawnie w zakładce przeglądarki
- [ ] Sprawdzono meta description (View Source → `<meta name="description"`)
- [ ] Sprawdzono Open Graph tags (Facebook Debugger: https://developers.facebook.com/tools/debug/)
- [ ] Sprawdzono Twitter Card (Twitter Card Validator)

### Structured Data
- [ ] Sprawdzono JSON-LD w źródle strony (powinno być w `<head>`)
- [ ] Sprawdzono w Rich Results Test: https://search.google.com/test/rich-results
- [ ] Upewniono się że dane LocalBusiness są poprawne

### Files
- [ ] Sprawdzono że `/sitemap.xml` generuje się poprawnie
- [ ] Sprawdzono że `/robots.txt` generuje się poprawnie

---

## 🚀 Deployment

### Pre-deployment
- [ ] Wybrano platformę deploymentu (Vercel / Netlify / FTP / GitHub Pages)
- [ ] Przeczytano odpowiednią sekcję w `DEPLOYMENT.md`
- [ ] Przygotowano zmienne środowiskowe dla platformy
- [ ] Zaktualizowano `NEXT_PUBLIC_SITE_URL` na produkcyjny URL

### Post-deployment
- [ ] Strona jest dostępna pod produkcyjnym URL
- [ ] Wszystkie funkcje działają na produkcji
- [ ] Obrazy ładują się poprawnie
- [ ] Sprawdzono mobile view na prawdziwym telefonie
- [ ] Przetestowano wszystkie linki i CTA

---

## 📊 Post-Launch

### Analytics (opcjonalne)
- [ ] Skonfigurowano Google Analytics lub Plausible
- [ ] Sprawdzono czy analytics rejestruje wizyty

### Search Console
- [ ] Dodano stronę do Google Search Console
- [ ] Przesłano sitemap.xml
- [ ] Zweryfikowano własność domeny

### Business Listings
- [ ] Zaktualizowano Google My Business z linkiem do strony
- [ ] Dodano URL strony do profili social media (jeśli masz)

### Performance
- [ ] Sprawdzono PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Upewniono się że strona ładuje się szybko (< 3s)
- [ ] Sprawdzono Core Web Vitals

### Security
- [ ] Upewniono się że strona działa przez HTTPS
- [ ] Sprawdzono czy `.env.local` **NIE** jest w repozytorium (jest w `.gitignore`)

---

## 🎯 Optional Enhancements (Future)

- [ ] Dodać formularz kontaktowy z integracją email
- [ ] Dodać Google Maps embed w sekcji kontakt
- [ ] Dodać sekcję z opiniami klientów
- [ ] Dodać galerię zrealizowanych napraw
- [ ] Dodać blog z artykułami SEO
- [ ] Skonfigurować automatyczne backupy

---

## ✅ Final Check

- [ ] Wszystkie powyższe punkty zostały sprawdzone
- [ ] Strona jest gotowa do udostępnienia klientom
- [ ] Bookmark tej strony dla przyszłych aktualizacji

**Gratulacje! Twoja strona jest gotowa do uruchomienia! 🎉**

---

## 🆘 W razie problemów

1. Sprawdź `README.md` dla pełnej dokumentacji
2. Sprawdź `DEPLOYMENT.md` dla instrukcji wdrożenia
3. Sprawdź konsolę przeglądarki (F12) dla błędów JavaScript
4. Sprawdź terminal dla błędów budowania
5. Upewnij się że wszystkie zmienne środowiskowe są ustawione

**Powodzenia! 🚀**
