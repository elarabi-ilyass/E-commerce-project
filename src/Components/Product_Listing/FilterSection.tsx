import { useState } from "react";

const FilterSection = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);


  const categories = [
    { id: "filter-category-0", value: "tees", label: "Tees" },
    { id: "filter-category-1", value: "crewnecks", label: "Crewnecks" },
    { id: "filter-category-2", value: "hats", label: "Hats" },
    { id: "filter-category-3", value: "bundles", label: "Bundles" },
    { id: "filter-category-4", value: "carry", label: "Carry" },
    { id: "filter-category-5", value: "objects", label: "Objects" },
  ];
  const Brands = [
    { id: "filter-brande-0", value: "Clothing Company", label: "Clothing Company" },
    { id: "filter-brande-1", value: "Fashion Inc.", label: "Fashion Inc." },
    { id: "filter-brande-2", value: "Shoes'n More", label: "Shoes'n More" },
    { id: "filter-brande-3", value: "Supplies'n Stuff", label: "Supplies'n Stuff" }
  ];
  const Colors = [
    { id: "filter-color-0", value: "red", label: "Red"},
    { id: "filter-color-1", value: "blue", label: "Blue"},
    { id: "filter-color-2", value: "green", label: "Green"},
    { id: "filter-color-3", value: "yellow", label: "Yellow"},
    { id: "filter-color-4", value: "purple", label: "Purple"},

      ];
  const Sizes=[
    { id: "filter-size-0", value: "S", label: "S"},
    { id: "filter-size-1", value: "M", label: "M"},
    { id: "filter-size-2", value: "L", label: "L"},
    { id: "filter-size-3", value: "XL", label: "XL"},
    { id: "filter-size-4", value: "XXL", label: "XXL"},

  ]
  const Sorts=[
    { id: "filter-sort-0", value: "Price:Low to Hight", label: "Price:Low to Hight"},
    { id: "filter-sort-3", value: "Price:Hight to Low", label: "Price:Hight to Low"},
    { id: "filter-sort-1", value: "rating", label: "Rating"},
    { id: "filter-sort-2", value: "newest", label: "New"},

  ]

  return (
    <section aria-labelledby="filter-heading" className="space-y-4">
      <hr className="w-5/6 h-px ml-24 bg-gray-300" />
      <div className="flex justify-between  ">
        {/* Sort Button */}
        <div className="relative">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center px-4 py-2 text-gray-400 hover:text-gray-600"
            aria-haspopup="menu"
            aria-expanded={sortOpen ? "true" : "false"}
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
        </div>
        <div className='relative '>
        {
          sortOpen ? (
            <div
            className="absolute -translate-x-16 -ml-96 mt-12 bg-white shadow-lg rounded-lg p-4"
            id="headlessui-popover-panel"
            tabIndex="-1"
            style={{ "--button-width": "108.359375px" }}
            data-headlessui-state="open"
          >
            <form className="space-y-3">
              {Sorts.map((Sort) => (
                <div key={Sort.id} className="flex items-center space-x-3">
                  <input
                    id={Sort.id}
                    name="category[]"
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded focus:ring-indigo-500"
                    value={Sort.value}
                  />
                  <label
                    htmlFor={Sort.id}
                    className="text-sm font-medium text-gray-700"
                  >
                    {Sort.label}
                  </label>
                </div>
              ))}
            </form>
          </div>
          ):' '
        }
      </div>
        
    <div className="flex justify-between">
    
      {/* Category Filter */}
      <div className="relative mr-4">
        <button
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="flex items-center px-4 py-2 text-gray-400 hover:text-gray-600"
          aria-expanded={categoryOpen ? "true" : "false"}
        >
          <span>Category</span>
          <span className="ml-2 text-sm text-gray-500">1</span>
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
      </div>
      <div className='relative '>
      {
        categoryOpen ? (
          <div
          className="absolute -ml-36 mt-12 bg-white shadow-lg rounded-lg p-4"
          id="headlessui-popover-panel"
          tabIndex="-1"
          style={{ "--button-width": "108.359375px" }}
          data-headlessui-state="open"
        >
          <form className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-3">
                <input
                  id={category.id}
                  name="category[]"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-indigo-500"
                  value={category.value}
                />
                <label
                  htmlFor={category.id}
                  className="text-sm font-medium text-gray-700"
                >
                  {category.label}
                </label>
              </div>
            ))}
          </form>
        </div>
        ):' '
      }
    </div>

      {/* Brand Filter */}
      <div className="relative mr-4">
        <button
          onClick={() => setBrandOpen(!brandOpen)}
          className="flex items-center px-4 py-2 text-gray-400 hover:text-gray-600"
          aria-expanded={brandOpen ? "true" : "false"}
        >
          <span>Brand</span>
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
      </div>
      <div className='relative  '>
      {
        brandOpen ? (
          <div
          className="absolute  -ml-36 mt-12 bg-white shadow-lg rounded-lg p-4"
          id="headlessui-popover-panel"
          tabIndex="-1"
          style={{ "--button-width": "108.359375px" }}
          data-headlessui-state="open"
        >
          <form className="  space-y-3">
            {Brands.map((Brand) => (
              <div key={Brand.id} className="flex items-center space-x-3">
                <input
                  id={Brand.id}
                  name="category[]"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-indigo-500"
                  value={Brand.value}
                />
                <label
                  htmlFor={Brand.id}
                  className="text-sm font-medium text-gray-700"
                >
                  {Brand.label}
                </label>
              </div>
            ))}
          </form>
        </div>
        ):''
      }
    </div>

      {/* Color Filter */}
      <div className="relative mr-4">
        <button
          onClick={() => setColorOpen(!colorOpen)}
          className="flex items-center px-4 py-2 text-gray-400 hover:text-gray-600"
          aria-expanded={colorOpen ? "true" : "false"}
        >
          <span>Color</span>
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
      </div>
      <div className='relative '>
      {
        colorOpen ? (
          <div
          className="absolute -ml-36 mt-12 bg-white shadow-lg rounded-lg p-4"
          id="headlessui-popover-panel"
          tabIndex="-1"
          style={{ "--button-width": "108.359375px" }}
          data-headlessui-state="open"
        >
          <form className="space-y-3">
            {Colors.map((Color) => (
              <div key={Color.id} className="flex items-center space-x-3">
                <input
                  id={Color.id}
                  name="category[]"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-indigo-500"
                  value={Color.value}
                />
                <label
                  htmlFor={Color.id}
                  className="text-sm font-medium text-gray-700"
                >
                  {Color.label}
                </label>
              </div>
            ))}
          </form>
        </div>
        ):' '
      }
    </div>

      {/* Size Filter */}
      <div className="relative mr-4">
        <button
          onClick={() => setSizeOpen(!sizeOpen)}
          className="flex items-center px-4 py-2 text-gray-400 hover:text-gray-600"
          aria-expanded={sizeOpen ? "true" : "false"}
        >
          <span>Sizes</span>
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
      </div>
      <div className='relative '>
      {
        sizeOpen ? (
          <div
          className="absolute -ml-36 mt-12 bg-white shadow-lg rounded-lg p-4"
          id="headlessui-popover-panel"
          tabIndex="-1"
          style={{ "--button-width": "108.359375px" }}
          data-headlessui-state="open"
        >
          <form className="space-y-3">
            {Sizes.map((Size) => (
              <div key={Size.id} className="flex items-center space-x-3">
                <input
                  id={Size.id}
                  name="category[]"
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded focus:ring-indigo-500"
                  value={Size.value}
                />
                <label
                  htmlFor={Size.id}
                  className="text-sm font-medium text-gray-700"
                >
                  {Size.label}
                </label>
              </div>
            ))}
          </form>
        </div>
        ):' '
      }
    </div>
      </div>  
    </div>
    </section>
  );
};

export default FilterSection;
