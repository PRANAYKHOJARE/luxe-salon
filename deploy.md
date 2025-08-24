# 🚀 Deployment Guide for Luxe Salon Full-Stack Application

## Quick Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

#### Frontend Deployment (React)
1. **Sign up for Vercel**: Go to [vercel.com](https://vercel.com) and create an account
2. **Connect your GitHub**: Link your GitHub account to Vercel
3. **Deploy Frontend**:
   - Click "New Project" in Vercel dashboard
   - Import your GitHub repository
   - Set the following configuration:
     - **Framework Preset**: Create React App
     - **Root Directory**: `client`
     - **Build Command**: `npm run build`
     - **Output Directory**: `build`
   - Add Environment Variables:
     ```
     REACT_APP_API_URL=https://your-backend-url.vercel.app
     ```
   - Click "Deploy"

#### Backend Deployment (Node.js)
1. **Deploy Backend**:
   - Click "New Project" in Vercel dashboard
   - Import the same GitHub repository
   - Set the following configuration:
     - **Framework Preset**: Node.js
     - **Root Directory**: `server`
     - **Build Command**: `npm install`
     - **Output Directory**: (leave empty)
   - Add Environment Variables:
     ```
     MONGODB_URI=your-mongodb-atlas-connection-string
     JWT_SECRET=your-super-secret-jwt-key
     EMAIL_SERVICE=gmail
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASSWORD=your-app-password
     EMAIL_FROM=Luxe Salon <noreply@luxesalon.com>
     ADMIN_EMAIL=admin@luxesalon.com
     CLIENT_URL=https://your-frontend-url.vercel.app
     ```
   - Click "Deploy"

### Option 2: Render (Alternative - Free)

#### Backend Deployment
1. **Sign up for Render**: Go to [render.com](https://render.com) and create an account
2. **Create Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Set configuration:
     - **Name**: `luxe-salon-api`
     - **Root Directory**: `server`
     - **Runtime**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
   - Add Environment Variables (same as above)
   - Click "Create Web Service"

#### Frontend Deployment
1. **Create Static Site**:
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Set configuration:
     - **Name**: `luxe-salon-frontend`
     - **Root Directory**: `client`
     - **Build Command**: `npm run build`
     - **Publish Directory**: `build`
   - Add Environment Variables:
     ```
     REACT_APP_API_URL=https://your-backend-url.onrender.com
     ```
   - Click "Create Static Site"

## Database Setup (MongoDB Atlas)

1. **Create MongoDB Atlas Account**: Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. **Create Cluster**: Choose the free tier (M0)
3. **Get Connection String**: 
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Replace `<dbname>` with `luxe-salon`

## Email Setup (Gmail)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. **Use the app password** in your EMAIL_PASSWORD environment variable

## Deployment Checklist

- [ ] MongoDB Atlas cluster created and connection string obtained
- [ ] Gmail app password generated for email notifications
- [ ] Backend deployed and URL obtained
- [ ] Frontend deployed with correct API URL
- [ ] Environment variables configured
- [ ] Test the application functionality

## Post-Deployment

After deployment, your application will be available at:
- **Frontend**: `https://your-app-name.vercel.app`
- **Backend**: `https://your-api-name.vercel.app`

## Troubleshooting

### Common Issues:
1. **CORS Errors**: Make sure CLIENT_URL in backend matches your frontend URL
2. **Database Connection**: Verify MongoDB Atlas connection string and network access
3. **Email Not Working**: Check Gmail app password and 2FA settings
4. **Build Failures**: Ensure all dependencies are in package.json

### Support:
- Check Vercel/Render deployment logs for specific errors
. Verify environment variables are correctly set
- Test API endpoints using tools like Postman

## Quick Commands for Local Testing

```bash
# Test backend locally
cd server
npm run dev

# Test frontend locally
cd client
npm start

# Test full stack locally
npm run dev
```

Your deployed application will be a fully functional salon booking system with:
- User authentication and registration
- Service booking and management
- Admin dashboard with analytics
- Email notifications
- Responsive design
- Real-time availability checking
