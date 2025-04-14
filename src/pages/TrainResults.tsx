
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPin, Search, Clock, Train as TrainIcon, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { format, parseISO } from 'date-fns';
import { getTrainsData, Train } from '@/data/trainsData';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const TrainResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const searchParams = location.state || {
    from: "New Delhi",
    to: "Mumbai",
    date: format(new Date(), 'yyyy-MM-dd'),
    journeyType: "one-way",
    travelClass: "all"
  };

  const [from, setFrom] = useState(searchParams.from);
  const [to, setTo] = useState(searchParams.to);
  const [date, setDate] = useState<Date | undefined>(
    searchParams.date ? parseISO(searchParams.date) : new Date()
  );
  const [selectedClass, setSelectedClass] = useState(searchParams.travelClass);

  // Get trains data based on search parameters
  const trains = getTrainsData(from, to);

  const handleSearch = () => {
    // Update search parameters
    const newParams = {
      from,
      to,
      date: date ? format(date, 'yyyy-MM-dd') : '',
      journeyType: searchParams.journeyType,
      travelClass: selectedClass
    };
    
    // Navigate with new parameters
    navigate('/train-results', { state: newParams });
  };

  const handleBookNow = (train: Train, className: string) => {
    toast({
      title: "Booking Initiated",
      description: `You selected ${train.trainName} (${train.trainNumber}) - ${className}. Login to continue.`,
    });
    // In a real app, would navigate to booking page or login if not authenticated
    navigate('/login');
  };

  const popularCities = [
    "New Delhi", "Mumbai", "Chennai", "Kolkata", 
    "Bangalore", "Hyderabad", "Pune", "Ahmedabad"
  ];

  const formatDay = (dateStr: string) => {
    const dayOfWeek = format(parseISO(dateStr), 'EEEE');
    const formattedDate = format(parseISO(dateStr), 'dd MMM yyyy');
    return `${dayOfWeek}, ${formattedDate}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Search Panel */}
        <div className="bg-irctc-blue py-8">
          <div className="container">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Modify Search</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="from" className="flex items-center text-sm font-medium">
                    <MapPin className="h-4 w-4 mr-1" />
                    From
                  </Label>
                  <Select value={from} onValueChange={setFrom}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select departure station" />
                    </SelectTrigger>
                    <SelectContent>
                      {popularCities.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="to" className="flex items-center text-sm font-medium">
                    <MapPin className="h-4 w-4 mr-1" />
                    To
                  </Label>
                  <Select value={to} onValueChange={setTo}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select arrival station" />
                    </SelectTrigger>
                    <SelectContent>
                      {popularCities.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="flex items-center text-sm font-medium">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    Journey Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <Label className="text-sm font-medium">
                    Travel Class
                  </Label>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Classes</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="sleeper">Sleeper</SelectItem>
                      <SelectItem value="ac3">AC 3 Tier</SelectItem>
                      <SelectItem value="ac2">AC 2 Tier</SelectItem>
                      <SelectItem value="ac1">AC 1st Class</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mt-4">
                <Button 
                  onClick={handleSearch}
                  className="bg-irctc-red hover:bg-irctc-red/90 text-white"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search Trains
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="container py-8">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">
              Trains from {from} to {to}
            </h1>
            <p className="text-gray-600">
              {formatDay(searchParams.date)} • {trains.length} trains found
            </p>
          </div>
          
          {/* Sort/Filter Options */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">Sort by:</span>
                <Select defaultValue="departure">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="departure">Departure</SelectItem>
                    <SelectItem value="arrival">Arrival</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Button variant="outline" className="mr-2">
                  Fastest Trains
                </Button>
                <Button variant="outline">
                  Cheapest Fare
                </Button>
              </div>
            </div>
          </div>
          
          {/* Train Cards */}
          <div className="space-y-6">
            {trains.length > 0 ? (
              trains.map((train) => (
                <Card key={train.trainNumber} className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 lg:mb-0">
                      <div className="min-w-[150px]">
                        <p className="text-lg font-bold text-irctc-blue">{train.trainNumber}</p>
                        <p className="font-medium">{train.trainName}</p>
                        <div className="flex flex-wrap mt-1 gap-1">
                          {train.runsOn.map((day) => (
                            <span key={day} className="inline-block text-xs bg-gray-100 text-gray-600 px-1 rounded">
                              {day}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 md:gap-8">
                        <div className="text-center">
                          <p className="text-xl font-bold">{train.departureTime}</p>
                          <p className="text-sm text-gray-500">{train.departureStation}</p>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <p className="text-xs text-gray-500">{train.duration}</p>
                          <div className="relative w-20 md:w-32">
                            <div className="border-t border-gray-300 absolute top-1/2 w-full"></div>
                            <ArrowRight className="h-4 w-4 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-xl font-bold">{train.arrivalTime}</p>
                          <p className="text-sm text-gray-500">{train.arrivalStation}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4">
                      {train.classes.map((cls) => (
                        <div key={cls.name} className="border rounded-lg p-3 text-center min-w-[120px]">
                          <p className="font-medium">{cls.name}</p>
                          <p className="text-lg font-bold">₹{cls.fare}</p>
                          <Badge 
                            className={cn(
                              "mt-1",
                              cls.availability === "Available" ? "bg-green-100 text-green-800" :
                              cls.availability === "RAC" ? "bg-yellow-100 text-yellow-800" :
                              "bg-red-100 text-red-800"
                            )}
                          >
                            {cls.availability}
                          </Badge>
                          <Button 
                            size="sm" 
                            className="w-full mt-2 bg-irctc-blue hover:bg-irctc-light-blue"
                            onClick={() => handleBookNow(train, cls.name)}
                          >
                            Book Now
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-10">
                <div className="inline-flex rounded-full bg-yellow-100 p-4">
                  <div className="rounded-full stroke-yellow-600 bg-yellow-200 p-4">
                    <TrainIcon className="h-8 w-8" />
                  </div>
                </div>
                <h1 className="mt-5 text-xl font-bold text-gray-700">No trains found</h1>
                <p className="text-gray-500 mt-2">
                  No trains are available for the selected route and date. Please try different dates or stations.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrainResults;
