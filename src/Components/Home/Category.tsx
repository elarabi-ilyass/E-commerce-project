import React from "react";
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <section aria-labelledby="category-heading" className="bg-gray-50 mt-32 py-16 px-6 sm:py-24 sm:px-12 lg:px-16">
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Heading and Browse All Categories Link */}
      <div className="flex justify-between items-center">
        <h2 id="category-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Shop by Category 

        </h2>
        <Link to="AllCategories" className="text-lg font-medium text-indigo-600 hover:text-indigo-700">
          Browse all categories<span aria-hidden="true"> →</span>
        </Link>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* New Arrivals */}
        <div className="relative group">
          <img
            alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
            src="https://th.bing.com/th/id/OIP.QSRVaP6PczAnEO67rQQlgQHaJQ?w=1080&h=1349&rs=1&pid=ImgDetMain"
            className="w-full h-80 object-cover rounded-lg"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"
          ></div>
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                <a href="#">
                  <span className="sr-only">New Arrivals</span>New Arrivals
                </a>
              </h3>
              <p aria-hidden="true" className="mt-1 text-sm text-white">
                Shop now
              </p>
            </div>
          </div>
        </div>

        {/* Accessories */}
        <div className="relative group">
          <img
            alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
            src="https://th.bing.com/th/id/OIP.25N-KQKTi_InH5B9nIY3xAHaHa?w=177&h=180&c=7&r=0&o=5&pid=1.7"
            className="w-full h-80 object-cover rounded-lg"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"
          ></div>
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                <a href="#">
                  <span className="sr-only">Accessories</span>Accessories
                </a>
              </h3>
              <p aria-hidden="true" className="mt-1 text-sm text-white">
                Shop now
              </p>
            </div>
          </div>
        </div>

        {/* Workspace */}
        <div className="relative group">
          <img
            alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
            src="https://th.bing.com/th/id/OIP.lBk-t9mlDzpxauJWJehmbgHaE7?rs=1&pid=ImgDetMain"
            className="w-full h-80 object-cover rounded-lg"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"
          ></div>
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                <a href="#">
                  <span className="sr-only">Workspace</span>Workspace
                </a>
              </h3>
              <p aria-hidden="true" className="mt-1 text-sm text-white">
                Shop now
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Browse All Categories Link for Smaller Screens */}
      <div className="mt-8 text-center lg:hidden">
        <a href="#" className="text-lg font-medium text-indigo-600 hover:text-indigo-700">
          Browse all categories<span aria-hidden="true"> →</span>
        </a>
      </div>
    </div>
  </section>
  );
};

export default Category;
