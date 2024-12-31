import React from "react";
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Focus Paper Refill",
      price: "$13",
      description: "3 sizes available",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-01.jpg",
      imageAlt: "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 2,
      name: "Focus Card Holder",
      price: "$64",
      description: "Walnut",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-02.jpg",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 3,
      name: "Focus Carry Pouch",
      price: "$32",
      description: "Heather Gray",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-03.jpg",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 4,
      name: "Focus Multi-Pack",
      price: "$39",
      description: "3 refill packs",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-04.jpg",
      imageAlt:
        "Stack of 3 small drab green cardboard paper card refill boxes with white text.",
    },
    {
      id: 5,
      name: "Machined Mechanical Pencil",
      price: "$35",
      description: "Black and brass",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-05.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 6,
      name: "Brass Scissors",
      price: "$50",
      description: "Includes brass stand",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-06.jpg",
      imageAlt:
        "Brass scissors with geometric design, black steel finger holes, and included upright brass stand.",
    },
    {
      id: 7,
      name: "Machined Mechanical Pencil",
      price: "$35",
      description: "Black and brass",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-05.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 8,
      name: "Brass Scissors",
      price: "$50",
      description: "Includes brass stand",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-06.jpg",
      imageAlt:
        "Brass scissors with geometric design, black steel finger holes, and included upright brass stand.",
    },
  ];

  return (
    <section
      aria-labelledby="products-heading"
      className="py-8 px-4 bg-gray-50"
    >
      <h2 id="products-heading" className="text-2xl font-bold text-gray-900">
        Products
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
        {products.map((product) => (
          <a
            key={product.id}
            href="#"
            className="group block bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-sm text-gray-700">{product.price}</p>
            </div>
            <p className="px-4 pb-4 text-sm text-gray-500">
              {product.description}
            </p>
          </a>
        ))}
      </div>
      <div className='relative'>
      <section
      aria-labelledby="featured-heading"
      className="relative h-64 bg-gray-100 overflow-hidden"
    >
      <img
        alt=""
        src="https://tailwindui.com/plus/img/ecommerce-images/category-page-01-featured-collection.jpg"
        className="w-full h-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"
      ></div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-transparent"
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 text-white">
        <h2
          id="featured-heading"
          className="text-3xl font-bold sm:text-4xl"
        >
          Workspace Collection
        </h2>
        <p className="mt-4 text-lg">
          Upgrade your desk with objects that keep you organized and
          clear-minded.
        </p>
        <a
          href="#"
          className="mt-6 px-6 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-200"
        >
          View the collection
        </a>
      </div>
    </section>
    </div>
    <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to='/Product_Details'
            className="group block bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-sm text-gray-700">{product.price}</p>
            </div>
            <p className="px-4 pb-4 text-sm text-gray-500">
              {product.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
