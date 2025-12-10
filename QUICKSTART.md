# 🚀 Quick Setup Guide

## Krok 1: Instalacja zależności

```bash
npm install
```

## Krok 2: Konfiguracja zmiennych środowiskowych

```bash
# Skopiuj plik przykładowy
cp .env.example .env.local

# Edytuj .env.local i wpisz swoje dane:
# - NEXT_PUBLIC_PHONE (twój numer telefonu)
# - NEXT_PUBLIC_EMAIL (twój email)
# - NEXT_PUBLIC_SITE_URL (URL twojej strony)
# - itp.
```

## Krok 3: Dodaj obrazy

Umieść w folderze `/public/img/`:

- `hero_image.png` (zdjęcie główne, np. warsztat, laptop w naprawie)
- `profile_image.png` (twoje zdjęcie lub logo)

## Krok 4: Uruchom serwer deweloperski

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## Krok 5: Dostosuj treści (opcjonalne)

Edytuj pliki w folderze `/content/`:

- `hero.text.ts` - nagłówki, CTA
- `services.text.ts` - lista usług
- `pricing.text.ts` - cennik
- `about.text.ts` - opis "O mnie"
- `contact.text.ts` - teksty kontakt

## Gotowe! 🎉

Twoja strona jest gotowa. Aby wdrożyć ją na produkcję, przeczytaj `DEPLOYMENT.md`.

---

## Szybkie komendy

```bash
npm run dev      # Uruchom lokalnie
npm run build    # Zbuduj wersję produkcyjną
npm run start    # Uruchom build lokalnie (test produkcji)
npm run lint     # Sprawdź błędy kodu
```

## Potrzebujesz pomocy?

Sprawdź:

- `README.md` - pełna dokumentacja
- `DEPLOYMENT.md` - instrukcje wdrożenia
- `CHANGELOG.md` - historia zmian
