import React from 'react';
import Image from 'next/image';

export const ShoppingCard = ({ imageSrc, title, description, link }: { imageSrc: string, title: string, description: string, link: string }) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-4 bg-transparent rounded transition-transform transform hover:scale-105 max-w-sm w-full mx-auto">
      <div className="relative w-full h-48 md:h-60">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t" />
      </div>
      <div className="relative p-4 text-center uppercase">
        <a href={link} className="inline-block mt-4 text-center text-white bg-black border border-white px-4 py-2 rounded">
          {title}
        </a>
      </div>
    </div>
  );
};
