import React from 'react';
import Image from 'next/image';

export const GuideCard = ({ imageSrc, title, description, link }: { imageSrc: string, title: string, description: string, link: string }) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-4 bg-white rounded shadow-lg transition-transform transform hover:scale-105 max-w-xs mx-auto">
      <div className="relative w-full h-48">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t" />
      </div>
      <div className="relative p-4 text-center">
        <h3 className="text-xl font-bold mb-2 text-[#264967]">{title}</h3>
        <p className="text-[#264967]">{description}</p>
        <a href={link} className="inline-block mt-4 text-center text-white bg-black border border-white px-4 py-2 rounded">
          DOWNLOAD
        </a>
      </div>
    </div>
  );
};
