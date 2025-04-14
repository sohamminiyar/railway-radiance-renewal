
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Star, Coffee, Wifi, Tv, Bath } from 'lucide-react';

const HotelsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-irctc-blue py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-white">IRCTC Hotel Bookings</h1>
            <p className="text-white/80 mt-2">Find comfortable stays near railway stations across India</p>
          </div>
        </div>
        
        <section className="bg-white py-8 shadow-md">
          <div className="container">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Find Hotels</h2>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City or Station</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="text"
                        id="city"
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irctc-blue focus:border-transparent"
                        placeholder="Enter city or station"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                    <input
                      type="date"
                      id="check-in"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irctc-blue focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
                    <input
                      type="date"
                      id="check-out"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irctc-blue focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <select
                      id="guests"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-irctc-blue focus:border-transparent"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <Button className="bg-irctc-blue hover:bg-irctc-blue/90">
                    <Search className="mr-2 h-4 w-4" />
                    Search Hotels
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Hotels</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "The Railway Retreat",
                  location: "Near New Delhi Railway Station",
                  image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  price: "₹2,999",
                  rating: 4.5,
                  amenities: ["Restaurant", "Free WiFi", "AC Rooms", "24/7 Reception"]
                },
                {
                  name: "Station View Hotel",
                  location: "Mumbai Central, Mumbai",
                  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  price: "₹3,499",
                  rating: 4.3,
                  amenities: ["Pool", "Restaurant", "Free WiFi", "Spa"]
                },
                {
                  name: "Railway Residency",
                  location: "MG Road, Bangalore",
                  image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  price: "₹2,799",
                  rating: 4.4,
                  amenities: ["Restaurant", "Free WiFi", "Business Center", "Airport Shuttle"]
                },
                {
                  name: "Howrah Gateway Hotel",
                  location: "Near Howrah Station, Kolkata",
                  image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
                  price: "₹2,499",
                  rating: 4.2,
                  amenities: ["Restaurant", "Free WiFi", "Conference Room", "Laundry"]
                },
                {
                  name: "Chennai Central Stay",
                  location: "Opposite Chennai Central",
                  image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  price: "₹2,399",
                  rating: 4.1,
                  amenities: ["Restaurant", "Free WiFi", "AC Rooms", "Room Service"]
                },
                {
                  name: "Taj Palace Express",
                  location: "Civil Lines, Agra",
                  image: "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  price: "₹3,999",
                  rating: 4.7,
                  amenities: ["Pool", "Spa", "Restaurant", "Free WiFi", "Taj Mahal View"]
                },
              ].map((hotel, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
                      {hotel.rating}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{hotel.name}</h3>
                    <div className="flex items-center text-gray-600 mb-3 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {hotel.location}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.map((amenity, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {getAmenityIcon(amenity)}
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="block text-gray-500 text-xs">per night</span>
                        <span className="text-lg font-bold text-irctc-blue">{hotel.price}</span>
                      </div>
                      <Button className="bg-irctc-blue hover:bg-irctc-blue/90">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button variant="outline" className="border-irctc-blue text-irctc-blue hover:bg-irctc-blue hover:text-white">
                View All Hotels
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">IRCTC Hotel Partner Program</h2>
                  <p className="text-gray-600 mb-6">
                    Are you a hotel owner near a railway station? Partner with IRCTC to reach millions of train travelers looking for convenient accommodations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 bg-irctc-blue/10 rounded-full flex items-center justify-center">
                        <div className="h-3 w-3 bg-irctc-blue rounded-full"></div>
                      </div>
                      <p className="ml-3 text-gray-600">Access to IRCTC's large customer base of train travelers</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 bg-irctc-blue/10 rounded-full flex items-center justify-center">
                        <div className="h-3 w-3 bg-irctc-blue rounded-full"></div>
                      </div>
                      <p className="ml-3 text-gray-600">Simplified booking process and payment collection</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 bg-irctc-blue/10 rounded-full flex items-center justify-center">
                        <div className="h-3 w-3 bg-irctc-blue rounded-full"></div>
                      </div>
                      <p className="ml-3 text-gray-600">Increased visibility and occupancy rates</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button className="bg-irctc-blue hover:bg-irctc-blue/90">
                      Become a Partner
                    </Button>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Hotel Partner Program" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Helper function to render amenity icons
const getAmenityIcon = (amenity: string) => {
  switch(amenity) {
    case 'Restaurant':
      return <Coffee className="inline-block h-3 w-3 mr-1" />;
    case 'Free WiFi':
      return <Wifi className="inline-block h-3 w-3 mr-1" />;
    case 'AC Rooms':
      return <Tv className="inline-block h-3 w-3 mr-1" />;
    case 'Spa':
      return <Bath className="inline-block h-3 w-3 mr-1" />;
    default:
      return null;
  }
};

export default HotelsPage;
