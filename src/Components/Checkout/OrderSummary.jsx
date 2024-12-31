import React from "react";

const OrderSummary = () => {
  const products = [
    {
      id: 1,
      name: "High Wall Tote",
      description: "White and black, 15L",
      price: "$210.00",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/checkout-page-07-product-01.jpg",
    },
    {
      id: 2,
      name: "Halfsize Tote",
      description: "Clay, 11L",
      price: "$330.00",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/checkout-page-07-product-02.jpg",
    },
    {
      id: 3,
      name: "Wrap Clutch",
      description: "Light gray, 0.3L",
      price: "$30.00",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/checkout-page-07-product-03.jpg",
    },
  ];

  return (
    <section className="space-y-6 p-20 bg-indigo-400">
      <h2 className="text-2xl font-semibold">Order Summary</h2>
      <dl className="space-y-4">
        <dt className="text-gray-800">Amount Due</dt>
        <dd className="text-lg font-bold text-gray-900">$642.60</dd>
      </dl>
      <ul className="space-y-6">
        {products.map((product) => (
          <li key={product.id} className="flex items-center space-x-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-900">{product.description}</p>
            </div>
            <p className="text-lg font-bold">{product.price}</p>
          </li>
        ))}
      </ul>
      <dl className="border-t border-gray-200 pt-4 space-y-2">
        <div className="flex justify-between">
          <dt>Subtotal</dt>
          <dd>$570.00</dd>
        </div>
        <div className="flex justify-between">
          <dt>Shipping</dt>
          <dd>$25.00</dd>
        </div>
        <div className="flex justify-between">
          <dt>Taxes</dt>
          <dd>$47.60</dd>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <dt>Total</dt>
          <dd>$642.60</dd>
        </div>
      </dl>
    </section>
  );
};

export default OrderSummary ;