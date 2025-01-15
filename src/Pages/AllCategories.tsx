import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../Store/hooks";
import { ThunkGetCategories } from "../Store/Categories/CategoriesSlice";
import { TCategory } from "../../../Types/DataType";
import { Link } from "react-router-dom";

const AllCategories: React.FC = () => {
  const dispatch = useAppDispatch();

  // Access Redux state
  const { categories, loading, error } = useAppSelector((state) => state.categories);
  console.log(categories);

  useEffect(() => {
    dispatch(ThunkGetCategories());
  }, [dispatch]);

  // Handle loading and error states
  if (loading === "loading") {
    return <div className="text-center mt-32">Loading categories...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-32">Error: {error}</div>;
  }

  return (
    <div>
      <section
        aria-labelledby="category-heading"
        className="bg-gray-50 mt-32 py-16 px-6 sm:py-24 sm:px-12 lg:px-16"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Heading */}
          <div className="flex justify-between items-center">
            <h2 id="category-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
              All Categories
            </h2>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories?.map((category: TCategory) => (
              <div className="relative group">
              <Link to={`http://localhost:3000/Product_Listing?categorie=${category.title}`}>
                <img
                  alt={category.alt}
                  src={category.image}
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
                        <span className="sr-only"></span>{category.title}
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Shop now
                    </p>
                  </div>
                </div>
                </Link>
              </div>

            ))}
          </div>

          {/* Browse All Categories Link for Smaller Screens */}
          <div className="mt-8 text-center lg:hidden">
            <a href="#" className="text-lg font-medium text-indigo-600 hover:text-indigo-700">
              Browse all categories<span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllCategories;
