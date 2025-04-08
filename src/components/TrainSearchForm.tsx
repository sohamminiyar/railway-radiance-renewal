
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, MapPin, Search, ArrowRightLeft } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const TrainSearchForm = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [journeyType, setJourneyType] = useState("one-way");
  const [from, setFrom] = useState("New Delhi");
  const [to, setTo] = useState("Mumbai");

  const handleSwapStations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const popularCities = [
    "New Delhi", "Mumbai", "Chennai", "Kolkata", 
    "Bangalore", "Hyderabad", "Pune", "Ahmedabad"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission
    console.log({ from, to, date, journeyType });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
      <div className="space-y-6">
        {/* Journey Type */}
        <RadioGroup 
          defaultValue="one-way" 
          className="flex space-x-4" 
          onValueChange={setJourneyType}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="one-way" id="one-way" />
            <Label htmlFor="one-way">One Way</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="round-trip" id="round-trip" />
            <Label htmlFor="round-trip">Round Trip</Label>
          </div>
        </RadioGroup>

        {/* From - To */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          <div className="space-y-2">
            <Label htmlFor="from" className="flex items-center text-sm font-medium">
              <MapPin className="h-4 w-4 mr-1" />
              From
            </Label>
            <Select defaultValue={from} onValueChange={setFrom}>
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

          {/* Swap button */}
          <button 
            type="button"
            onClick={handleSwapStations}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-irctc-blue text-white p-2 rounded-full shadow-md hover:bg-irctc-light-blue hidden md:block"
          >
            <ArrowRightLeft className="h-4 w-4" />
          </button>

          <div className="space-y-2">
            <Label htmlFor="to" className="flex items-center text-sm font-medium">
              <MapPin className="h-4 w-4 mr-1" />
              To
            </Label>
            <Select defaultValue={to} onValueChange={setTo}>
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
        </div>

        {/* Date and Travelers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center text-sm font-medium">
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

          <div className="space-y-2">
            <Label htmlFor="class" className="text-sm font-medium">
              Travel Class
            </Label>
            <Select defaultValue="sleeper">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="sleeper">Sleeper</SelectItem>
                <SelectItem value="ac3">AC 3 Tier</SelectItem>
                <SelectItem value="ac2">AC 2 Tier</SelectItem>
                <SelectItem value="ac1">AC 1st Class</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Search Button */}
        <Button type="submit" className="w-full bg-irctc-red hover:bg-irctc-red/90 text-white font-medium py-2">
          <Search className="mr-2 h-4 w-4" />
          Find Trains
        </Button>
      </div>
    </form>
  );
};

export default TrainSearchForm;
