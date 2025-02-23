import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../assets/Screenshot.png';

interface NavProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const Nav: React.FC<NavProps> = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false"); // ✅ Correct logout
    localStorage.removeItem("user"); // ✅ Remove user info
    navigate("/login?message=You must log in first.", { replace: true });
  };

  return (
    <nav className="fixed top-0 bg-neutral-100 left-0 right-0 z-50 h-20 flex items-center justify-between p-4">
      <div className="w-full m-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img title="nopCommerce" alt="nopCommerce" src="https://www.nopcommerce.com/Themes/OfficialSite/Content/images/logo.svg"/>
          </Link>

          {/* Navigation Links */}
          <div className="mr-96 lg:flex space-x-8">
            <button className="text-gray-700 hover:text-gray-900">Women</button>
            <button className="text-gray-700 hover:text-gray-900">Men</button>
            <a href="#" className="text-gray-700 hover:text-gray-900">Company</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Stores</a>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="text-gray-700 border-s-2 pl-6 hover:text-gray-900">
                Logout
              </button>
            ) : (
              <Link to="/Register" className="text-gray-700 hover:text-gray-900">Register</Link>
            )}
            <Link to="/login" className="text-gray-700 border-s-2 pl-6 hover:text-gray-900">Login</Link>
          </div>
            <div >
                   {/* Cart */}
            <Link
              to="/Cart"
              className="relative flex items-center text-gray-700 hover:text-gray-900"
                 >
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="h-6 w-6"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                     />
                   </svg>
                   <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-600 text-white text-xs font-medium leading-tight text-center">
                     0
                   </span>
                 </Link>        
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
