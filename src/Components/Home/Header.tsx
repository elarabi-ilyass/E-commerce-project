import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="py-16 h-screen  px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Summer styles are finally here
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn't care if you live or die.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <Link
              to="/Product_Listing"
              className="inline-block px-8 py-3 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
            >
              Shop Collection
            </Link>
          </div>
        </div>

        {/* Image Grid */}
        <div aria-hidden="true" className="grid grid-cols-3 gap-4">
          {/* First Column */}
          <div className="space-y-4">
            <img
              alt="Fashion 1"
              src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
              className="rounded-lg h-auto object-cover"
            />
            <img
              alt="Fashion 2"
              src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
              className="rounded-lg h-auto object-cover"
            />
          </div>

          {/* Second Column */}
          <div className="space-y-4 -mt-40">
            <img
              alt="Fashion 3"
              src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
              className="rounded-lg h-auto  object-cover"
            />
            <img
              alt="Fashion 4"
              src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
              className="rounded-lg  h-auto object-cover"
            />
            <img
              alt="Fashion 5"
              src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
              className="rounded-lg  h-auto object-cover"
            />
          </div>

          {/* Third Column */}
          <div className="space-y-4">
            <img
              alt="Fashion 6"
              src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
              className="rounded-lg h-auto object-cover"
            />
            <img
              alt="Fashion 7"
              src="https://th.bing.com/th/id/OIP.o6t-T18OlOtJu1-U0ILK6AHaK_?w=640&h=950&rs=1&pid=ImgDetMain"
              className="rounded-lg h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
