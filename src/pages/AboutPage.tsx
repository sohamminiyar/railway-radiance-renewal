
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-irctc-blue py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-white">About IRCTC</h1>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  Indian Railway Catering and Tourism Corporation (IRCTC) is committed to providing world-class hospitality, catering, 
                  travel, and tourism services across Indian Railways and beyond, enhancing the passenger experience through innovation 
                  and technology.
                </p>
                <p className="text-gray-600">
                  We strive to make train travel in India comfortable, convenient, and accessible for all passengers, while maintaining 
                  the highest standards of service and safety.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1601920448258-146c1af416b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Indian Railways" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our History</h2>
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1999 - Establishment</h3>
                <p className="text-gray-600">
                  IRCTC was incorporated on September 27, 1999, as an extended arm of the Indian Railways to upgrade, professionalize, 
                  and manage catering and hospitality services at stations, on trains, and other locations.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2002 - Online Ticketing</h3>
                <p className="text-gray-600">
                  IRCTC revolutionized rail travel in India by launching online ticket booking services, making it convenient for 
                  passengers to book tickets from the comfort of their homes.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2005-2010 - Expansion</h3>
                <p className="text-gray-600">
                  During this period, IRCTC expanded its services to include tourism packages, luxury train services, and 
                  budget hotel accommodations at various tourist destinations across India.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">2010-Present - Digital Transformation</h3>
                <p className="text-gray-600">
                  IRCTC has continuously evolved its digital services with mobile apps, e-wallets, and enhanced online platforms, 
                  serving millions of passengers daily while expanding into hospitality, tourism, and packaged drinking water.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Rajesh Kumar</h3>
                <p className="text-gray-600 mb-2">Chairman & Managing Director</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                    alt="CFO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Priya Sharma</h3>
                <p className="text-gray-600 mb-2">Director of Finance</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="CTO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Vikram Singh</h3>
                <p className="text-gray-600 mb-2">Director of Operations</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
