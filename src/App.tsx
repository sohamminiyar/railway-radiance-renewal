
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TrainResults from "./pages/TrainResults";
import NotFound from "./pages/NotFound";
import DestinationDetail from "./components/DestinationDetail";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TrainsPage from "./pages/TrainsPage";
import HolidaysPage from "./pages/HolidaysPage";
import HotelsPage from "./pages/HotelsPage";
import MyBookingsPage from "./pages/MyBookingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/train-results" element={<TrainResults />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/trains" element={<TrainsPage />} />
            <Route path="/holidays" element={<HolidaysPage />} />
            <Route path="/hotels" element={<HotelsPage />} />
            <Route path="/my-bookings" element={<MyBookingsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
