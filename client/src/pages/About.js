import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50"
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">About Luxe Salon</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Where beauty meets excellence. We've been transforming lives through exceptional beauty services for over a decade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Luxe Salon began with a simple mission: to provide exceptional beauty services in a welcoming, luxurious environment. What started as a small local salon has grown into a premier destination for beauty and wellness.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of certified professionals brings years of experience and a passion for beauty to every service. We believe that everyone deserves to feel beautiful and confident, and we're committed to making that a reality for every client who walks through our doors.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to innovate and expand our services while maintaining the personal touch and attention to detail that our clients have come to love and trust.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="w-6 h-6 mr-3" />
                  <span>Certified professionals with years of experience</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-6 h-6 mr-3" />
                  <span>Personalized care and attention to detail</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 mr-3" />
                  <span>Welcoming and inclusive environment</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 mr-3" />
                  <span>Premium quality products and services</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our talented team of beauty professionals is dedicated to helping you look and feel your best.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Senior Stylist",
                experience: "8+ years",
                specialty: "Hair Coloring & Styling"
              },
              {
                name: "Maria Rodriguez",
                role: "Makeup Artist",
                experience: "6+ years",
                specialty: "Bridal & Special Events"
              },
              {
                name: "Emily Chen",
                role: "Nail Technician",
                experience: "5+ years",
                specialty: "Gel Extensions & Art"
              },
              {
                name: "Jessica Williams",
                role: "Esthetician",
                experience: "7+ years",
                specialty: "Facial Treatments"
              },
              {
                name: "Amanda Davis",
                role: "Massage Therapist",
                experience: "4+ years",
                specialty: "Relaxation & Wellness"
              },
              {
                name: "Lisa Thompson",
                role: "Salon Manager",
                experience: "10+ years",
                specialty: "Client Relations"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-2">{member.experience} experience</p>
                <p className="text-sm text-gray-500">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at Luxe Salon.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every service we provide."
              },
              {
                title: "Integrity",
                description: "Honest, transparent, and trustworthy in all our dealings."
              },
              {
                title: "Innovation",
                description: "Always learning and adopting the latest beauty trends."
              },
              {
                title: "Community",
                description: "Building lasting relationships with our clients and community."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {value.title[0]}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl mb-8 opacity-90">
              Book your appointment today and discover why our clients keep coming back.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              Book Now
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
