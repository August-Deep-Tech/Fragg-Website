import { redHatDisplay } from '@/styles/font';
import React from 'react';

const ConnectionSection = () => {
  return (
    <div className={`bg-[#010100] text-white py-[93px] -translate-y-1 ${redHatDisplay.className}`}>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">
          Fostering connections with ambitious businesses
        </h1>
        <p className="text-2xl font-semibold">
          poised for expansion
        </p>
      </div>
    </div>
  );
};

export default ConnectionSection;
