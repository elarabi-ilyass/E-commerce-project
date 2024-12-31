import React from 'react'

const InfoSide = () => {
  return (
    <div>
        <h1 className="text-2xl mt-16 font-bold mb-4">Zip Tote Basket</h1>
          <p className="text-lg font-semibold text-gray-700 mb-4">$140</p>
            <div className="mb-6">
                <h2 className="text-lg font-medium mb-2">Description</h2>
                <p className="text-gray-600">
                  The Zip Tote Basket is the perfect midpoint between shopping tote
                  and comfy backpack. With convertible straps, you can hand carry,
                  should sling, or backpack this convenient and spacious bag.
                </p>
              </div>
    
              <form>
                {/* Colors */}
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
  )
}

export default InfoSide