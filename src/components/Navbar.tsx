
import React, { useState } from 'react';
import { Menu, X, Train, Bell, UserPlus, Globe, PhoneCall, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top bar with contact and language */}
      <div className="bg-irctc-blue py-1">
        <div className="container flex justify-between text-white text-xs">
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center hover:text-irctc-yellow">
              <PhoneCall className="h-3 w-3 mr-1" />
              <span>139 (Customer Support)</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center hover:text-irctc-yellow">
              <Globe className="h-3 w-3 mr-1" />
              <span>English</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="container py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Train className="h-8 w-8 text-irctc-blue" />
            <span className="text-xl font-bold text-irctc-blue">IRCTC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 font-medium hover:text-irctc-blue">Home</Link>
            <Link to="/trains" className="text-gray-700 font-medium hover:text-irctc-blue">Trains</Link>
            <Link to="/holidays" className="text-gray-700 font-medium hover:text-irctc-blue">Holidays</Link>
            <Link to="/hotels" className="text-gray-700 font-medium hover:text-irctc-blue">Hotels</Link>
            <Link to="/about" className="text-gray-700 font-medium hover:text-irctc-blue">About</Link>
            <Link to="/contact" className="text-gray-700 font-medium hover:text-irctc-blue">Contact</Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-irctc-blue">
              <Bell className="h-5 w-5" />
            </Button>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-irctc-blue text-white hover:bg-irctc-blue/90">
                    <UserPlus className="mr-2 h-4 w-4" />
                    {user ? user.user_metadata?.name || 'Account' : 'Account'}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-4 md:w-[220px]">
                      <div className="flex flex-col space-y-2">
                        {user ? (
                          <>
                            <div className="px-2 py-1 font-medium">
                              {user.email}
                            </div>
                            <Button variant="ghost" className="w-full justify-start" onClick={handleLogout} disabled={loading}>
                              <LogOut className="mr-2 h-4 w-4" />
                              {loading ? "Logging out..." : "Logout"}
                            </Button>
                          </>
                        ) : (
                          <>
                            <Link to="/login">
                              <Button variant="ghost" className="w-full justify-start">
                                Login
                              </Button>
                            </Link>
                            <Link to="/signup">
                              <Button variant="ghost" className="w-full justify-start">
                                Sign Up
                              </Button>
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <div className="container flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 font-medium hover:text-irctc-blue px-4 py-2">Home</Link>
            <Link to="/trains" className="text-gray-700 font-medium hover:text-irctc-blue px-4 py-2">Trains</Link>
            <Link to="/holidays" className="text-gray-700 font-medium hover:text-irctc-blue px-4 py-2">Holidays</Link>
            <Link to="/hotels" className="text-gray-700 font-medium hover:text-irctc-blue px-4 py-2">Hotels</Link>
            <Link to="/about" className="text-gray-700 font-medium hover:text-irctc-blue px-4 py-2">About</Link>
            <Link to="/contact" className="text-gray-700 font-medium hover:text-irctc-blue px-4 py-2">Contact</Link>
            
            <div className="flex flex-col space-y-2 px-4 pt-2">
              {user ? (
                <>
                  <div className="px-2 py-1 font-medium border-t pt-4">
                    Logged in as: {user.user_metadata?.name || user.email}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-irctc-blue text-irctc-blue"
                    onClick={handleLogout}
                    disabled={loading}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    {loading ? "Logging out..." : "Logout"}
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" className="w-full justify-start border-irctc-blue text-irctc-blue">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="outline" className="w-full justify-start border-irctc-blue text-irctc-blue">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
