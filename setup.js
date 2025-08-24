#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Luxe Salon Full-Stack Application...\n');

// Check if Node.js is installed
try {
  const nodeVersion = execSync('node --version', { encoding: 'utf8' });
  console.log(`✅ Node.js version: ${nodeVersion.trim()}`);
} catch (error) {
  console.error('❌ Node.js is not installed. Please install Node.js first.');
  process.exit(1);
}

// Check if npm is installed
try {
  const npmVersion = execSync('npm --version', { encoding: 'utf8' });
  console.log(`✅ npm version: ${npmVersion.trim()}\n`);
} catch (error) {
  console.error('❌ npm is not installed. Please install npm first.');
  process.exit(1);
}

// Install root dependencies
console.log('📦 Installing root dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Root dependencies installed successfully!\n');
} catch (error) {
  console.error('❌ Failed to install root dependencies.');
  process.exit(1);
}

// Install server dependencies
console.log('🔧 Installing server dependencies...');
try {
  execSync('cd server && npm install', { stdio: 'inherit' });
  console.log('✅ Server dependencies installed successfully!\n');
} catch (error) {
  console.error('❌ Failed to install server dependencies.');
  process.exit(1);
}

// Install client dependencies
console.log('🎨 Installing client dependencies...');
try {
  execSync('cd client && npm install', { stdio: 'inherit' });
  console.log('✅ Client dependencies installed successfully!\n');
} catch (error) {
  console.error('❌ Failed to install client dependencies.');
  process.exit(1);
}

// Create .env file if it doesn't exist
const envPath = path.join(__dirname, 'server', '.env');
const envExamplePath = path.join(__dirname, 'server', 'env.example');

if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
  console.log('📝 Creating environment file...');
  try {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ Environment file created successfully!\n');
    console.log('⚠️  Please update server/.env with your configuration:\n');
    console.log('   - MongoDB connection string');
    console.log('   - JWT secret key');
    console.log('   - Email configuration\n');
  } catch (error) {
    console.error('❌ Failed to create environment file.');
  }
}

// Check if MongoDB is running (optional)
console.log('🗄️  Checking MongoDB connection...');
try {
  execSync('mongosh --eval "db.runCommand(\'ping\')"', { stdio: 'ignore' });
  console.log('✅ MongoDB is running!\n');
} catch (error) {
  console.log('⚠️  MongoDB is not running or not accessible.');
  console.log('   Please make sure MongoDB is installed and running.\n');
}

console.log('🎉 Setup completed successfully!\n');
console.log('📋 Next steps:');
console.log('   1. Update server/.env with your configuration');
console.log('   2. Start MongoDB (if not already running)');
console.log('   3. Run "npm run dev" to start both frontend and backend');
console.log('   4. Open http://localhost:3000 in your browser\n');
console.log('🔗 Useful commands:');
console.log('   npm run dev          - Start both frontend and backend');
console.log('   npm run server       - Start backend only');
console.log('   npm run client       - Start frontend only');
console.log('   npm run build        - Build frontend for production\n');
console.log('📚 For more information, check the README.md file.');
