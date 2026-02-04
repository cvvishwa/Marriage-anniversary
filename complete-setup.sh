#!/bin/bash

# Complete setup script - Initializes git and pushes everything

echo "🚀 Complete Git Setup and Push"
echo "================================"
echo ""

# Navigate to project directory
cd /Users/chandravijayvishwakarma/Desktop/Marriage-anniversary

# Step 1: Remove broken .git if it exists
if [ -d ".git" ]; then
    echo "⚠️  Found existing .git directory. Removing it..."
    rm -rf .git
fi

# Step 2: Initialize git
echo "📦 Initializing git repository..."
git init
git branch -M main

# Step 3: Set up remote
echo ""
echo "📡 Setting up remote..."
git remote add origin https://github.com/cvvishwa/Marriage-anniversary.git
echo "✅ Remote set to: https://github.com/cvvishwa/Marriage-anniversary.git"

# Step 4: Add all files
echo ""
echo "📦 Adding all files..."
git add .

# Step 5: Show what will be committed
echo ""
echo "📝 Files to be committed:"
git status --short | head -20
echo "..."

# Step 6: Commit
echo ""
echo "💾 Committing files..."
git commit -m "Add complete anniversary website - all components, images, videos, and assets"

# Step 7: Pull first (in case README.md exists on remote)
echo ""
echo "🔄 Pulling from remote (if exists)..."
git pull origin main --allow-unrelated-histories --no-edit 2>&1 || echo "No existing branch or pull completed"

# Step 8: Push
echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin main

# Check result
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! All files pushed to GitHub!"
    echo ""
    echo "🌐 Your repository: https://github.com/cvvishwa/Marriage-anniversary"
    echo ""
    echo "📋 Next steps:"
    echo "1. Go to https://vercel.com"
    echo "2. Sign up/login (use GitHub - it's free!)"
    echo "3. Click 'New Project'"
    echo "4. Import repository: cvvishwa/Marriage-anniversary"
    echo "5. Click 'Deploy'"
    echo ""
    echo "Your site will be live in ~2 minutes! 🎉"
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "1. Are you logged into GitHub? Run: gh auth login"
    echo "2. Or use personal access token"
    echo ""
    echo "Try running manually:"
    echo "git push -u origin main"
fi
