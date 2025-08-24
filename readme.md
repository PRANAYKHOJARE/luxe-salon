# 💇‍♀️ Luxe Salon - Full Stack Booking System

A modern, full-stack salon booking application built with React frontend and Node.js backend, featuring real-time booking management, admin dashboard, and beautiful UI.

## ✨ Features

### 🎨 Frontend (React)
- **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS
- **Real-time Booking** - Interactive booking system with date/time selection
- **Service Catalog** - Comprehensive service listings with categories
- **Admin Dashboard** - Full-featured admin panel with analytics
- **User Authentication** - Secure login/registration system
- **Responsive Design** - Mobile-first approach
- **Animations** - Smooth transitions with Framer Motion

### 🔧 Backend (Node.js)
- **RESTful API** - Complete API with Express.js
- **MongoDB Database** - Scalable data storage with Mongoose ODM
- **JWT Authentication** - Secure token-based authentication
- **Email Notifications** - Automated booking confirmations
- **Admin Management** - User and service management
- **Data Validation** - Input validation and sanitization
- **Rate Limiting** - API protection and security

### 📊 Admin Features
- **Dashboard Analytics** - Revenue, bookings, and user statistics
- **Booking Management** - View, edit, and manage appointments
- **Service Management** - Add, edit, and organize services
- **User Management** - Admin, stylist, and client accounts
- **Export Functionality** - Download booking data
- **Real-time Updates** - Live dashboard updates

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd salon
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   ```bash
   # Copy server environment file
   cp server/env.example server/.env
   
   # Edit server/.env with your configuration
   ```

4. **Configure MongoDB**
   - Install MongoDB locally, or
   - Use MongoDB Atlas (cloud)
   - Update `MONGODB_URI` in server/.env

5. **Start the development servers**
   ```bash
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📁 Project Structure

```
salon/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                # Node.js backend
│   ├── config/           # Configuration files
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions
│   └── package.json
├── package.json          # Root package.json
└── README.md
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the server directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/luxe-salon

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=Luxe Salon <noreply@luxesalon.com>
ADMIN_EMAIL=admin@luxesalon.com

# Client URL (for CORS)
CLIENT_URL=http://localhost:3000
```

### Email Setup

For Gmail:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in EMAIL_PASSWORD

For production, consider using:
- SendGrid
- AWS SES
- Mailgun

## 🎯 Available Scripts

### Root Level
```bash
npm run dev          # Start both frontend and backend
npm run server       # Start backend only
npm run client       # Start frontend only
npm run build        # Build frontend for production
npm run install-all  # Install all dependencies
```

### Backend (server/)
```bash
npm run dev          # Start with nodemon
npm start           # Start production server
```

### Frontend (client/)
```bash
npm start           # Start development server
npm run build       # Build for production
npm test            # Run tests
```

## 🗄️ Database Schema

### Users
- Admin, Stylist, Client roles
- Profile information
- Authentication data

### Services
- Service details (name, price, duration)
- Categories and availability
- Popular service flags

### Bookings
- Client information
- Service selection
- Appointment scheduling
- Status tracking

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication:

1. **Login/Register** - Get JWT token
2. **Protected Routes** - Require valid token
3. **Role-based Access** - Admin, Stylist, Client permissions
4. **Token Refresh** - Automatic token management

## 📧 Email Notifications

Automated emails are sent for:
- Booking confirmations
- Appointment reminders
- Booking cancellations
- Admin notifications

## 🎨 Customization

### Styling
- Tailwind CSS for styling
- Custom color scheme in `tailwind.config.js`
- Component-based design system

### Services
- Easy to add new service categories
- Flexible pricing and duration
- Service availability management

### Features
- Modular component architecture
- Easy to extend and customize
- Well-documented code

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy build folder
```

### Backend (Heroku/Railway)
```bash
cd server
# Set environment variables
# Deploy to platform
```

### Database
- MongoDB Atlas for cloud database
- Local MongoDB for development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code comments

## 🔮 Future Enhancements

- [ ] Real-time chat support
- [ ] Payment integration (Stripe)
- [ ] SMS notifications
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] Multi-location support
- [ ] Inventory management
- [ ] Staff scheduling

---

**Built with ❤️ using React, Node.js, and MongoDB**
