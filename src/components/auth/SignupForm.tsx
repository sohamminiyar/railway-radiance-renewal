
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Lock, Facebook, Mail, Phone } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signUp, loading } = useAuth();
  
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (password !== confirmPassword) {
      return;
    }
    
    await signUp(email, password, { name, mobile });
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSignup} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            Full Name
          </Label>
          <Input 
            id="name" 
            type="text" 
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="mobile" className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            Mobile Number
          </Label>
          <Input 
            id="mobile" 
            type="tel" 
            placeholder="9876543210"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password" className="flex items-center">
            <Lock className="h-4 w-4 mr-2" />
            Password
          </Label>
          <Input 
            id="password" 
            type="password" 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="flex items-center">
            <Lock className="h-4 w-4 mr-2" />
            Confirm Password
          </Label>
          <Input 
            id="confirmPassword" 
            type="password" 
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-irctc-blue hover:bg-irctc-light-blue"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Create Account"}
        </Button>
      </form>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <div className="mt-4 flex gap-2">
          <Button variant="outline" className="w-full">
            <Facebook className="h-4 w-4 mr-2" />
            Facebook
          </Button>
          <Button variant="outline" className="w-full">
            <Mail className="h-4 w-4 mr-2" />
            Google
          </Button>
        </div>
      </div>
      
      <div className="mt-6 text-center text-sm">
        <span className="text-gray-600">Already have an account?</span>{" "}
        <Link to="/login" className="font-medium text-irctc-blue hover:text-irctc-light-blue">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
