import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Authentication from './Pages/Authentication';
import Cart from './Pages/Cart';
import Error_Page from './Pages/Error_Page';
import Product_Details from './Pages/Product_Details';
import Product_Listing from './Pages/Product_Listing';
import User_Account from './Pages/User_Account';
import Wishlist from './Pages/Wishlist';
import Checkout from './Pages/Checkout';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Test from './Pages/Test';
import AllCategories from './Pages/AllCategories';
import {useState} from 'react';
import ProtectedRoute from './utils/utils';





function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element:(
          <ProtectedRoute isAuthenticated={isAuthenticated}>
             <Home />
           </ProtectedRoute>
          )  },
        { path: 'Authentication', element: <Authentication /> },
        { path: 'Cart', element: <Cart /> },
        { path: 'Product_Details/:id',element:(
          <ProtectedRoute isAuthenticated={isAuthenticated}>
           <Product_Details />
           </ProtectedRoute>
          ),},
        { path: 'Product_Listing', element:(
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Product_Listing />
           </ProtectedRoute>
          ) },
        { path: 'AllCategories', element:(
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AllCategories/>
          </ProtectedRoute>
          )  },
        { path: 'User_Account', element: <User_Account /> },
        { path: 'Wishlist', element: <Wishlist /> },
        { path: 'Checkout', element: <Checkout /> },
        { path: 'Login', element: <Login setIsAuthenticated={setIsAuthenticated} /> },
        { path: 'Register', element: <Register /> },
        { path: 'Test' , element: <Test /> },
        { path: '*', element: <Error_Page /> },
      ],
    },
  ];
  
  const router = createBrowserRouter(routes);
  return (
    <div className="min-h-screen bg-white">

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
