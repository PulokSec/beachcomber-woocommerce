import React from 'react';
import Image from 'next/image';

const HomeBottomComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded mt-8 md:mt-0">
      <div className="w-2/12 hidden md:block"></div>
      <div className="md:w-5/12 px-8 py-5 md:py-0">
        <h2 className="text-2xl md:text-4xl xl:text-4xl font-bold mb-4">The Beachcomber FREE 100-Day In-Home Trial</h2>
        <p className="mb-4 text-md md:text-xl x:text-2xl,">We’re sure that you’ll absolutely love your Beachcomber Hot Tub. Experience quality for 100 days in the comfort of your home before making a decision.</p>
        <a href="#" className="inline-block mt-4 text-center text-white bg-black px-4 py-2 rounded">Learn More</a>
      </div>
      <div className="md:w-5/12 pl-4 relative">
        <Image src="https://beachcomber.csoft.ca/wp-content/uploads/2024/06/beachcombers-hot-tub-angled-middle-section.png" alt="Hot Tub" layout="responsive" width={300} height={200} className="rounded" />
      </div>
    </div>
  );
};

export default HomeBottomComponent;
