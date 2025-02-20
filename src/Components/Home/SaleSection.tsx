import React from "react";

const SaleSection = () => {
  return (
    <section aria-labelledby="sale-heading" className="bg-white ">
      <div className="mx-auto max-w-7xl   px-6 lg:px-8">
        <div className="bg-gray-800  h-96 rounded-lg shadow-lg ">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Text Section */}
            <div className="p-8 sm:p-12">
              <h2
                id="sale-heading"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Final Stock.
                <br />
                Up to 50% off.
              </h2>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block bg-indigo-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-indigo-700"
                >
                  Shop the sale<span aria-hidden="true"> →</span>
                </a>
              </div>
            </div>

            {/* Image Grid Section */}
            <div className="relative grid grid-cols-2 gap-4 py-14 p-6 lg:p-8">
              <div className="space-y-4">
                <img
                  alt="Category 1"
                  src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                  className="w-full h-auto rounded-lg object-cover"
                />
               
              </div>
              <div className="space-y-4">
                <img
                  alt="Favorite 1"
                  src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                  className="w-full h-auto  -mt-28 rounded-lg object-cover"
                />
               
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
