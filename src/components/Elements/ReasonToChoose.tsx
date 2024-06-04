import React from 'react';

const ReasonsToChoose = () => {
  const reasons = [
    'Our Beachcomber Story',
    'Energy Efficiency',
    'Beachcomber Guarantee',
    'Leading Edge Technology',
    'Ease of Maintenance',
    'Price, Value, Longevity',
    'Sized for Everyone',
    'Attractive Designs',
    'Quality Construction',
    'Unparalleled Comfort',
    'Non-stop Entertainment',
    'Customer Reviews',
    'Customizable FLEXJETS',
    'Multi-Level Seating',
    'Safety Features',
  ];

  return (
    <div className="container mx-auto py-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">WHY CHOOSE A BEACHCOMBER HOT TUB</h2>
      <p className="text-xl mb-6">Discover the 15 reasons why you should choose a Beachcomber Hot Tub</p>
      <div className="flex flex-wrap justify-center gap-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white text-gray-700 border cursor-pointer border-gray-300 rounded-full px-4 py-2 shadow-sm transition-transform transform hover:scale-105"
          >
            {reason}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsToChoose;
