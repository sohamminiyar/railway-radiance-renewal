
import React from 'react';
import { Calendar, Percent, Award, AlertCircle } from 'lucide-react';

const promotions = [
  {
    id: 1,
    title: "Summer Special Trains",
    description: "Additional trains added for the summer season. Book early for best availability.",
    icon: <Calendar className="h-8 w-8 text-white" />,
    color: "bg-irctc-blue"
  },
  {
    id: 2,
    title: "Festive Discount",
    description: "Save 10% on AC tickets during upcoming festive season. Limited time offer.",
    icon: <Percent className="h-8 w-8 text-white" />,
    color: "bg-irctc-red"
  },
  {
    id: 3,
    title: "Premium Tatkal",
    description: "Premium Tatkal booking now available with enhanced service and seat guarantee.",
    icon: <Award className="h-8 w-8 text-white" />,
    color: "bg-irctc-yellow"
  }
];

const announcements = [
  {
    id: 1,
    text: "Train No. 12301 (Howrah - New Delhi) will operate with revised timings from 15th May 2025",
    date: "May 05, 2025"
  },
  {
    id: 2,
    text: "Special trains announced for Diwali and Chhath Puja 2025",
    date: "April 28, 2025"
  },
  {
    id: 3,
    text: "Maintenance work on Mumbai-Pune section may cause delays during June 1-5, 2025",
    date: "April 20, 2025"
  }
];

const PromotionsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Promotions */}
          <div className="lg:col-span-2">
            <h2 className="section-title mb-6">Latest Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promotions.map((promo) => (
                <div 
                  key={promo.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`${promo.color} p-4 flex justify-between items-center`}>
                    {promo.icon}
                    <span className="text-white font-medium text-sm">Limited Time</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{promo.title}</h3>
                    <p className="text-gray-600 text-sm">{promo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements */}
          <div>
            <h2 className="section-title mb-6">Announcements</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="space-y-6">
                {announcements.map((announcement) => (
                  <div 
                    key={announcement.id}
                    className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-irctc-red flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-700 text-sm mb-1">{announcement.text}</p>
                        <p className="text-gray-500 text-xs">{announcement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a 
                  href="#" 
                  className="text-irctc-blue font-medium text-sm hover:text-irctc-light-blue"
                >
                  View All Announcements
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
