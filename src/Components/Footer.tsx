import React from "react";

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-100 py-16 shadow-sm  ">
      <div className="max-w-7xl  mx-auto   px-6 lg:px-8">
        <div className="grid grid-cols-1  gap-8 lg:grid-cols-3">
          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Shop</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Bags
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Tees
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Objects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Home Goods
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Who we are
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Account</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Manage Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Returns & Exchanges
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Redeem a Gift Card
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Connect</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Sign up for our newsletter
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              The latest deals and savings, sent to your inbox weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs"
              />
              <button
                type="submit"
                className="mt-3 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">
            Copyright © 2025 Ilyass, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
