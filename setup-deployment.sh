#!/bin/bash

# Setup script for deploying the Anniversary website
# This will initialize git and prepare everything for deployment

echo "🎉 Setting up deployment for Pooja ❤️ Chandra Anniversary Website..."
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git branch -M main
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Check if there are any changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Creating initial commit..."
    git commit -m "Initial commit: Anniversary website for Pooja ❤️ Chandra"
    echo "✅ Files committed"
fi

echo ""
echo "✨ Setup complete! Next steps:"
echo ""
echo "1. Create a GitHub repository:"
echo "   - Go to https://github.com/new"
echo "   - Name it (e.g., 'marriage-anniversary' or 'pooja-chandra-anniversary')"
echo "   - Don't initialize with README (we already have one)"
echo "   - Click 'Create repository'"
echo ""
echo "2. Connect and push to GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
echo "   git push -u origin main"
echo ""
echo "3. Deploy on Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Sign up/login (free)"
echo "   - Click 'New Project'"
echo "   - Import your GitHub repository"
echo "   - Click 'Deploy'"
echo "   - Your site will be live in ~2 minutes! 🚀"
echo ""
echo "Need help? Check the README.md for detailed instructions."
