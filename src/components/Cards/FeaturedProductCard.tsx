'use client';
import Image from 'next/image';
import { useState } from 'react';


type Props = {
  item: any;
  index: number;
};

const FeaturedProductCard = (props: Props) => {
  const { item, index } = props;
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div
  key={index}
  className={`flex h-[250px] w-full relative md:h-[300px] flex-col items-center justify-center overflow-hidden rounded-3xl xl:w-[425px] xl:h-[300px]`}
  onMouseEnter={() => setHovered(index)}
  onMouseLeave={() => setHovered(null)}
>
  <Image
    src="https://www.beachcomberhottubs.com/media/wysiwyg/healthier-and-happier.jpg"
    width={200}
    height={200}
    alt="Happy in Hot Tub"
    className={`${
      hovered === index ? 'scale-[110%]' : ''
    } absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500 ease-in-out cursor-pointer`}
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0"></div>
  <div className="relative z-10">
    <div className="container mx-auto ml-0 flex w-full flex-col items-center md:justify-between justify-center px-20 py-10 gap-8">
      <p className="mt-5 text-md font-bold md:text-2xl leading-5">
        <span className="md:text-[28px] text-[18px] text-white">A HEALTHIER<br />HAPPIER YOU</span>
      </p>
      <button className="mt-4 text-center text-white bg-transparent border border-white px-4 py-2 rounded">LEARN MORE</button>
    </div>
  </div>
</div>

  );
};

export default FeaturedProductCard;
