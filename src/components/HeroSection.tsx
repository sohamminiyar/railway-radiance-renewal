
import React from 'react';
import { Link } from 'react-router-dom';
import TrainSearchForm from './TrainSearchForm';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1584121196751-aa5180335718?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          height: '550px' 
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 h-[550px]">
        <div className="flex flex-col h-full justify-center items-start">
          <div className="w-full max-w-xl pt-20 md:pt-0">
            <div className="mb-6 text-white animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                Book Your Journey<br />Across India
              </h1>
              <p className="text-lg opacity-90 mb-4">
                Experience comfortable and affordable travel with Indian Railways
              </p>
              <div className="flex gap-3">
                <Link to="/login">
                  <Button variant="outline" className="bg-white text-irctc-blue hover:bg-gray-100">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-irctc-yellow text-irctc-blue hover:bg-irctc-yellow/90">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-slide-up">
              <TrainSearchForm />
            </div>
          </div>
        </div>
      </div>

      {/* Wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
          <path d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
