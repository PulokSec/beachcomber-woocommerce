import Image from 'next/image';
import React from 'react'

export default function AllSeriesBanner() {
  const products = [
    {
      link: '#',
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/SLB-series.png',
      imageAlt: 'slb',
    },
    {
      link: '#',
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/700-series.png',
      imageAlt: '700',
    },
    {
      link: '#',
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/500-series.png',
      imageAlt: '500',
    },
    {
      link: '#',
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/300-2.png',
      imageAlt: '300',
    },
  ];
  return (
    <div className="bg-[#F5F5F5] w-full py-5 lg:py-10">
      <div className="container mx-auto grid grid-row grid-cols-2 md:grid-cols-4 gap-4 lg:w-3/4  w-full py-20  md:px-0 px-5">
    {products.map((product, index) => (
            <div className="lg:w-90 w-full lg:h-48 h-28 relative mb-4 transition-transform transform hover:scale-105 hover:border duration-500 hover:opacity-60 border-black rounded-xl" key={index}>
            <Image src={product?.imageSrc} layout="fill" objectFit="cover" alt={product.imageAlt} className="w-full lg:w-60 lg:h-48 h-30 object-cover p-5" />
          </div>
          ))}
    </div>
    </div>
  )
}
