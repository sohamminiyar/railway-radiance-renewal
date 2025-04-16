
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { format } from 'date-fns';
import { Train as TrainIcon, User, Calendar, Ticket } from 'lucide-react';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  trainDetails: {
    trainNumber: string;
    trainName: string;
    departureStation: string;
    arrivalStation: string;
    date: Date;
    className: string;
    fare: number;
  };
}

const BookingForm = ({ isOpen, onClose, trainDetails }: BookingFormProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [passengerName, setPassengerName] = useState('');
  const [passengerAge, setPassengerAge] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to book tickets",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }
    
    if (!passengerName.trim() || !passengerAge.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all passenger details",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setLoading(true);
      
      // Generate PNR (in a real app this would be done server-side)
      const { data: pnrData } = await supabase.rpc('generate_pnr');
      const pnr = pnrData || Math.random().toString(36).substring(2, 12).toUpperCase();
      
      // Create booking in database
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          {
            user_id: user.id,
            train_number: trainDetails.trainNumber,
            train_name: trainDetails.trainName,
            from_station: trainDetails.departureStation,
            to_station: trainDetails.arrivalStation,
            travel_date: format(trainDetails.date, 'yyyy-MM-dd'),
            travel_class: trainDetails.className,
            fare: trainDetails.fare,
            passenger_name: passengerName,
            passenger_age: parseInt(passengerAge),
            pnr: pnr,
          }
        ])
        .select();
      
      if (error) throw error;
      
      toast({
        title: "Booking successful!",
        description: `Your PNR is ${pnr}. You can view your booking details in My Bookings.`,
      });
      
      onClose();
      navigate('/my-bookings');
      
    } catch (error: any) {
      console.error('Error booking ticket:', error.message);
      toast({
        title: "Booking failed",
        description: error.message || "Failed to book ticket. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <TrainIcon className="mr-2 h-5 w-5 text-irctc-blue" />
            Book Train Ticket
          </DialogTitle>
          <DialogDescription>
            Complete passenger details to book your ticket
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleBooking} className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-gray-700 mb-2">Journey Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Train</p>
                <p className="font-medium">{trainDetails.trainNumber} - {trainDetails.trainName}</p>
              </div>
              <div>
                <p className="text-gray-500">Date</p>
                <p className="font-medium">{format(trainDetails.date, 'dd MMM yyyy')}</p>
              </div>
              <div>
                <p className="text-gray-500">From - To</p>
                <p className="font-medium">{trainDetails.departureStation} - {trainDetails.arrivalStation}</p>
              </div>
              <div>
                <p className="text-gray-500">Class</p>
                <p className="font-medium">{trainDetails.className}</p>
              </div>
              <div>
                <p className="text-gray-500">Fare</p>
                <p className="font-medium text-irctc-blue">₹{trainDetails.fare}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700 flex items-center">
              <User className="mr-2 h-4 w-4" />
              Passenger Details
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="passengerName">Passenger Name</Label>
              <Input 
                id="passengerName" 
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
                placeholder="Enter passenger name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="passengerAge">Passenger Age</Label>
              <Input 
                id="passengerAge" 
                type="number"
                min="1"
                max="120"
                value={passengerAge}
                onChange={(e) => setPassengerAge(e.target.value)}
                placeholder="Enter passenger age"
                required
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-irctc-blue hover:bg-irctc-light-blue"
              disabled={loading}
            >
              {loading ? "Processing..." : "Confirm Booking"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
