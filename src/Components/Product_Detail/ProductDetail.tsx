import React, { useState } from "react";
import { TProduct } from "../../../Types/categories";

interface IState {
  records: TProduct[];
}

const ProductDetail: React.FC<IState> = ({ records }) => {
  const [activeImage, setActiveImage] = useState<string>("");
  console.log(records)

  return (
    <div className="container mx-auto px-4 py-8 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {records.map((record) => (
          <React.Fragment key={record.id}>
            {/* Images Section */}
            <div>
              {/* Active Image */}
              <div className="mb-6">
                <img
                  src={activeImage || record.image || "/fallback-image.jpg"} // Fallback if image is undefined
                  alt="Active product view"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Thumbnail Images */}
              {record.imagePosition &&
                Object.keys(record.imagePosition).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveImage(record.imagePosition[key])}
                    className={`border rounded-lg overflow-hidden focus:ring-2 focus:ring-indigo-500 ${
                      activeImage === record.imagePosition[key] ? "ring-2 ring-indigo-500" : ""
                    }`}
                  >
                    <img
                      src={record.imagePosition[key]}
                      alt={`Thumbnail for ${key}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
            </div>

            {/* Product Info Section */}
            <div>
              <h1 className="text-2xl mt-16 font-bold mb-4">{record.title}</h1>
              <p className="text-lg font-semibold text-gray-700 mb-4">
                {record.price}
              </p>
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-2">Description</h2>
                <p className="text-gray-600">{record.alt}</p>
              </div>

              <form>
                {/* Colors */}
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">Color</h3>
                  <div className="flex space-x-2">
                    <button
                      className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      aria-label="Black color"
                    ></button>
                    <button
                      className="w-8 h-8 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      aria-label="White color"
                    ></button>
                    <button
                      className="w-8 h-8 bg-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      aria-label="Gray color"
                    ></button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Add to Bag
                  </button>
                  <button
                    type="button"
                    className="text-indigo-600 py-2 px-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Add to Favorites
                  </button>
                </div>
              </form>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;