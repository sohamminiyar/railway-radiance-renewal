
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrainSearchForm from '@/components/TrainSearchForm';
import { ArrowRight } from 'lucide-react';

const TrainsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-irctc-blue py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Find Trains</h1>
            <p className="text-white/80 mt-2">Search, book and manage train tickets across India</p>
          </div>
        </div>
        
        <section className="bg-white py-8 shadow-md">
          <div className="container">
            <TrainSearchForm />
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Popular Train Routes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { from: "Delhi", to: "Mumbai", price: "₹1,245", time: "16h 10m" },
                { from: "Mumbai", to: "Bangalore", price: "₹1,175", time: "21h 30m" },
                { from: "Delhi", to: "Kolkata", price: "₹1,490", time: "17h 15m" },
                { from: "Chennai", to: "Delhi", price: "₹1,850", time: "28h 45m" },
                { from: "Bangalore", to: "Delhi", price: "₹1,565", time: "22h 30m" },
                { from: "Kolkata", to: "Mumbai", price: "₹1,730", time: "26h 20m" },
              ].map((route, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-semibold text-gray-800">{route.from}</div>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                    <div className="text-lg font-semibold text-gray-800">{route.to}</div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="text-gray-600">From {route.price}</div>
                    <div className="text-gray-600">{route.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Train Travel Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Booking Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-irctc-blue text-white text-center leading-5 mr-3 flex-shrink-0">1</span>
                    <span>Book tickets 120 days in advance for better availability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-irctc-blue text-white text-center leading-5 mr-3 flex-shrink-0">2</span>
                    <span>Use the "Flexible With Date" option if your travel dates are adjustable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-irctc-blue text-white text-center leading-5 mr-3 flex-shrink-0">3</span>
                    <span>Check for Tatkal bookings if you need last-minute tickets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-irctc-blue text-white text-center leading-5 mr-3 flex-shrink-0">4</span>
                    <span>Keep passenger details saved in your account for faster bookings</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Onboard Tips</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-irctc-blue text-white text-center leading-5 mr-3 flex-shrink-0">1</span>
                    <span>Keep your ticket and ID proof handy for verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-irctc-blue text-white text-center leading-5 mr-3 flex-shrink-0">2</span>
                    <span>Order meals through e-catering services for better quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-irctc-blue text-white text-center leading-5 mr-3 flex-shrink-0">3</span>
                    <span>Use the IRCTC app to track your train's live location</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-irctc-blue text-white text-center leading-5 mr-3 flex-shrink-0">4</span>
                    <span>Keep valuable items secure and within sight during your journey</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrainsPage;
