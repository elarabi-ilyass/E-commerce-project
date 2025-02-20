import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const storedAuth = localStorage.getItem("isAuthenticated");
  if (storedAuth) {
    return children;
  } else {
    return <Navigate to="/login?message=you must log in first." replace />;
  }
};

export default ProtectedRoute;
