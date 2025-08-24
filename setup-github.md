# 📦 GitHub Setup for Deployment

## Step 1: Initialize Git Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Full-stack salon booking application"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/luxe-salon.git

# Push to GitHub
git push -u origin main
```

## Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click "New repository"
3. Repository name: `luxe-salon`
4. Description: `Full-stack salon booking application with React frontend and Node.js backend`
5. Make it **Public** (for free deployment)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

## Step 3: Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/yourusername/luxe-salon.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your `luxe-salon` repository
5. Configure as shown in `deploy.md`

## Quick Setup Script

Run this command to automatically set up everything:

```bash
# Make sure you're in the project root directory
cd "D:\Udemey web Dev by hitesh(chai code)\salon"

# Initialize git and push to GitHub
git init
git add .
git commit -m "Initial commit: Full-stack salon booking application"
git remote add origin https://github.com/yourusername/luxe-salon.git
git push -u origin main
```

## Repository Structure

Your GitHub repository will contain:
```
luxe-salon/
├── client/                 # React frontend
├── server/                 # Node.js backend
├── package.json           # Root package.json
├── setup.js              # Setup script
├── deploy.md             # Deployment guide
├── README.md             # Project documentation
└── .gitignore           # Git ignore file
```

## Next Steps

1. ✅ Push code to GitHub
2. 🔗 Deploy backend to Vercel/Render
3. 🎨 Deploy frontend to Vercel
4. 🗄️ Set up MongoDB Atlas
5. 📧 Configure email settings
6. 🚀 Test your live application!

Your application will be live at:
- Frontend: `https://luxe-salon.vercel.app`
- Backend: `https://luxe-salon-api.vercel.app`
