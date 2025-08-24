import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, MapPin, Phone } from 'lucide-react';

const BookingConfirmation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center py-12"
    >
      <div className="max-w-2xl w-full mx-auto px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-center mb-8"
        >
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Booking Confirmed!</h1>
          <p className="text-lg text-gray-600">
            Thank you for choosing Luxe Salon. Your appointment has been successfully booked.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Appointment Details</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-purple-600 mr-3" />
              <span className="text-gray-700">Monday, December 25, 2023</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-purple-600 mr-3" />
              <span className="text-gray-700">2:00 PM - 3:30 PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-purple-600 mr-3" />
              <span className="text-gray-700">123 Beauty Street, Downtown District</span>
            </div>
          </div>

          <div className="border-t pt-6 mt-6">
            <h3 className="font-bold text-lg mb-4">Service: Hair Styling</h3>
            <p className="text-gray-600 mb-4">Professional hair styling with our expert stylists</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Total:</span>
              <span className="text-2xl font-bold text-purple-600">$85</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-8"
        >
          <h3 className="font-bold text-lg mb-4">Important Information</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Please arrive 10 minutes before your appointment</li>
            <li>• Bring a valid ID for verification</li>
            <li>• Cancellations require 24 hours notice</li>
            <li>• We accept cash, credit cards, and digital payments</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center space-y-4"
        >
          <p className="text-gray-600">
            A confirmation email has been sent to your email address.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              View My Bookings
            </button>
            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors">
              Book Another Service
            </button>
          </div>

          <div className="pt-6 border-t">
            <p className="text-sm text-gray-600 mb-2">Need help? Contact us:</p>
            <div className="flex items-center justify-center">
              <Phone className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-purple-600">(555) 123-4567</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BookingConfirmation;
