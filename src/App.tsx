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

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Authentication', element: <Authentication /> },
      { path: 'Cart', element: <Cart /> },
      { path: 'Product_Details/:id',element: <Product_Details />,},
      { path: 'Product_Listing', element: <Product_Listing /> },
      { path: 'User_Account', element: <User_Account /> },
      { path: 'Wishlist', element: <Wishlist /> },
      { path: 'Checkout', element: <Checkout /> },
      { path: 'Login', element: <Login /> },
      { path: 'Register', element: <Register /> },
      { path: '*', element: <Error_Page /> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
