
import React from 'react';
import { Train, Utensils, Briefcase, Hotel, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Train className="h-10 w-10 text-irctc-blue" />,
    title: "Train Tickets",
    description: "Book train tickets easily with multiple payment options and instant confirmation."
  },
  {
    id: 2,
    icon: <Utensils className="h-10 w-10 text-irctc-blue" />,
    title: "Catering",
    description: "Order delicious meals for your journey from a wide range of cuisines."
  },
  {
    id: 3,
    icon: <Hotel className="h-10 w-10 text-irctc-blue" />,
    title: "Hotels",
    description: "Book comfortable stays at your destination with IRCTC's hotel partners."
  },
  {
    id: 4,
    icon: <Globe className="h-10 w-10 text-irctc-blue" />,
    title: "Tour Packages",
    description: "Choose from a variety of complete tour packages for a hassle-free holiday."
  },
  {
    id: 5,
    icon: <Briefcase className="h-10 w-10 text-irctc-blue" />,
    title: "Corporate Travel",
    description: "Special booking and travel services for corporate clients and bulk bookings."
  }
];

const Services = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the complete range of travel services offered by IRCTC, 
            from ticketing to tourism, all designed for your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card"
            >
              <div className="mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-irctc-blue font-medium hover:text-irctc-light-blue"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
