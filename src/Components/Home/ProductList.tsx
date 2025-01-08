import React from "react";
import { TProduct } from "../../../Types/DataType";
import { Link } from "react-router-dom";


interface IState {
  records: TProduct[];
}

const ProductList:React.FC<IState>=({ records}) => {

  return (
    <div className="bg-slate-50 py-16">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-14">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {records.map((product) => (
            <Link key={product.id} to={`/Product_Details/${product.id}`} className="group"> {/* Link to product details */}
              <img
                src={product.image}
                alt={product.alt}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
