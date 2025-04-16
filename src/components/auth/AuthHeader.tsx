
import React from 'react';
import { Train } from 'lucide-react';

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <div className="bg-irctc-blue p-6 text-white text-center">
      <div className="flex justify-center mb-4">
        <Train className="h-12 w-12" />
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm opacity-90">{subtitle}</p>
    </div>
  );
};

export default AuthHeader;
