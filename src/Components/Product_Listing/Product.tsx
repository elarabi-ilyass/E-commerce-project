import React from "react";
import { Link } from "react-router-dom";
import { TProduct } from "../../../Types/DataType";

interface IState {
  products: TProduct[];
}

const Product:React.RC<IState>=({ products }) => {
  return (
    <section
      aria-labelledby="products-heading"
      className="py-8 px-4 bg-gray-50"
    >
      <h2 id="products-heading" className="text-2xl font-bold text-gray-900">
        Products
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
        {products?.map((product) => (
          <Link
            key={product.id}
            to={`/Product_Details/${product.id}`}
            className="group block bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.alt}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.title}
              </h3>
              <p className="text-sm text-gray-700">{product.price}</p>
            </div>
            <p className="px-4 pb-4 text-sm text-gray-500">{product.alt}</p>
          </Link>
        ))}
      </div>
      <div className="relative">
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
        {products?.map((product) => (
          <Link
            key={product.id}
            to="/Product_Details"
            className="group block bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.alt}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.title}
              </h3>
              <p className="text-sm text-gray-700">{product.price}</p>
            </div>
            <p className="px-4 pb-4 text-sm text-gray-500">{product.alt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Product;
