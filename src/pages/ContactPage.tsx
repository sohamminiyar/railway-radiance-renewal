
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-irctc-blue py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help with any questions about train bookings, IRCTC services, or feedback. 
                  Fill out the form or use our contact details below to reach us.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-irctc-blue" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">Head Office</h3>
                      <p className="text-gray-600 mt-1">
                        Indian Railway Catering and Tourism Corporation Ltd.,<br />
                        11th Floor, Statesman House,<br />
                        Barakhamba Road, New Delhi - 110001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-irctc-blue" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600 mt-1">
                        Customer Care: 139 (24x7)<br />
                        Tourism Helpline: 1800-110-139
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-irctc-blue" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600 mt-1">
                        Customer Support: care@irctc.co.in<br />
                        Tourism Inquiries: tourism@irctc.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-irctc-blue" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">Office Hours</h3>
                      <p className="text-gray-600 mt-1">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irctc-blue focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irctc-blue focus:border-transparent"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irctc-blue focus:border-transparent"
                        placeholder="Subject of your message"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irctc-blue focus:border-transparent"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-irctc-blue hover:bg-irctc-blue/90 text-white">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Regional Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Mumbai</h3>
                <p className="text-gray-600 mb-3">
                  2nd Floor, Churchgate Station Building,<br />
                  Mumbai - 400020
                </p>
                <p className="text-gray-600">
                  Phone: 022-22672580<br />
                  Email: mumbai@irctc.com
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Kolkata</h3>
                <p className="text-gray-600 mb-3">
                  3rd Floor, New Koilaghat Building,<br />
                  Kolkata - 700001
                </p>
                <p className="text-gray-600">
                  Phone: 033-22138939<br />
                  Email: kolkata@irctc.com
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Chennai</h3>
                <p className="text-gray-600 mb-3">
                  Chennai Railway Station Complex,<br />
                  Chennai - 600003
                </p>
                <p className="text-gray-600">
                  Phone: 044-25369102<br />
                  Email: chennai@irctc.com
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Bangalore</h3>
                <p className="text-gray-600 mb-3">
                  SBC Railway Station Building,<br />
                  Bangalore - 560023
                </p>
                <p className="text-gray-600">
                  Phone: 080-22960157<br />
                  Email: bangalore@irctc.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
