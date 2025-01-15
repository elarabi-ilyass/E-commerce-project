import { useState } from "react";
import { Sorts, Sizes, Colors, Brands, Categories } from "../../Types/shared";

interface FilterSectionProps {
  getNewSearchParams: (key: string, value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ getNewSearchParams }) => {
  const [filters, setFilters] = useState({
    sortOpen: false,
    categoryOpen: false,
    brandOpen: false,
    colorOpen: false,
    sizeOpen: false,
  });

  const toggleFilter = (filter: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const renderFilterOptions = (options: string[], key: string) => (
    <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-4 z-10">
      <form className="space-y-3">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-3">
            <input
              id={`${key}-${option}`}
              type="checkbox"
              onClick={() => getNewSearchParams(key, option)}
              className="w-4 h-4 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor={`${key}-${option}`} className="text-sm font-medium text-gray-700">
              {option}
            </label>
          </div>
        ))}
      </form>
    </div>
  );

  return (
    <section aria-labelledby="filter-heading" className="space-y-4">
      <hr className="w-5/6 h-px ml-24 bg-gray-300" />
      <div className="space-y-4">
        {/* Sort */}
        <div className="relative">
          <button
            onClick={() => toggleFilter("sortOpen")}
            className="flex items-center px-4 py-2 text-gray-400 hover:text-gray-600"
            aria-expanded={filters.sortOpen}
            aria-haspopup="menu"
          >
            Sort
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-2 w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {filters.sortOpen && renderFilterOptions(Sorts, "sort")}
        </div>

        {/* Category */}
        <div className="relative">
          <button
            onClick={() => toggleFilter("categoryOpen")}
            className="flex items-center px-4 py-2 text-gray-400 hover:text-gray-600"
            aria-expanded={filters.categoryOpen}
            aria-haspopup="menu"
          >
            Category
          </button>
          {filters.categoryOpen && renderFilterOptions(Categories, "categorie")}
        </div>

        {/* Brand */}
        <div className="relative">
          <button
            onClick={() => toggleFilter("brandOpen")}
            className="flex items-center px-4 py-2 text-gray-400 hover:text-gray-600"
            aria-expanded={filters.brandOpen}
            aria-haspopup="menu"
          >
            Brand
          </button>
          {filters.brandOpen && renderFilterOptions(Brands, "brand")}
        </div>

        {/* Color */}
        <div className="relative">
          <button
            onClick={() => toggleFilter("colorOpen")}
            className="flex items-center px-4 py-2 text-gray-400 hover:text-gray-600"
            aria-expanded={filters.colorOpen}
            aria-haspopup="menu"
          >
            Color
          </button>
          {filters.colorOpen && renderFilterOptions(Colors, "color")}
        </div>

        {/* Size */}
        <div className="relative">
          <button
            onClick={() => toggleFilter("sizeOpen")}
            className="flex items-center px-4 py-2 text-gray-400 hover:text-gray-600"
            aria-expanded={filters.sizeOpen}
            aria-haspopup="menu"
          >
            Size
          </button>
          {filters.sizeOpen && renderFilterOptions(Sizes, "size")}
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
