import React, { useState } from "react";
import OrderSummary from "./OrderSummary";

const ItemSection = () => { // Default empty array
  const [cartItems, setCartItems] = useState(
    ()=>{
      const localCard=localStorage.getItem("AddToCart");
      if(localCard){
        return JSON.parse(localCard);
      }
      else{
        return [];
        }
     }
  ); // Ensure cartItems is an array

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: newQuantity, Total: item.price * newQuantity }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // ✅ Fix: Ensure reduce() works even if cartItems is empty
  const total = cartItems.length > 0 
    ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) 
    : 0;

  return (
    <main className="flex flex-col mt-12 gap-8 px-8 py-12">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <form className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <section className="lg:col-span-2 bg-gray-100 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shopping Cart</h2>
          <ul className="divide-y divide-gray-300">
            {cartItems.map((item) => (
              <li key={item.id} className="flex flex-col md:flex-row py-6 gap-6">
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    {item?.type?.color && <p className="text-gray-600">Color: {item?.type?.color}</p>}
                    {item?.type?.size && <p className="text-gray-600">Size: {item?.type?.size}</p>}
                    <p className="text-gray-800 font-medium mt-2">${item.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity Selector & Total Price */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <label htmlFor={`quantity-${item.id}`} className="mr-2 text-gray-600">
                        Qty:
                      </label>
                      <select
                        id={`quantity-${item.id}`}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        {[...Array(10).keys()].map((n) => (
                          <option key={n + 1} value={n + 1}>
                            {n + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Remove Button & Stock Status */}
                  <div className="flex items-center justify-between mt-4">
                    <p className={`text-sm ${item.stockStatus.includes("stock") ? "text-green-600" : "text-orange-600"}`}>
                      {item.stockStatus}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <OrderSummary total={total} />
      </form>
    </main>
  );
};

export default ItemSection;
