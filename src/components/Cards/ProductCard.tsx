import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded shadow-lg transition-transform transform hover:scale-105">
      <div className="w-full h-48 relative mb-4">
        <Image src={product?.imageSrc} alt={product?.imageAlt} layout="fill" objectFit="cover" className="w-full h-full object-cover rounded-t" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-center">{product.model}</h3>
        <p className="mb-2 text-center">{product.edition}</p>
        <div className="mb-2 text-center">
          <span className="mr-2">&#128100; {product.seats} spacious seats</span>
          <span>&#128104; Up to {product.flexjets} FLEXJETS</span>
        </div>
        <div className="mb-2 text-center">
          {product.colors.map((color:any, index: number) => (
            <span key={index} className="mr-2">
              {color}
            </span>
          ))}
        </div>
        <p className="mb-2 text-center">{product.dimensions}</p>
        <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-lg font-bold mb-2">{product.price}</p>
        <p className="text-green-500 mb-2">SAVE {product.save}</p>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Add to Compare</span>
        </label>
        <button className="w-full inline-block mt-4 text-center text-white bg-black hover:bg-transparent hover:border border-black hover:text-black px-2 py-2 rounded text-sm">
          LEARN MORE
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
