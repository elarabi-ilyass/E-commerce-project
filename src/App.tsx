import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Authentication from "./Pages/Authentication";
import Cart from "./Pages/Cart";
import Error_Page from "./Pages/Error_Page";
import Product_Details from "./Pages/Product_Details";
import Product_Listing from "./Pages/Product_Listing";
import User_Account from "./Pages/User_Account";
import Wishlist from "./Pages/Wishlist";
import Checkout from "./Pages/Checkout";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Test from "./Pages/Test";
import Users from "./Pages/Users";
import AllCategories from "./Pages/AllCategories";
import { useState } from "react";
import ProtectedRoute from "./utils/utils"; // ✅ Ensure this is correct


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  console.log(isAuthenticated);

  const [cartOrders, setCartOrders]=useState(()=>{
    const localCard=localStorage.getItem("AddToCart");
    if(localCard){
      return JSON.parse(localCard);
    }
    else{
      return [];
      }
   }
  );
  console.log(cartOrders);

  const routes = [
    {
      path: "/",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Layout setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          ),
        },
        { path: "Authentication", element: <Authentication /> },
        { path: "Cart", element: <Cart cartOrders={cartOrders} /> },
        {
          path: "Product_Details/:id",
          element: (
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Product_Details cartOrders={cartOrders} setCartOrders={setCartOrders} />
            </ProtectedRoute>
          ),
        },
        {
          path: "Product_Listing",
          element: (
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Product_Listing />
            </ProtectedRoute>
          ),
        },
        {
          path: "AllCategories",
          element: (
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AllCategories />
            </ProtectedRoute>
          ),
        },
        { path: "User_Account", element: <User_Account /> },
        { path: "Wishlist", element: <Wishlist /> },
        { path: "Checkout", element: <Checkout /> },
        { path: "Login", element: <Login setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} /> },
        { path: "Register", element: <Register /> },
        { path: "Test", element: <Test /> },
        { path: "Users", element: <Users /> },
        { path: "*", element: <Error_Page /> },
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
