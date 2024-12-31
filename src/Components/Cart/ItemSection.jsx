import React from 'react'

const ItemSection = () => {
  const items = [
    {
      id: 1,
      name: "Basic Tee",
      color: "Sienna",
      size: "Large",
      price: 32.0,
      quantity: 1,
      stockStatus: "In stock",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
    },
    {
      id: 2,
      name: "Basic Tee",
      color: "Black",
      size: "Large",
      price: 32.0,
      quantity: 1,
      stockStatus: "Ships in 3–4 weeks",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
    },
    {
      id: 3,
      name: "Nomad Tumbler",
      color: "White",
      price: 35.0,
      quantity: 1,
      stockStatus: "In stock",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
    },
  ];
  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-2">
    <h2 id="cart-heading" className="sr-only">
      Items in your shopping cart
    </h2>
    <ul role="list" className="divide-y divide-gray-200">
      {items.map((item) => (
        <li key={item.id} className="flex py-6">
          <div className="w-24 h-24 flex-shrink-0">
            <img
              src={item.image}
              alt={`Front of ${item.name} in ${item.color}.`}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="ml-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                <a href="#" className="hover:text-indigo-600">
                  {item.name}
                </a>
              </h3>
              {item.color && <p className="text-gray-500">{item.color}</p>}
              {item.size && <p className="text-gray-500">Size: {item.size}</p>}
              <p className="text-gray-900 mt-2">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <select
                  id={`quantity-${item.id}`}
                  name={`quantity-${item.id}`}
                  className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  {[...Array(10).keys()].map((n) => (
                    <option key={n} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
            <p className="text-green-500 mt-2">{item.stockStatus}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
  )
}

export default ItemSection