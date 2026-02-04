# 🚀 Quick Deployment Guide

## Step 1: Run the Setup Script

Open your terminal in this folder and run:

```bash
./setup-deployment.sh
```

This will:
- ✅ Initialize git repository
- ✅ Add all files
- ✅ Create initial commit

---

## Step 2: Create GitHub Repository

1. Go to **https://github.com/new**
2. Repository name: `marriage-anniversary` (or any name you like)
3. **Don't** check "Initialize with README" (we already have one)
4. Click **"Create repository"**

---

## Step 3: Connect to GitHub

Copy the commands GitHub shows you, or run these (replace YOUR_USERNAME and YOUR_REPO_NAME):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## Step 4: Deploy on Vercel (Free & Easy!)

1. Go to **https://vercel.com**
2. Click **"Sign Up"** (use GitHub to sign in - it's free!)
3. Click **"New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect everything:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **"Deploy"**
7. Wait ~2 minutes... 🎉 **Your site is live!**

You'll get a URL like: `https://your-site.vercel.app`

---

## 🎁 Bonus: Custom Domain (Free!)

After deployment:
1. Go to your project settings on Vercel
2. Click **"Domains"**
3. Add your custom domain (if you have one)
4. Vercel will set up SSL automatically!

---

## Alternative: Deploy on Netlify

1. Go to **https://netlify.com**
2. Sign up/login (free)
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect GitHub
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **"Deploy site"**

---

## Need Help?

- Check `README.md` for more details
- Vercel docs: https://vercel.com/docs
- Netlify docs: https://docs.netlify.com

**That's it! Your beautiful anniversary website will be live for free! 💖**
