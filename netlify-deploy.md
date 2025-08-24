# 🚀 Netlify Deployment Guide (via GitHub)

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click "New repository"
3. Repository name: `luxe-salon`
4. Description: `Full-stack salon booking application`
5. Make it **Public** (required for free deployment)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, run these commands:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/luxe-salon.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Netlify

### Frontend Deployment:
1. Go to [netlify.com](https://netlify.com) and sign up with GitHub
2. Click "New site from Git"
3. Choose "GitHub" as your Git provider
4. Select your `luxe-salon` repository
5. Configure build settings:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Add Environment Variables:
   ```
   REACT_APP_API_URL=https://your-backend-url.vercel.app
   ```
7. Click "Deploy site"

### Backend Deployment (Vercel):
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project"
3. Import your `luxe-salon` repository
4. Configure:
   - **Framework Preset**: Node.js
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
5. Add Environment Variables:
   ```
   MONGODB_URI=your-mongodb-atlas-connection-string
   JWT_SECRET=your-super-secret-jwt-key
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   CLIENT_URL=https://your-netlify-site.netlify.app
   ```
6. Click "Deploy"

## Your Live URLs:
- **Frontend**: `https://luxe-salon.netlify.app` (or similar)
- **Backend**: `https://luxe-salon-api.vercel.app` (or similar)

## Quick Setup Commands:

```bash
# Make sure you're in the project directory
cd "D:\Udemey web Dev by hitesh(chai code)\salon"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/luxe-salon.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Database Setup:
1. Create MongoDB Atlas account: [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create free cluster
3. Get connection string
4. Add to backend environment variables

## Email Setup:
1. Enable 2FA on Gmail
2. Generate app password
3. Add to backend environment variables

Your salon booking website will be live and fully functional!
