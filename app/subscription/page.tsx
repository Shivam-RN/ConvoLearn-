import { PricingTable } from '@clerk/nextjs';
import React from 'react';

const FreePlanCard = () => {
  const features = [
    "10 Conversations/month",
    "3 Active Companions",
    "Basic Session Recaps"
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 max-w-md">
      <h2 className="text-2xl font-bold mb-2">Free Plan</h2>
      <p className="text-gray-600 mb-4">Always free • Ideal for getting started</p>
      <ul className="list-disc space-y-2 pl-5 text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>✅ {feature}</li>
        ))}
      </ul>
    </div>
  );
};

const page = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-start p-8">
      <FreePlanCard />
      <div className="flex-1">
        <PricingTable />
      </div>
    </div>
  );
};

export default page;
