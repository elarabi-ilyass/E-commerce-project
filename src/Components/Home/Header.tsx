import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=" py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="flex -mt-60 flex-col justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Summer styles are finally here
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn't care if you live or die.
          </p>
        </div>

        {/* Image Grid */}
        <div aria-hidden="true" className="grid grid-cols-3 gap-4">
          {/* First Row */}
          <div className="space-y-4">
            <img
              alt=""
              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
              className="rounded-lg h-2/6 object-cover"
            />
            <img
              alt=""
              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
              className="rounded-lg h-2/6 object-cover"
            />
          </div>

          {/* Second Row */}
          <div  className="space-y-4  ">
            <img
              alt=""
              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
              className="rounded-lg h-2/6 -mt-24  object-cover"
            />
            <img
              alt=""
              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
              className="rounded-lg  h-2/6 object-cover"
            />
            <img
              alt=""
              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
              className="rounded-lg  h-2/6 object-cover"
            />
          </div>

          {/* Third Row */}
          <div className="space-y-4">
            <img
              alt=""
              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
              className="rounded-lg h-2/6 object-cover"
            />
            <img
              alt=""
              src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
              className="rounded-lg h-2/6 object-cover"
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="-mt-96 flex justify-center lg:justify-start">
        <Link
          to="Product_Listing"
          className="inline-block px-8 py-3 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
        >
          Shop Collection
        </Link>
      </div>
    </div>
  );
};

export default Header;
