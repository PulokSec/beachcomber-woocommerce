import React from 'react';
import Image from 'next/image';


export const FeaturedCard = ({ title, imageSrc, buttonText, link }: { title: string, imageSrc: string, buttonText: string, link: string }) => {
  return (
    <div className="flex flex-col items-center justify-end p-4 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 max-w-xs md:max-w-md lg:max-w-lg w-full h-96 md:h-[830px] lg:h-[630px] overflow-hidden relative md:w-[530px]">
      <div className="absolute inset-0 z-0">
        <Image src={imageSrc} alt={title} layout="fill" className="object-cover bg-blend-screen object-center inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50"></div>
      </div>
      <div className="relative z-10 p-4">
        <a href={link} className="inline-block mt-4 text-center text-white bg-transparent border border-white px-4 py-2 rounded">
          {buttonText}
        </a>
      </div>
    </div>
  );
};