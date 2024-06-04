
import { ShoppingCard } from "../Cards/ShoppingCard";

const ShoppingEasySection = () => {
  const guides = [
    {
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/shopping-made-easy-cart-icon.jpg', // Replace with your image paths
      title: 'Shop Online 24/7',
      description: 'Learn about the frequently asked questions that come with buying a hot tub and shop with confidence.',
      link: '#',
    },
    {
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/shopping-made-easy-open-icon.jpg',
      title: 'Shop in Store',
      description: 'Discover everything that goes into building the world\'s most beloved hot tubs, and find your perfect Beachcomber Hot Tub with the Model Guide.',
      link: '#',
    },
    {
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/shopping-made-easy-phone-icon.jpg',
      title: 'Shop in-Home',
      description: 'Is your home hot tub ready? Get your outdoor living space prepared and ready for the Beachcomber Hot Tub experience.',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Shopping Made Easy</h2>
      <p className="text-xl mb-6 text-center">Flexible ways for you to shop at your comfort and convenience</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6">
        {guides.map((guide, index) => (
          <ShoppingCard
            key={index}
            imageSrc={guide.imageSrc}
            title={guide.title}
            description={guide.description}
            link={guide.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingEasySection;