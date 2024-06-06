import React from 'react'
import ProductCard from '../Cards/ProductCard';
import FilterSidebar from '../Sidebar/FilterSidebar';
import AllSeriesBanner from '../Banner/AllSeriesBanner';
import Header from '../Header/Header.component';
import Footer from '../Footer/Footer.component';
import TopSection from '../Elements/TopSeriesSection';

export default function AllSeriesLanding() {

const products = [
  {
    model: 'MODEL 720 HYBRID4',
    edition: 'ANNIVERSARY EDITION',
    seats: 7,
    flexjets: 147,
    colors: ['Moonstone', 'Ebony'],
    dimensions: '80 x 88 x 38" / 203 x 224 x 97cm',
    price: '$20,999',
    save: '$7,453',
  },
  {
    model: 'MODEL 570 HYBRID4',
    edition: 'ANNIVERSARY EDITION',
    seats: 7,
    flexjets: 112,
    colors: ['Moonstone', 'Ebony'],
    dimensions: '80 x 88 x 38" / 203 x 224 x 97cm',
    price: '$17,499',
    save: '$6,395',
  },
  {
    model: 'MODEL 360 HYBRID4',
    edition: 'ANNIVERSARY EDITION',
    seats: 7,
    flexjets: 100,
    colors: ['Moonstone', 'Ebony'],
    dimensions: '80 x 88 x 38" / 203 x 224 x 97cm',
    price: '$14,499',
    save: '$5,337',
  },
];
  return (
    <main className="">
      <div className="bg-black">
      <Header />
      </div>
      <AllSeriesBanner />
      <TopSection />
      <div className="container mx-auto p-4 lg:w-3/4">
      <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/4 px-4 mb-8">
        <FilterSidebar />
      </div>
      <main className="lg:w-3/4 p-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </main>
      </div>
    </div>
    <Footer />
    </main>
  )
}
