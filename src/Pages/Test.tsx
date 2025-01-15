import  { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../Store/hooks";
import { ThunkGetCategories } from "../Store/Categories/CategoriesSlice";


const Test = () => {
  const dispatch = useAppDispatch();

  // Access Redux state
  const { categories, prevIndex } = useAppSelector((state) => state.categories);
  console.log(categories)
  console.log(prevIndex)

  useEffect(() => {
    dispatch(ThunkGetCategories());
  }, [dispatch]);

  return (
          {/* Overlay Content */}
        //   <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40 rounded-md">
        //   <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        //     {currentCategory.title}
        //   </h1>
        //   <p className="mt-4 text-lg text-gray-300">
        //     Thoughtfully designed objects for the workspace, home, and travel.
        //   </p>
  
        //   {/* Navigation Buttons */}
        //   <div className="flex gap-4 mt-8">
        //     <button
        //       onClick={() => dispatch(prevSlide())}
        //       className="px-4 py-2 bg-white text-black font-medium rounded-md shadow-md hover:bg-gray-100"
        //     >
        //       &#10094; {/* Left Arrow */}
        //     </button>
        //     <button
        //       onClick={() => dispatch(nextSlide())}
        //       className="px-4 py-2 bg-white text-black font-medium rounded-md shadow-md hover:bg-gray-100"
        //     >
        //       &#10095; {/* Right Arrow */}
        //     </button>
        //   </div>
        // </div>
  )
}

export default Test