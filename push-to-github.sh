#!/bin/bash

# Script to add all files and push to GitHub

echo "🚀 Preparing to push to GitHub..."
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Running git init..."
    git init
    git branch -M main
fi

# Check remote
echo "📡 Checking remote..."
if git remote get-url origin &> /dev/null; then
    echo "✅ Remote already set: $(git remote get-url origin)"
else
    echo "⚠️  Remote not set. Setting up remote..."
    git remote add origin git@github.com:cvvishwa/Marriage-anniversary.git
    echo "✅ Remote added"
fi

# Add all files
echo ""
echo "📦 Adding all files..."
git add .

# Check what will be committed
echo ""
echo "📝 Files to be committed:"
git status --short

# Commit
echo ""
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Add anniversary website - all files"
fi

git commit -m "$commit_msg"

# Push
echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your code is now on GitHub."
echo ""
echo "Next step: Deploy on Vercel!"
echo "1. Go to https://vercel.com"
echo "2. Sign up/login"
echo "3. Click 'New Project'"
echo "4. Import your repository: cvvishwa/Marriage-anniversary"
echo "5. Click 'Deploy'"
echo ""
echo "Your site will be live in ~2 minutes! 🎉"
