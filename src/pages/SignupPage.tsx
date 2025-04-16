
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthHeader from '@/components/auth/AuthHeader';
import SignupForm from '@/components/auth/SignupForm';

const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container py-8 md:py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <AuthHeader 
            title="Create Account" 
            subtitle="Join IRCTC for a seamless train booking experience" 
          />
          <SignupForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignupPage;
