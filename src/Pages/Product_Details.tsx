import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../Store/hooks";
import { ThunkGetProductsById } from "../Store/Product/ProductsSliceById";

const ProductDetails: React.FC = ({cartOrders, setCartOrders}) => {
  // Extract product ID from the URL parameters
  const { id } = useParams<{ id: string | undefined }>();
  const dispatch = useAppDispatch();

  // Manage active image state
  const [activeImage, setActiveImage] = useState<string>("");

  // Select product data from the Redux store
  const { record, loading, error } = useAppSelector((state) => state.Product);

  useEffect(() => {
    // Fetch product details if an ID is available
    localStorage.setItem('AddToCart', JSON.stringify(cartOrders));
    if (id) {
      dispatch(ThunkGetProductsById(id));
    }
  }, [dispatch, id,cartOrders]);

  // Handle loading state
  if (loading === "loading") {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error loading product details. Please try again later.</div>;
  }

  // Ensure `record` is available before rendering
  if (!record) {
    return <div>Product not found.</div>;
  }

  const AddToCart = (e, record) => {
    e.preventDefault();

    // Check if the item already exists in the cart
    const existingItem = cartOrders.find((item) => item.id === record.id);

    if (existingItem) {
      // Update quantity if item already exists
      setCartOrders((prevOrders) =>
        prevOrders.map((item) =>
          item.id === record.id
            ? { ...item, quantity: item.quantity + 1, Total: item.price * (item.quantity + 1) }
            : item
        )
      );
    } else {
      // Add new item to the cart
      setCartOrders([...cartOrders, { ...record, quantity: 1, Total: record.price }]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-4">
      {/* Flex container for images and form */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image Section */}
        <div className="flex-1 mt-20">
          {/* Main Product Image */}
          <div className="mb-12 w-9/12">
            <img
              src={activeImage || record.image}
              alt="Active product view"
              className="w-full  rounded-lg shadow-lg"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex mb-32 gap-4">
            {record.imagePosition &&
              Object.keys(record.imagePosition).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveImage(record.imagePosition[key])}
                  className={`border rounded-lg overflow-hidden ${
                    activeImage === record.imagePosition[key]
                      ? "ring-2 ring-indigo-500"
                      : ""
                  }`}
                >
                  <img
                    src={record.imagePosition[key]}
                    alt={`Thumbnail for ${key}`}
                    className="w-24 h-24 object-cover"
                  />
                </button>
              ))}
          </div>
        </div>

        {/* Product Info and Form Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{record.title}</h1>
          <p className="text-lg font-semibold text-gray-700 mb-4">
            ${record.price}
          </p>
          <p className="text-gray-600 mb-6">{record.alt}</p>

          {/* Product Options */}
          <form>
            {/* Color Options */}
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Color</h3>
              <div className="flex space-x-2">
                <button
                  className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Washed Black"
                ></button>
                <button
                  className="w-8 h-8 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="White"
                ></button>
                <button
                  className="w-8 h-8 bg-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Washed Gray"
                ></button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                type="submit"
                onClick={(e)=>AddToCart(e,record)}
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
      </div>
    </div>
  );
};

export default ProductDetails;
