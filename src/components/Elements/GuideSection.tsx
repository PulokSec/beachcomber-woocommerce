import { GuideCard } from "../Cards/GuideCard";

const GuideSection = () => {
  const guides = [
    {
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/15-questions-to-ask-before-buying-a-spa.jpg', // Replace with your image paths
      title: '15 Questions to Ask Before You Buy a Hot Tub',
      description: 'Learn about the frequently asked questions that come with buying a hot tub and shop with confidence.',
      link: '#',
    },
    {
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/New_BCHT_Diff.jpg',
      title: 'The Beachcomber Difference Model Guide',
      description: 'Discover everything that goes into building the world\'s most beloved hot tubs, and find your perfect Beachcomber Hot Tub with the Model Guide.',
      link: '#',
    },
    {
      imageSrc: 'https://www.beachcomberhottubs.com/media/wysiwyg/pre-delivery.jpg',
      title: 'Beachcomber Hot Tubs Pre-Delivery Guide',
      description: 'Is your home hot tub ready? Get your outdoor living space prepared and ready for the Beachcomber Hot Tub experience.',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Beachcomber Guides to help you at every step of the way</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6">
        {guides.map((guide, index) => (
          <GuideCard
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

export default GuideSection;