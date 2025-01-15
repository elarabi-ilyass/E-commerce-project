import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../Store/hooks";
import { nextSlide, prevSlide, ThunkGetCategories } from "../../Store/Categories/CategoriesSlice";



 const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  // Access Redux state
  const { categories, loading, error, prevIndex } = useAppSelector((state) => state.categories);
  console.log(categories, loading, error)

  useEffect(() => {
    dispatch(ThunkGetCategories());

    const interval = setInterval(() => {
      dispatch(nextSlide()); // Auto-slide every 4 seconds
    }, 4000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [dispatch]);

  if (loading === "pending") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (categories.length === 0) {
    return <div>No categories available</div>;
  }

  const currentCategory = categories[prevIndex]; // Current category based on index

  return (
    <section className="relative w-full py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
      {currentCategory ? (
        <div className="relative h-full w-full mx-auto">
          {/* Category Image */}
          <img
            alt={currentCategory.alt}
            src={currentCategory.image}
            className="h-full w-full sm:h-96 lg:h-[500px] rounded-md shadow-md object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40 rounded-md">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {currentCategory.title}
            </h1>
            <p className="mt-4 text-lg text-gray-300 rounded-md shadow-md">
              Thoughtfully designed objects for the workspace, home, and travel.
            </p>
           
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-8">
          No category found
        </div>
      )}
    </section>
  );
};
export default Header;