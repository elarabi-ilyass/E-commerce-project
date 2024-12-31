import React from 'react'

const OrderSummary = () => {
  return (
  <section
    aria-labelledby="summary-heading"
    className="bg-gray-100 p-6 rounded-lg shadow-lg"
  >
    <h2 id="summary-heading" className="text-lg font-medium">
      Order summary
    </h2>
    <dl className="mt-6 space-y-4">
      <div className="flex items-center justify-between">
        <dt className="text-sm">Subtotal</dt>
        <dd className="text-sm font-medium">$99.00</dd>
      </div>
      <div className="flex items-center justify-between">
        <dt className="text-sm">Shipping estimate</dt>
        <dd className="text-sm font-medium">$5.00</dd>
      </div>
      <div className="flex items-center justify-between">
        <dt className="text-sm">Tax estimate</dt>
        <dd className="text-sm font-medium">$8.32</dd>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <dt className="text-base font-medium">Order total</dt>
        <dd className="text-base font-medium">$112.32</dd>
      </div>
    </dl>
    <button
      type="submit"
      className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Checkout
    </button>
  </section>
  )
}

export default OrderSummary