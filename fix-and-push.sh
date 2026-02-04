#!/bin/bash

# Fix and push script - Run this in your terminal

echo "🔧 Fixing git repository and pushing to GitHub..."
echo ""

# Navigate to project directory
cd /Users/chandravijayvishwakarma/Desktop/Marriage-anniversary

# Check if .git exists but is broken
if [ -d ".git" ]; then
    echo "⚠️  Found .git directory. Checking if it's valid..."
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        echo "❌ .git directory is corrupted. Reinitializing..."
        rm -rf .git
        git init
        git branch -M main
    else
        echo "✅ Git repository is valid"
    fi
else
    echo "📦 Initializing git repository..."
    git init
    git branch -M main
fi

# Set up remote
echo ""
echo "📡 Setting up remote..."
git remote remove origin 2>/dev/null
git remote add origin git@github.com:cvvishwa/Marriage-anniversary.git
echo "✅ Remote set to: git@github.com:cvvishwa/Marriage-anniversary.git"

# Add all files
echo ""
echo "📦 Adding all files..."
git add .

# Show what will be committed
echo ""
echo "📝 Files to be committed:"
git status --short

# Commit
echo ""
echo "💾 Committing files..."
git commit -m "Add complete anniversary website - all components, images, and assets"

# Check if we need to pull first (in case README.md exists on remote)
echo ""
echo "🔄 Checking remote..."
if git ls-remote --heads origin main 2>/dev/null | grep -q main; then
    echo "⚠️  Remote branch exists. Pulling first..."
    git pull origin main --allow-unrelated-histories --no-edit || echo "Pull had conflicts, continuing..."
fi

# Push
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
    echo "Next step: Deploy on Vercel!"
    echo "1. Go to https://vercel.com"
    echo "2. Sign up/login (use GitHub)"
    echo "3. Click 'New Project'"
    echo "4. Import: cvvishwa/Marriage-anniversary"
    echo "5. Click 'Deploy'"
    echo ""
    echo "Your site will be live in ~2 minutes! 🎉"
else
    echo ""
    echo "❌ Push failed. Common issues:"
    echo "1. SSH key not set up - use HTTPS instead:"
    echo "   git remote set-url origin https://github.com/cvvishwa/Marriage-anniversary.git"
    echo "   git push -u origin main"
    echo ""
    echo "2. Or set up SSH key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
fi
