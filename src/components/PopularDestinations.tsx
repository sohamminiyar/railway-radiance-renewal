
import React from 'react';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: "Delhi",
    description: "Explore the rich history and culture of India's capital",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹999"
  },
  {
    id: 2,
    name: "Agra",
    description: "Visit the iconic Taj Mahal, a monument of eternal love",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹1299"
  },
  {
    id: 3,
    name: "Jaipur",
    description: "The Pink City known for its stunning royal heritage",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹1499"
  },
  {
    id: 4,
    name: "Varanasi",
    description: "Experience the spiritual heart of India on the banks of Ganges",
    image: "https://images.unsplash.com/photo-1561361058-c12e04bd9c4d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹1799"
  }
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover India's most beloved destinations accessible by train. 
            From historical monuments to spiritual towns, Indian Railways connects you to the best places.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-bold text-irctc-blue">
                  {destination.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{destination.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-irctc-blue font-medium hover:text-irctc-light-blue"
                >
                  Book now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href="#" 
            className="btn-primary inline-flex items-center"
          >
            View All Destinations
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
