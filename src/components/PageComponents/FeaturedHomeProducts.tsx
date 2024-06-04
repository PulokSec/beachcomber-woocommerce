import { FeaturedCard } from '../Cards/FeaturedCard';
import FeaturedProductCard from '../Cards/FeaturedProductCard';

export default function FeaturedHomeProducts() {
  const cards = [
    { title: '700 SERIES', imageSrc: 'https://beachcomber.csoft.ca/wp-content/uploads/2024/06/model-750-s.png', buttonText: 'View all 700 Series Models >>', link: '#' },
    { title: '500 SERIES', imageSrc: 'https://beachcomber.csoft.ca/wp-content/uploads/2024/06/model-500.png', buttonText: 'View all 500 Series Models >>', link: '#' },
    { title: '750 SLB', imageSrc: 'https://beachcomber.csoft.ca/wp-content/uploads/2024/06/model-750-s.png', buttonText: 'View all 750 SLB Models >>', link: '#' },
    { title: '300 SERIES', imageSrc: 'https://beachcomber.csoft.ca/wp-content/uploads/2024/06/model-300.png', buttonText: 'View all 300 Series Models >>', link: '#' },
    { title: 'LEEP', imageSrc: 'https://beachcomber.csoft.ca/wp-content/uploads/2024/06/model-leep.png', buttonText: 'View all LEEP Models >>', link: '#' },
    { title: 'Hybrid4', imageSrc: 'https://beachcomber.csoft.ca/wp-content/uploads/2024/06/model-hybrid.png', buttonText: 'View all Hybrid 4 Models >>', link: '#' },
  ];
  return (
    <section>
       <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="md:text-4xl text-2xl text-center py-10">Living Healthy, Living Happy</h1>
        <p className="text-center w-3/4">The benefits of hydrotherapy have been known for thousands of years. With the power of nature’s healing agents - heat, water and air - enjoy a deeply relaxing hydrotherapeutic experience in a hot tub. All it takes is just a 15-30 minutes soak, to improve your general physical and mental well-being. From relieving muscle aches and pains, to releasing endorphins to naturally boost your mood, to promoting a restful night’s sleep, and many more - learn about the many health and wellness benefits of hot tub therapy.</p>
       </div>
       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8 p-8">
        {
          Array.from({length: 3}).map((_, index) => (
            <FeaturedProductCard item={{}} key={index} index={index} />
          ))
        }
       </div>
       <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold my-8">The Beachcomber Models</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-14 p-8">
      {cards.map((card, index) => (
        <FeaturedCard key={index} {...card} />
      ))}
      <div className="flex justify-center w-full col-span-full">
        <button className="mt-4 text-center text-white bg-black px-4 py-2 rounded">See More</button>
      </div>
    </div>
    </div>
    </section>
  )
}
