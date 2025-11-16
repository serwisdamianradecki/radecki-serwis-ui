# Deployment Guide - Serwis IT Landing Page

## 🚀 Opcje deploymentu

### Option 1: Vercel (Zalecane - najprostsze)

Vercel to platforma stworzona przez twórców Next.js. Oferuje darmowy hosting dla projektów osobistych.

**Kroki:**

1. **Wyślij kod na GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/twoj-username/serwis-it.git
   git push -u origin main
   ```

2. **Zaloguj się na Vercel**
   - Wejdź na [vercel.com](https://vercel.com)
   - Zaloguj się przez GitHub

3. **Import projektu**
   - Kliknij "New Project"
   - Wybierz repozytorium z GitHuba
   - Vercel automatycznie wykryje Next.js

4. **Dodaj zmienne środowiskowe**
   W ustawieniach projektu dodaj:
   ```
   NEXT_PUBLIC_PHONE=+48 123 456 789
   NEXT_PUBLIC_EMAIL=kontakt@serwis-it.pl
   NEXT_PUBLIC_CITY=Żory, Rybnik, Pawłowice
   NEXT_PUBLIC_ADDRESS=
   NEXT_PUBLIC_GOOGLE_MAPS_URL=https://maps.google.com/?q=Żory
   NEXT_PUBLIC_SITE_URL=https://twoja-domena.vercel.app
   ```

5. **Deploy**
   - Kliknij "Deploy"
   - Czekaj ~2 minuty
   - Gotowe! 🎉

**Własna domena:**
- W ustawieniach projektu → Domains
- Dodaj swoją domenę
- Zaktualizuj DNS u swojego rejestratora

---

### Option 2: Netlify

Podobne do Vercel, również darmowe dla małych projektów.

**Kroki:**

1. **Wyślij kod na GitHub** (jak wyżej)

2. **Zaloguj się na Netlify**
   - Wejdź na [netlify.com](https://netlify.com)
   - Zaloguj się przez GitHub

3. **Import projektu**
   - "Add new site" → "Import an existing project"
   - Wybierz repozytorium

4. **Konfiguracja build**
   ```
   Build command: npm run build
   Publish directory: out
   ```

5. **Zmienne środowiskowe**
   Site settings → Environment variables (jak w Vercel)

6. **Deploy**

---

### Option 3: Statyczny hosting (cPanel, FTP)

Jeśli masz tradycyjny hosting z cPanelem lub FTP.

**Kroki:**

1. **Zbuduj projekt lokalnie**
   ```bash
   npm run build
   ```
   To stworzy folder `/out` z gotową stroną statyczną.

2. **Upload przez FTP**
   - Połącz się z serwerem FTP (FileZilla, WinSCP, itp.)
   - Upload zawartości folderu `/out` do `public_html` lub `www`

3. **Konfiguracja serwera**
   
   Stwórz plik `.htaccess` w głównym katalogu:
   ```apache
   # Przekierowanie na HTTPS
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

   # Custom error pages
   ErrorDocument 404 /404.html

   # Compression
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
   </IfModule>

   # Browser caching
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/gif "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

**Uwaga o zmiennych środowiskowych:**
Ponieważ build jest statyczny, musisz ustawić zmienne **przed buildem**:

```bash
# Linux/macOS
export NEXT_PUBLIC_PHONE="+48 123 456 789"
export NEXT_PUBLIC_EMAIL="kontakt@serwis-it.pl"
npm run build

# Windows (PowerShell)
$env:NEXT_PUBLIC_PHONE="+48 123 456 789"
$env:NEXT_PUBLIC_EMAIL="kontakt@serwis-it.pl"
npm run build
```

Lub stwórz plik `.env.local` i uruchom `npm run build`.

---

### Option 4: GitHub Pages (Darmowy)

**Kroki:**

1. **Dodaj do `next.config.js`:**
   ```javascript
   const isProd = process.env.NODE_ENV === 'production';
   
   const nextConfig = {
     output: 'export',
     basePath: isProd ? '/nazwa-repo' : '',
     assetPrefix: isProd ? '/nazwa-repo/' : '',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Deploy script w `package.json`:**
   ```json
   "scripts": {
     "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
   }
   ```

3. **Zainstaluj gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Ustawienia GitHub:**
   - Settings → Pages
   - Source: gh-pages branch

---

## 🔧 Checklist przed deploymentem

- [ ] Wypełnij `.env.local` poprawnymi danymi
- [ ] Dodaj rzeczywiste obrazy (`hero_image.png`, `profile_image.png`)
- [ ] Przetestuj lokalnie: `npm run build && npm run start`
- [ ] Sprawdź wszystkie linki
- [ ] Sprawdź działanie formularza kontaktowego (jeśli dodałeś)
- [ ] Sprawdź responsywność na różnych urządzeniach
- [ ] Zmień numer telefonu i email w `.env.local`
- [ ] Zaktualizuj `NEXT_PUBLIC_SITE_URL` na produkcyjny URL

---

## 🎯 Po deploymencie

### 1. Testuj SEO
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results)

### 2. Zarejestruj w Google Business
Ważne dla lokalnego SEO!

### 3. Monitoring
- Ustaw Google Analytics (opcjonalne)
- Lub Plausible Analytics (szanujące prywatność)

---

## 🆘 Troubleshooting

**Problem:** Obrazy się nie wyświetlają po deploymencie
- **Rozwiązanie:** Sprawdź czy obrazy są w `/public/img/`, sprawdź ścieżki (case-sensitive!)

**Problem:** Zmienne środowiskowe nie działają
- **Rozwiązanie:** Upewnij się że zmienna zaczyna się od `NEXT_PUBLIC_` dla kodu klienta

**Problem:** Strona pokazuje 404 na podstronach
- **Rozwiązanie:** To jest SPA, potrzebujesz przekierowań na hostingu (patrz `.htaccess` wyżej)

---

**Potrzebujesz pomocy?** Sprawdź [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
