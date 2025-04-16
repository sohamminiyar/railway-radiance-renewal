
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format, parseISO } from 'date-fns';
import { Train, Calendar, MapPin, Tag, User, Clock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface Booking {
  id: string;
  train_number: string;
  train_name: string;
  from_station: string;
  to_station: string;
  travel_date: string;
  travel_class: string;
  fare: number;
  passenger_name: string;
  passenger_age: number;
  booking_status: string;
  pnr: string;
  created_at: string;
}

const MyBookingsPage = () => {
  const { user, loading: authLoading } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!authLoading && !user) {
      toast({
        title: "Authentication required",
        description: "Please login to view your bookings",
        variant: "destructive"
      });
      navigate('/login');
      return;
    }

    // Fetch user bookings
    if (user) {
      fetchBookings();
    }
  }, [user, authLoading, navigate]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setBookings(data || []);
    } catch (error: any) {
      console.error('Error fetching bookings:', error.message);
      toast({
        title: "Error",
        description: "Failed to load your bookings",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'dd MMM yyyy');
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <Train className="h-8 w-8 text-irctc-blue" />
              <h1 className="text-2xl font-bold">My Bookings</h1>
            </div>
            
            {loading ? (
              <div className="py-10 text-center">
                <p className="text-gray-500">Loading your bookings...</p>
              </div>
            ) : bookings.length === 0 ? (
              <div className="py-10 text-center">
                <p className="text-gray-500">You don't have any bookings yet.</p>
                <Button 
                  onClick={() => navigate('/trains')} 
                  className="mt-4 bg-irctc-blue hover:bg-irctc-light-blue"
                >
                  Book a Train Ticket
                </Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>Your train ticket bookings</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>PNR</TableHead>
                      <TableHead>Train</TableHead>
                      <TableHead>Route</TableHead>
                      <TableHead>Travel Date</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Passenger</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.pnr}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-semibold">{booking.train_number}</p>
                            <p className="text-sm text-gray-500">{booking.train_name}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="text-sm">{booking.from_station}</span>
                            <span className="text-xs text-gray-500">to</span>
                            <span className="text-sm">{booking.to_station}</span>
                          </div>
                        </TableCell>
                        <TableCell>{formatDate(booking.travel_date)}</TableCell>
                        <TableCell>{booking.travel_class}</TableCell>
                        <TableCell>
                          <div>
                            <p>{booking.passenger_name}</p>
                            <p className="text-xs text-gray-500">Age: {booking.passenger_age}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={
                            booking.booking_status === 'Confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : booking.booking_status === 'Waitlisted' 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-red-100 text-red-800'
                          }>
                            {booking.booking_status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Booking Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Tag className="h-4 w-4 mr-2 text-irctc-blue" />
                  <p>PNR (Passenger Name Record) is your unique booking ID</p>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-4 w-4 mr-2 text-irctc-blue" />
                  <p>Keep your PNR handy during travel for ticket checks</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <User className="h-4 w-4 mr-2 text-irctc-blue" />
                  <p>Carry a valid photo ID for verification during travel</p>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-4 w-4 mr-2 text-irctc-blue" />
                  <p>Reach station at least 30 minutes before departure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyBookingsPage;
