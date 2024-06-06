import React from 'react';

interface TopSectionProps {
  onSortChange?: (sortValue: string) => void;
}

const TopSection: React.FC<TopSectionProps> = ({ onSortChange }) => {
  return (
    <div className="bg-[#EFEFEF] shadow">
      <div className="container mx-auto flex md:flex-row flex-col gap-4 md:gap-0 justify-between md:items-center items-start md:p-4 py-4 mb-4 w-3/4">
      <div className="text-gray-600">
        <nav className="text-sm">
          <ol className="list-reset flex">
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-700">Home</a>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-700">Hot Tubs</a>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-500">All Hot Tubs</li>
          </ol>
        </nav>
      </div>
      <div>
        <label htmlFor="sort" className="text-sm text-gray-600 mr-2">Sort by:</label>
        <select id="sort" className="border border-gray-300 rounded px-2 py-1 text-sm" onChange={(e) => onSortChange && onSortChange(e.target.value)}>
          <option value="position">Position</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
    </div>
  );
};

export default TopSection;
