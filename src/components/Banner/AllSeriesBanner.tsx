import Image from 'next/image';
import React from 'react'

export default function AllSeriesBanner() {
  const products = [
    {
      link: '#',
      titleImage: 'https://www.beachcomberhottubs.com/media/wysiwyg/slb_series_title_340x33_1.png',
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/SLB-series.png',
      imageAlt: 'slb',
    },
    {
      link: '#',
      titleImage: 'https://www.beachcomberhottubs.com/media/wysiwyg/700_series_title_340x33_1.png',
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/700-series.png',
      imageAlt: '700',
    },
    {
      link: '#',
      titleImage: 'https://www.beachcomberhottubs.com/media/wysiwyg/500_series_title_340x33.png',
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/500-series.png',
      imageAlt: '500',
    },
    {
      link: '#',
      titleImage: 'https://www.beachcomberhottubs.com/media/wysiwyg/300_series_title_340x33.png',
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/300-2.png',
      imageAlt: '300',
    },
  ];
  return (
    <div className="bg-[#F5F5F5] w-full py-5 lg:py-10">
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 lg:w-3/4 w-full py-20 md:px-0 px-5">
        {products.map((product, index) => (
            <div className="mb-4 transition-transform transform hover:scale-105 hover:border duration-500 hover:opacity-60 border-black rounded-xl py-5" key={index}>
                <div className="w-full lg:w-[350px] h-[23px] pt-5 flex justify-center items-center">
                    <Image src={product?.titleImage} layout="intrinsic" width={350} height={23} alt={product.imageAlt} className="object-cover p-5" />
                </div>
                <div className="w-full lg:w-[350px] lg:h-48 h-30 py-2 flex justify-center items-center mt-5">
                    <Image src={product?.imageSrc} layout="intrinsic" width={350} height={162} alt={product.imageAlt} className="object-cover p-5 mt-5" />
                </div>
            </div>
        ))}
    </div>
</div>
  )
}
