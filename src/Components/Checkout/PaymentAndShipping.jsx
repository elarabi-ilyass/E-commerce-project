import React from 'react'

const PaymentAndShipping = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Payment and Shipping Details</h2>
      <form className="space-y-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-medium">Contact Information</h3>
          <label
            htmlFor="email-address"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            id="email-address"
            name="email-address"
            type="email"
            className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-400 text-gray-900 focus:outline-none focus:borer-rose-600"
            required
          />
        </div>

        {/* Payment Details */}
        <div>
          <h3 className="text-lg font-medium">Payment Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                id="card-number"
                name="card-number"
                type="text"
                autoComplete="cc-number"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-400 text-gray-900 focus:outline-none focus:borer-rose-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="expiration-date"
                className="block text-sm font-medium text-gray-700"
              >
                Expiration Date (MM/YY)
              </label>
              <input
                id="expiration-date"
                name="expiration-date"
                type="text"
                autoComplete="cc-exp"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-400 text-gray-900 focus:outline-none focus:borer-rose-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="cvc"
                className="block text-sm font-medium text-gray-700"
              >
                CVC
              </label>
              <input
                id="cvc"
                name="cvc"
                type="text"
                autoComplete="csc"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-400 text-gray-900 focus:outline-none focus:borer-rose-600"
                required
              />
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        <div>
          <h3 className="text-lg font-medium">Shipping Address</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="street-address"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-400 text-gray-900 focus:outline-none focus:borer-rose-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-400 text-gray-900 focus:outline-none focus:borer-rose-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700"
              >
                State / Province
              </label>
              <input
                id="region"
                name="region"
                type="text"
                autoComplete="address-level1"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-400 text-gray-900 focus:outline-none focus:borer-rose-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700"
              >
                Postal Code
              </label>
              <input
                id="postal-code"
                name="postal-code"
                type="text"
                autoComplete="postal-code"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-400 text-gray-900 focus:outline-none focus:borer-rose-600"
                required
              />
            </div>
          </div>
        </div>

        {/* Billing Information */}
        <div className="flex items-center">
          <input
            id="same-as-shipping"
            name="same-as-shipping"
            type="checkbox"
            className="h-4 w-4 p-2 text-indigo-600 border-indigo-400 rounded focus:ring-indigo-500"
            defaultChecked
          />
          <label
            htmlFor="same-as-shipping"
            className="ml-2 block text-sm text-gray-700"
          >
            Same as Shipping Information
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-400 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Pay Now
          </button>
        </div>
      </form>
    </section>
  );
};

export default PaymentAndShipping;