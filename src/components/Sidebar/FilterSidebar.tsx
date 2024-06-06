import React, { useState } from 'react';

const FilterSidebar = () => {
  const [filterOpen, setFilterOpen] = useState('');

  return (
    <div className="p-4 bg-white rounded">
      <div className="mb-2">
        <p className="text-xl font-bold">SHOPPING OPTIONS</p>
      </div>
      <div className=" border border-t-black"></div>
      <div className="mb-4 mt-2">
        <button className="w-full text-left" onClick={() =>filterOpen !== 'ENERGY CLASS' ? setFilterOpen('ENERGY CLASS') : setFilterOpen('')}>
          <p className="text-md font-base flex justify-between">
            ENERGY CLASS
            <span className="text-lg">{filterOpen === 'ENERGY CLASS' ? '-' : '+'}</span>
          </p>
        </button>
        {filterOpen === 'ENERGY CLASS' && (
          <div className="pl-2 py-3">
            <p className="text-xs py-1">HYBRID4 (17)</p>
            <p className="text-xs py-1">LEEP (12)</p>
          </div>
        )}
      </div>

      <div className="mb-4">
        <button className="w-full text-left" onClick={() =>filterOpen !== 'NUMBER OF SEATS' ? setFilterOpen('NUMBER OF SEATS') : setFilterOpen('')}>
          <p className="text-md font-base flex justify-between uppercase">
            NUMBER OF SEATS
            <span className="text-lg">{filterOpen === 'NUMBER OF SEATS' ? '-' : '+'}</span>
          </p>
        </button>
        {filterOpen === 'NUMBER OF SEATS' && (
          <div className="pl-2 py-3">
            <p className="text-xs py-1">8 (17)</p>
            <p className="text-xs py-1">7 (12)</p>
            <p className="text-xs py-1">6 (12)</p>
            <p className="text-xs py-1">5 (12)</p>
            <p className="text-xs py-1">4 (12)</p>
            <p className="text-xs py-1">2 (1)</p>
          </div>
        )}
      </div>
      <div className="mb-4">
        <button className="w-full text-left" onClick={() =>filterOpen !== 'FEATURES A LOUNGER' ? setFilterOpen('FEATURES A LOUNGER') : setFilterOpen('')}>
          <p className="text-md font-base flex justify-between uppercase">
          FEATURES A LOUNGER
            <span className="text-lg">{filterOpen === 'FEATURES A LOUNGER' ? '-' : '+'}</span>
          </p>
        </button>
        {filterOpen === 'FEATURES A LOUNGER'&& (
          <div className="pl-2 py-3">
            <p className="text-xs py-1">Yes (9)</p>
          </div>
        )}
      </div>
      <div className="mb-4">
        <button className="w-full text-left" onClick={() => filterOpen !== 'PRICE' ? setFilterOpen('PRICE') : setFilterOpen('')}>
          <p className="text-md font-base flex justify-between">
            PRICE
            <span className="text-lg">{filterOpen === 'PRICE' ? '-' : '+'}</span>
          </p>
        </button>
        {filterOpen === 'PRICE' && (
          <div className="pl-2 py-3">
            <p className="text-xs py-1">$0.00 - $9,999.99 (4)</p>
            <p className="text-xs py-1">$10,000.00 - $19,999.99 (21)</p>
            <p className="text-xs py-1">$20,000.00 and above (4)</p>
          </div>
        )}
      </div>
      <div className=" border border-t-black"></div>
      <div className="mt-20">
          <h3 className="text-xl font-bold mb-4">COMPARE PRODUCTS</h3>
          <p>You have no items to compare.</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">MY WISH LIST</h3>
          <p>You have no items in your wish list.</p>
        </div>
    </div>
  );
};

export default FilterSidebar;
