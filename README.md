## Pooja ❤️ Chandra – Anniversary Website

Romantic, modern, single-page anniversary site built with **React**, **Vite-style setup**, **Tailwind CSS**, and **Framer Motion**.

### Run locally

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start dev server**
   ```bash
   npm run dev
   ```

Then open the printed local URL in your browser.

### Tech stack

- **React + Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **react-confetti** for the surprise section

### Main sections

- **Hero** with typing animation and smooth scroll
- **Memory Gallery** with lightbox
- **Love Timeline**
- **Love Letter**
- **Days Counter** (from 04 Feb 2022 to today)
- **Surprise button** with confetti & modal
- **Background music** with play / pause
- **Footer** – “Made with ❤️ by Chandra”

You can replace the placeholder gallery photos and the background music URL with your own to personalize it even more for Pooja. 💖

## 🚀 Free Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Push your code to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign up/login (free)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes! 🎉

**Benefits**: Free, automatic HTTPS, custom domain support, instant deployments on git push

---

### Option 2: Netlify (Also Very Easy)

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign up/login (free)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"
   - Your site will be live! 🎉

**Benefits**: Free, automatic HTTPS, custom domain support, form handling

---

### Option 3: Cloudflare Pages (Fast & Free)

1. **Push to GitHub**

2. **Deploy on Cloudflare Pages**:
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign up/login
   - Click "Create a project" → "Connect to Git"
   - Select your repository
   - Build settings:
     - Framework preset: Vite
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"

**Benefits**: Free, very fast CDN, unlimited bandwidth

---

### Option 4: GitHub Pages (Free but requires setup)

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages** in your repo settings → Pages → Source: `gh-pages` branch

---

### Quick Comparison

| Platform | Easiest | Speed | Custom Domain | Auto Deploy |
|----------|---------|-------|---------------|-------------|
| **Vercel** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Free | ✅ Yes |
| **Netlify** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Free | ✅ Yes |
| **Cloudflare** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Free | ✅ Yes |
| **GitHub Pages** | ⭐⭐⭐ | ⭐⭐⭐ | ✅ Free | ⚠️ Manual |

**Recommendation**: Use **Vercel** for the easiest experience! 🚀
