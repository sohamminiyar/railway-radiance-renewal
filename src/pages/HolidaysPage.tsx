
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HolidaysPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-irctc-blue py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-white">IRCTC Holiday Packages</h1>
            <p className="text-white/80 mt-2">Explore India with our curated travel packages</p>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Popular Packages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Golden Triangle Tour",
                  image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
                  days: "6 Days / 5 Nights",
                  price: "₹24,999",
                  description: "Explore Delhi, Agra, and Jaipur with this classic Indian tour package."
                },
                {
                  title: "Kerala Backwaters",
                  image: "https://images.unsplash.com/photo-1602215135424-8661f8805bcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  days: "5 Days / 4 Nights",
                  price: "₹19,999",
                  description: "Experience the serene backwaters, beaches, and culture of God's Own Country."
                },
                {
                  title: "North East Explorer",
                  image: "https://images.unsplash.com/photo-1626621331169-5f38897bae05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  days: "8 Days / 7 Nights",
                  price: "₹29,999",
                  description: "Discover the untouched beauty of India's northeastern states."
                },
                {
                  title: "Rajasthan Heritage",
                  image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  days: "7 Days / 6 Nights",
                  price: "₹26,999",
                  description: "Explore the majestic forts, palaces, and deserts of royal Rajasthan."
                },
                {
                  title: "Himalayan Adventure",
                  image: "https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  days: "9 Days / 8 Nights",
                  price: "₹32,999",
                  description: "Trek through the breathtaking landscapes of the Himalayan mountains."
                },
                {
                  title: "South India Temple Tour",
                  image: "https://images.unsplash.com/photo-1606298855420-f6bda7a90699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  days: "6 Days / 5 Nights",
                  price: "₹22,999",
                  description: "Visit the ancient temples of Tamil Nadu and Karnataka."
                },
              ].map((package_, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-52">
                    <img 
                      src={package_.image} 
                      alt={package_.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-bold text-irctc-blue">
                      {package_.days}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{package_.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{package_.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-irctc-blue">{package_.price}</span>
                      <Button variant="outline" className="text-irctc-blue border-irctc-blue hover:bg-irctc-blue hover:text-white">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button className="bg-irctc-blue hover:bg-irctc-blue/90">
                View All Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose IRCTC Holidays?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We combine our expertise in train travel with curated travel experiences to offer you the best holiday packages across India.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="w-16 h-16 bg-irctc-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-irctc-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Hassle-Free Booking</h3>
                <p className="text-gray-600">
                  Book your entire holiday including train tickets, hotels, and activities through one platform.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="w-16 h-16 bg-irctc-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-irctc-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Curated Experiences</h3>
                <p className="text-gray-600">
                  Our travel experts design packages that highlight the best experiences at each destination.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="w-16 h-16 bg-irctc-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-irctc-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Value for Money</h3>
                <p className="text-gray-600">
                  Enjoy competitive pricing and special discounts exclusive to IRCTC Holiday customers.
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

export default HolidaysPage;
