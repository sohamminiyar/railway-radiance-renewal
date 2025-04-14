
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Hotel, Utensils, Train, Star, Camera, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from './Navbar';
import Footer from './Footer';

// Define our destination data structure
interface Attraction {
  name: string;
  description: string;
  image: string;
}

interface Accommodation {
  name: string;
  description: string;
  priceRange: string;
  rating: number;
}

interface Restaurant {
  name: string;
  cuisine: string;
  priceRange: string;
  rating: number;
}

interface TransportOption {
  type: string;
  description: string;
  price: string;
}

interface DestinationData {
  id: number;
  name: string;
  description: string;
  image: string;
  overview: string;
  attractions: Attraction[];
  accommodations: Accommodation[];
  dining: Restaurant[];
  transport: TransportOption[];
  bestTimeToVisit: string;
}

// Our destination database
const destinations: Record<string, DestinationData> = {
  "delhi": {
    id: 1,
    name: "Delhi",
    description: "Explore the rich history and culture of India's capital",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview: "Delhi, India's capital territory, is a massive metropolitan area in the country's north. It's an ancient city with rich history, stunning architecture, vibrant markets, and delicious cuisine. From the majestic Red Fort to the bustling Chandni Chowk, Delhi offers a fascinating blend of old and new India.",
    attractions: [
      {
        name: "Red Fort",
        description: "This UNESCO World Heritage Site is a historic fort that served as the main residence of the emperors of the Mughal dynasty.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Qutub Minar",
        description: "A soaring 73 m-high tower of victory, built in 1193 by Qutab-ud-din Aibak immediately after the defeat of Delhi's last Hindu kingdom.",
        image: "https://images.unsplash.com/photo-1599930113854-95bab8b7f7e7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Humayun's Tomb",
        description: "The tomb of the Mughal Emperor Humayun, commissioned by his first wife and chief consort, Empress Bega Begum in 1569-70.",
        image: "https://images.unsplash.com/photo-1567705977302-9e88b18b57ea?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ],
    accommodations: [
      {
        name: "The Imperial",
        description: "Luxury 5-star hotel with colonial architecture and elegant rooms.",
        priceRange: "₹15,000 - ₹50,000",
        rating: 5
      },
      {
        name: "The Leela Palace",
        description: "Opulent hotel with traditional Indian decor and modern amenities.",
        priceRange: "₹12,000 - ₹40,000",
        rating: 5
      },
      {
        name: "Bloom Rooms",
        description: "Budget-friendly clean rooms with essential amenities.",
        priceRange: "₹2,500 - ₹5,000",
        rating: 4
      }
    ],
    dining: [
      {
        name: "Bukhara",
        cuisine: "North Indian",
        priceRange: "₹₹₹₹",
        rating: 5
      },
      {
        name: "Karim's",
        cuisine: "Mughlai",
        priceRange: "₹₹",
        rating: 4
      },
      {
        name: "Saravana Bhavan",
        cuisine: "South Indian",
        priceRange: "₹",
        rating: 4
      }
    ],
    transport: [
      {
        type: "Metro",
        description: "Extensive network connecting most tourist spots",
        price: "₹10 - ₹60"
      },
      {
        type: "Auto Rickshaw",
        description: "Convenient for short distances",
        price: "₹25 base + ₹8/km"
      },
      {
        type: "Taxi",
        description: "Comfortable option for longer journeys",
        price: "₹25 base + ₹14/km"
      }
    ],
    bestTimeToVisit: "October to March, when the weather is pleasant and cool"
  },
  "agra": {
    id: 2,
    name: "Agra",
    description: "Visit the iconic Taj Mahal, a monument of eternal love",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview: "Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh. It is famous for being the home of the iconic Taj Mahal, one of the Seven Wonders of the World. Agra formed a part of the Mughal Empire, and you can find many historical monuments from this era throughout the city.",
    attractions: [
      {
        name: "Taj Mahal",
        description: "An ivory-white marble mausoleum commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Agra Fort",
        description: "A historical fort that was the main residence of the emperors of the Mughal Dynasty until 1638, when the capital was shifted from Agra to Delhi.",
        image: "https://images.unsplash.com/photo-1575566668200-7dcaa7b2cf32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Fatehpur Sikri",
        description: "A city founded in 1569 by the Mughal Emperor Akbar, and served as the capital of the Mughal Empire from 1571 to 1585.",
        image: "https://images.unsplash.com/photo-1590090208636-a2dd27aeb468?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ],
    accommodations: [
      {
        name: "The Oberoi Amarvilas",
        description: "Luxury hotel with breathtaking views of the Taj Mahal from every room.",
        priceRange: "₹30,000 - ₹80,000",
        rating: 5
      },
      {
        name: "Taj Hotel & Convention Centre",
        description: "Contemporary hotel with rooftop infinity pool overlooking the Taj Mahal.",
        priceRange: "₹8,000 - ₹15,000",
        rating: 4
      },
      {
        name: "Hotel Clarks Shiraz",
        description: "Mid-range hotel with comfortable rooms and good amenities.",
        priceRange: "₹4,000 - ₹8,000",
        rating: 4
      }
    ],
    dining: [
      {
        name: "Peshawri",
        cuisine: "North Indian",
        priceRange: "₹₹₹₹",
        rating: 5
      },
      {
        name: "Dasaprakash",
        cuisine: "South Indian",
        priceRange: "₹₹",
        rating: 4
      },
      {
        name: "Pinch of Spice",
        cuisine: "Multi-cuisine",
        priceRange: "₹₹",
        rating: 4
      }
    ],
    transport: [
      {
        type: "Auto Rickshaw",
        description: "Most common mode of transportation within the city",
        price: "₹20 base + ₹7/km"
      },
      {
        type: "Cycle Rickshaw",
        description: "Eco-friendly option for short distances",
        price: "₹50 - ₹100 per trip"
      },
      {
        type: "Taxi",
        description: "Available for day tours to cover all major attractions",
        price: "₹1,500 - ₹2,500 per day"
      }
    ],
    bestTimeToVisit: "October to March, when the weather is cool and pleasant"
  },
  "jaipur": {
    id: 3,
    name: "Jaipur",
    description: "The Pink City known for its stunning royal heritage",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview: "Jaipur, the capital of India's Rajasthan state, is known as the 'Pink City' due to the distinctive color of its buildings. The city was founded in 1727 by Maharaja Sawai Jai Singh II, and is a popular tourist destination forming a part of the Golden Triangle along with Delhi and Agra.",
    attractions: [
      {
        name: "Amber Fort",
        description: "A majestic fort overlooking Maota Lake, known for its artistic style elements.",
        image: "https://images.unsplash.com/photo-1599661046827-9da7aa4ffe78?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Hawa Mahal",
        description: "A palace with 953 small windows called jharokhas decorated with intricate latticework.",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "City Palace",
        description: "A palace complex that includes the Chandra Mahal and Mubarak Mahal, and other buildings.",
        image: "https://images.unsplash.com/photo-1592293496366-57a3b3d0aa1d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ],
    accommodations: [
      {
        name: "Rambagh Palace",
        description: "Former residence of the Maharaja of Jaipur, now a luxury heritage hotel.",
        priceRange: "₹25,000 - ₹70,000",
        rating: 5
      },
      {
        name: "Jai Mahal Palace",
        description: "18th-century palace set amidst 18 acres of landscaped Mughal gardens.",
        priceRange: "₹15,000 - ₹40,000",
        rating: 5
      },
      {
        name: "Zostel Jaipur",
        description: "Vibrant hostel with private rooms and dormitories for budget travelers.",
        priceRange: "₹500 - ₹2,000",
        rating: 4
      }
    ],
    dining: [
      {
        name: "Suvarna Mahal",
        cuisine: "Royal Rajasthani",
        priceRange: "₹₹₹₹",
        rating: 5
      },
      {
        name: "Chokhi Dhani",
        cuisine: "Traditional Rajasthani",
        priceRange: "₹₹₹",
        rating: 4
      },
      {
        name: "Laxmi Misthan Bhandar (LMB)",
        cuisine: "Vegetarian Rajasthani",
        priceRange: "₹₹",
        rating: 4
      }
    ],
    transport: [
      {
        type: "Auto Rickshaw",
        description: "Convenient for short distances within the city",
        price: "₹20 base + ₹8/km"
      },
      {
        type: "Pink City Rickshaw",
        description: "Women-driven e-rickshaws for exploring the old city",
        price: "₹700 - ₹1,000 for 2 hours"
      },
      {
        type: "Rental Car",
        description: "Comfortable option for exploring the city and outskirts",
        price: "₹1,500 - ₹3,000 per day"
      }
    ],
    bestTimeToVisit: "October to March, when the weather is pleasant and many cultural festivals take place"
  },
  "varanasi": {
    id: 4,
    name: "Varanasi",
    description: "Experience the spiritual heart of India on the banks of Ganges",
    image: "https://images.unsplash.com/photo-1561361058-c12e04bd9c4d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview: "Varanasi, one of the world's oldest continually inhabited cities, is the spiritual capital of India. Situated on the banks of the sacred Ganges River, it's a major religious hub where pilgrims come to wash away their sins in the sacred waters or to cremate their loved ones. The city offers a unique blend of ancient traditions and modern life.",
    attractions: [
      {
        name: "Kashi Vishwanath Temple",
        description: "One of the most famous Hindu temples dedicated to Lord Shiva, located on the western bank of the Ganges.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Dashashwamedh Ghat",
        description: "The main ghat in Varanasi on the Ganges River, known for its spectacular Ganga Aarti ceremony.",
        image: "https://images.unsplash.com/photo-1561361058-c12e04bd9c4d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Sarnath",
        description: "An important Buddhist pilgrimage site where Buddha gave his first sermon after attaining enlightenment.",
        image: "https://images.unsplash.com/photo-1663430083558-2a12208e4de5?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ],
    accommodations: [
      {
        name: "Taj Ganges",
        description: "Luxury hotel set amidst 40 acres of lush gardens.",
        priceRange: "₹7,000 - ₹15,000",
        rating: 5
      },
      {
        name: "BrijRama Palace",
        description: "Heritage hotel on the Darbhanga Ghat with stunning views of the Ganges.",
        priceRange: "₹12,000 - ₹25,000",
        rating: 5
      },
      {
        name: "Zostel Varanasi",
        description: "Backpacker hostel with clean dorms and private rooms.",
        priceRange: "₹500 - ₹2,000",
        rating: 4
      }
    ],
    dining: [
      {
        name: "Bati Chokha",
        cuisine: "Traditional Banarasi",
        priceRange: "₹₹",
        rating: 4
      },
      {
        name: "Brown Bread Bakery",
        cuisine: "Continental and Indian",
        priceRange: "₹₹",
        rating: 4
      },
      {
        name: "Varanasi Cafe",
        cuisine: "Multi-cuisine",
        priceRange: "₹₹",
        rating: 4
      }
    ],
    transport: [
      {
        type: "Auto Rickshaw",
        description: "Common mode of transportation within the city",
        price: "₹20 base + ₹7/km"
      },
      {
        type: "Boat Ride",
        description: "Popular way to explore the ghats along the Ganges",
        price: "₹500 - ₹2,000 depending on duration"
      },
      {
        type: "Cycle Rickshaw",
        description: "Suitable for exploring the narrow lanes of the old city",
        price: "₹50 - ₹100 per short trip"
      }
    ],
    bestTimeToVisit: "November to February, when the weather is cool and pleasant for ghat walks and boat rides"
  }
};

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Check if the destination exists
  if (!id || !destinations[id.toLowerCase()]) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto py-12 flex-grow">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Destination Not Found</h1>
            <p className="text-gray-600 mb-8">Sorry, we couldn't find information about this destination.</p>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const destination = destinations[id.toLowerCase()];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="relative h-[50vh]"
        style={{
          backgroundImage: `url(${destination.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full p-8">
          <div className="container mx-auto">
            <Link to="/" className="inline-flex items-center text-white mb-4 hover:text-irctc-yellow transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{destination.name}</h1>
            <p className="text-xl text-white/80">{destination.description}</p>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto py-12 flex-grow">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="section-title mb-6">Overview</h2>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">{destination.overview}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="inline-flex items-center px-4 py-2 bg-irctc-blue/10 text-irctc-blue rounded-full">
                <MapPin className="h-4 w-4 mr-2" />
                Best Time: {destination.bestTimeToVisit}
              </div>
            </div>
          </div>
        </section>
        
        {/* Top Attractions */}
        <section className="mb-16">
          <h2 className="section-title mb-6">Top Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destination.attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold">{attraction.name}</CardTitle>
                    <Camera className="h-5 w-5 text-irctc-blue" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Accommodations */}
        <section className="mb-16">
          <h2 className="section-title mb-6">Where to Stay</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destination.accommodations.map((hotel, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold">{hotel.name}</CardTitle>
                    <Hotel className="h-5 w-5 text-irctc-blue" />
                  </div>
                  <CardDescription>
                    {Array(hotel.rating).fill(0).map((_, i) => (
                      <Star key={i} className="inline-block h-4 w-4 text-irctc-yellow fill-irctc-yellow" />
                    ))}
                    <span className="ml-2">{hotel.priceRange}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{hotel.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Dining Options */}
        <section className="mb-16">
          <h2 className="section-title mb-6">Where to Eat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destination.dining.map((restaurant, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold">{restaurant.name}</CardTitle>
                    <Utensils className="h-5 w-5 text-irctc-blue" />
                  </div>
                  <CardDescription>
                    {Array(restaurant.rating).fill(0).map((_, i) => (
                      <Star key={i} className="inline-block h-4 w-4 text-irctc-yellow fill-irctc-yellow" />
                    ))}
                    <span className="ml-2">{restaurant.priceRange}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="px-3 py-1 bg-gray-100 text-sm rounded-full inline-block">
                    {restaurant.cuisine}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Transport Options */}
        <section className="mb-16">
          <h2 className="section-title mb-6">Getting Around</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destination.transport.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold">{option.type}</CardTitle>
                    <Train className="h-5 w-5 text-irctc-blue" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{option.description}</p>
                  <div className="px-3 py-1 bg-gray-100 text-sm rounded-full inline-block">
                    {option.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Book a Train */}
        <section className="bg-irctc-blue/10 p-8 rounded-xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-irctc-blue mb-4">Ready to Visit {destination.name}?</h2>
            <p className="text-gray-600 mb-6">Book your train tickets and start your journey with Indian Railways.</p>
            <Link to="/">
              <Button className="bg-irctc-blue hover:bg-irctc-blue/90">Book Train Tickets</Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DestinationDetail;
