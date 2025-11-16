# 📚 Documentation Index

Welcome to the Serwis IT Landing Page project! This file helps you navigate all available documentation.

---

## 🎯 Quick Navigation

### Getting Started
1. **[QUICKSTART.md](./QUICKSTART.md)** ⭐ START HERE
   - 5-step quick setup guide
   - Install → Configure → Add images → Run → Done!

2. **[README.md](./README.md)** 📖 Full Documentation
   - Complete project overview
   - Folder structure
   - How to edit content
   - How to change colors
   - Development commands

3. **[PRE_LAUNCH_CHECKLIST.md](./PRE_LAUNCH_CHECKLIST.md)** ✅ Before You Deploy
   - Complete checklist before going live
   - Testing guidelines
   - SEO verification steps

---

## 🚀 Deployment & Production

4. **[DEPLOYMENT.md](./DEPLOYMENT.md)** 🌐 How to Deploy
   - 4 deployment options:
     - Vercel (easiest, recommended)
     - Netlify
     - Traditional hosting (FTP/cPanel)
     - GitHub Pages
   - Step-by-step for each option
   - Troubleshooting

5. **[.env.example](./.env.example)** 🔐 Environment Variables
   - Template for your configuration
   - Copy to `.env.local` and fill in your data

---

## 📝 Content & Reference

6. **[CONTENT_REFERENCE.md](./CONTENT_REFERENCE.md)** 📋 All Polish Copy
   - Complete list of all text content
   - Organized by section
   - Exact wording from brief
   - Perfect reference when editing

7. **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** 🎯 What's Included
   - Complete feature list
   - Technical specifications
   - Color palette details
   - File structure overview

8. **[CHANGELOG.md](./CHANGELOG.md)** 📅 Version History
   - Project timeline
   - What was built
   - Future enhancements ideas

---

## 💻 Code Documentation

### Main Files
- **`/app/page.tsx`** - Main homepage with all sections
- **`/app/layout.tsx`** - Root layout with fonts and metadata
- **`/components/*`** - Reusable React components
- **`/content/*`** - All text content in modular files
- **`/lib/*`** - Utility functions (SEO, JSON-LD schema)

### Configuration
- **`tailwind.config.js`** - Colors, fonts, spacing
- **`next.config.js`** - Next.js configuration
- **`tsconfig.json`** - TypeScript settings

---

## 📂 Quick Reference by Task

### "I want to..."

**...get started quickly**
→ Read [QUICKSTART.md](./QUICKSTART.md)

**...understand the full project**
→ Read [README.md](./README.md) and [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

**...edit text content**
→ Edit files in `/content/*.text.ts` folder
→ Reference [CONTENT_REFERENCE.md](./CONTENT_REFERENCE.md) for exact copy

**...change contact info (phone, email)**
→ Edit `.env.local` file
→ See [.env.example](./.env.example) for template

**...change colors**
→ Edit `tailwind.config.js`
→ See [README.md](./README.md) "Zmiana kolorów" section

**...change images**
→ Replace files in `/public/img/`
→ See [public/img/README.md](./public/img/README.md) for specs

**...edit the pricing table**
→ Edit `/content/pricing.text.ts`

**...deploy the website**
→ Read [DEPLOYMENT.md](./DEPLOYMENT.md)
→ Check [PRE_LAUNCH_CHECKLIST.md](./PRE_LAUNCH_CHECKLIST.md) first

**...understand the code structure**
→ Read [README.md](./README.md) "Struktura projektu" section
→ Look at [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

**...troubleshoot issues**
→ Check [DEPLOYMENT.md](./DEPLOYMENT.md) "Troubleshooting" section
→ Check [README.md](./README.md) "Wsparcie techniczne" section

---

## 🎨 Design & Branding

**Color Palette (Kaszmirowa):**
- Background: `#FBF9F7`
- Primary: `#6B5B95`
- Accent: `#9FB7A7`
- Text: `#1E293B`

See `tailwind.config.js` for all colors.

**Images Needed:**
- `hero_image.png` (1200x800px+)
- `profile_image.png` (400x400px)

See [public/img/README.md](./public/img/README.md)

---

## 📱 Support & Help

**Common Issues:**
- Dependencies not installing → Run `npm install` again
- Page not loading → Check `.env.local` exists and has correct values
- Images not showing → Check `/public/img/` folder
- TypeScript errors → Run `npm run build` to see exact issues

**Documentation Not Clear?**
- Check multiple docs - information may be in different files
- Use Ctrl+F / Cmd+F to search within files

---

## 📊 File List

```
Documentation Files:
├── 📄 QUICKSTART.md              ⭐ Quick 5-step setup
├── 📖 README.md                  Main documentation
├── ✅ PRE_LAUNCH_CHECKLIST.md    Before deployment checklist
├── 🌐 DEPLOYMENT.md              Deployment guide (4 options)
├── 📋 CONTENT_REFERENCE.md       All Polish text content
├── 🎯 PROJECT_SUMMARY.md         Complete project overview
├── 📅 CHANGELOG.md               Version history
├── 🔐 .env.example               Environment variables template
└── 📚 DOCUMENTATION_INDEX.md     This file

Configuration Files:
├── ⚙️  package.json              Dependencies & scripts
├── 🎨 tailwind.config.js         Tailwind configuration
├── ⚡ next.config.js             Next.js configuration
├── 📘 tsconfig.json              TypeScript configuration
└── 🎨 postcss.config.js          PostCSS configuration
```

---

## 🚀 Recommended Reading Order

### First Time Setup
1. [QUICKSTART.md](./QUICKSTART.md) - Get it running
2. [README.md](./README.md) - Understand how it works
3. Edit content files in `/content/`
4. [PRE_LAUNCH_CHECKLIST.md](./PRE_LAUNCH_CHECKLIST.md) - Test everything
5. [DEPLOYMENT.md](./DEPLOYMENT.md) - Go live!

### Making Changes
1. [CONTENT_REFERENCE.md](./CONTENT_REFERENCE.md) - See what's there
2. Edit `/content/*.text.ts` files
3. Edit `.env.local` for contact info
4. Test with `npm run dev`

### Before Launch
1. [PRE_LAUNCH_CHECKLIST.md](./PRE_LAUNCH_CHECKLIST.md) - Complete checklist
2. [DEPLOYMENT.md](./DEPLOYMENT.md) - Choose deployment method
3. Deploy and celebrate! 🎉

---

**Happy building! 🚀**

If you need to find something specific, use your editor's search function (Ctrl/Cmd + Shift + F) to search across all markdown files.
