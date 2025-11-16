# 🚀 START HERE - Serwis IT Landing Page

**Production-ready Next.js landing page for a local computer & laptop repair service.**

Polish language • Mobile-first • SEO-optimized • Static export ready

---

## ⚡ Quick Start (5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local
# Edit .env.local with your phone, email, etc.

# 3. Add images (optional for testing)
# Place hero_image.png and profile_image.png in /public/img/

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

**→ Read [QUICKSTART.md](./QUICKSTART.md) for detailed setup**

---

## 📚 Documentation

**New to the project?** Start here:

1. **[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** - Navigation guide for all docs
2. **[QUICKSTART.md](./QUICKSTART.md)** - 5-step setup
3. **[README.md](./README.md)** - Full documentation

**Before deploying:**

4. **[PRE_LAUNCH_CHECKLIST.md](./PRE_LAUNCH_CHECKLIST.md)** - Complete checklist
5. **[DEPLOYMENT.md](./DEPLOYMENT.md)** - 4 deployment options

**Reference:**

6. **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - What's included
7. **[CONTENT_REFERENCE.md](./CONTENT_REFERENCE.md)** - All Polish copy
8. **[SITE_MAP.md](./SITE_MAP.md)** - Visual structure
9. **[CHANGELOG.md](./CHANGELOG.md)** - Version history

---

## 🎯 What's Included

✅ **Next.js 14** + TypeScript + Tailwind CSS  
✅ **Mobile-first** responsive design  
✅ **Kaszmirowa color palette** (warm, professional)  
✅ **SEO-optimized** with structured data (LocalBusiness)  
✅ **All content in Polish** (100% from brief)  
✅ **Modular content files** (easy editing)  
✅ **Environment variables** for contact info  
✅ **Static export** ready (easy hosting)  
✅ **Full documentation** (9 markdown files)

**Sections:** Header • Hero • Services • Pricing • About • Contact • Footer

---

## 🎨 Features

- **Sticky navigation** with mobile menu
- **Hero section** with 2 CTAs and phone link
- **10 services** in grid layout
- **Full pricing table** with 9 categories (30+ items)
- **Contact cards** with clickable phone/email
- **Floating phone button** (mobile only)
- **Micro CTAs** on every section
- **JSON-LD structured data** for Google
- **Auto-generated sitemap** and robots.txt

---

## 📝 How to Edit

### Change Text Content

Edit files in `/content/`:
- `hero.text.ts` - Hero section
- `services.text.ts` - Services list
- `pricing.text.ts` - Full pricing table
- `about.text.ts` - About section
- `contact.text.ts` - Contact section

**Example:**
```typescript
// content/hero.text.ts
export const heroContent = {
  heading: "Your new heading here",
  subheading: "Your new subheading",
  // ...
}
```

### Change Contact Info

Edit `.env.local`:
```env
NEXT_PUBLIC_PHONE=+48 123 456 789
NEXT_PUBLIC_EMAIL=kontakt@serwis-it.pl
```

**Important:** Restart dev server after changing env variables!

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#6B5B95', // Change to your brand color
  // ...
}
```

**→ See [README.md](./README.md) for complete editing guide**

---

## 🚀 Deploy

**Recommended: Vercel** (easiest, free)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. Import on vercel.com
# 3. Add environment variables
# 4. Deploy! ✨
```

**Other options:**
- Netlify (similar to Vercel)
- Traditional hosting (FTP/cPanel)
- GitHub Pages

**→ See [DEPLOYMENT.md](./DEPLOYMENT.md) for all options**

---

## 🛠️ Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production build locally
npm run lint     # Check code quality
```

---

## 📁 Project Structure

```
serwis-it-v2.0.0/
├── app/                   # Next.js App Router
│   ├── page.tsx          # Main page with all sections
│   ├── layout.tsx        # Root layout
│   ├── sitemap.ts        # SEO sitemap
│   └── robots.ts         # SEO robots.txt
├── components/           # React components
│   ├── Button.tsx        # Reusable button
│   ├── Section.tsx       # Reusable section
│   ├── Header.tsx        # Navigation
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services list
│   ├── PricingTable.tsx  # Full pricing
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact cards
│   └── Footer.tsx        # Footer
├── content/              # Text content (EDIT HERE)
│   ├── hero.text.ts
│   ├── services.text.ts
│   ├── pricing.text.ts
│   ├── about.text.ts
│   └── contact.text.ts
├── lib/                  # Utilities
│   ├── seo.ts           # SEO helpers
│   └── schema.ts        # JSON-LD generator
├── public/img/           # Images (ADD YOUR IMAGES HERE)
└── [docs]                # Documentation files
```

**→ See [SITE_MAP.md](./SITE_MAP.md) for visual structure**

---

## 🎨 Design

**Color Palette (Kaszmirowa):**
- Background: `#FBF9F7` - warm light beige
- Primary: `#6B5B95` - cashmere mauve
- Accent: `#9FB7A7` - soft green
- Text: `#1E293B` - dark slate

**Typography:** Inter font family

**Responsive:** Mobile-first, breakpoints at 768px and 1024px

---

## ✅ Before You Deploy

Use the checklist in [PRE_LAUNCH_CHECKLIST.md](./PRE_LAUNCH_CHECKLIST.md):

- [ ] Add real phone number to `.env.local`
- [ ] Add real email to `.env.local`
- [ ] Add images to `/public/img/`
- [ ] Test on mobile, tablet, desktop
- [ ] Check all links work
- [ ] Update `NEXT_PUBLIC_SITE_URL` for production
- [ ] Build and test: `npm run build && npm run start`

---

## 🆘 Help & Support

**Common Issues:**

- **Dependencies won't install?** → Try `npm install --legacy-peer-deps`
- **Page blank?** → Check `.env.local` exists with correct values
- **Images not showing?** → Make sure files are in `/public/img/`
- **TypeScript errors?** → Run `npm run build` to see details

**Documentation:**
- Full docs: [README.md](./README.md)
- Deployment help: [DEPLOYMENT.md](./DEPLOYMENT.md)
- All docs index: [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)

---

## 📊 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Images:** Next/Image (automatic optimization)
- **Export:** Static (no server required)
- **SEO:** Metadata + JSON-LD structured data

---

## 🎯 Perfect For

✓ Local service businesses  
✓ Computer repair shops  
✓ IT support services  
✓ Mobile repair services  
✓ Any local B2C service

---

## 📄 License

Private project. All rights reserved.

---

## 🚀 Ready to Launch?

1. **Setup** → Read [QUICKSTART.md](./QUICKSTART.md)
2. **Customize** → Edit content files and `.env.local`
3. **Test** → Run locally, check mobile view
4. **Deploy** → Follow [DEPLOYMENT.md](./DEPLOYMENT.md)
5. **Go live!** → Share with customers 🎉

**Questions?** Check [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md) for navigation guide.

---

**Built with ❤️ for local businesses**
