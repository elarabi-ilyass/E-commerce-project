import Header from '@componentsHome/Header';
import Category from '@componentsHome/Category';
import Cause from '@componentsHome/Cause';
import ProductList from '@componentsHome/ProductList';
import SaleSection from '@componentsHome/SaleSection';
import { useAppSelector, useAppDispatch } from "../Store/hooks";
import { useEffect } from 'react';
import { ThunkGetProducts } from '../Store/Products/ProductsSlice';
import React from 'react';

const Home:React.FC = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(state => state.Products);

  useEffect(() => {
    dispatch(ThunkGetProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Category />
      <Cause />
      {/* Add condition for empty records */}
      {records && records.length > 0 ? (
        <ProductList records={records} loading={loading} error={error} />
      ) : loading ? (
        <div>Loading products...</div> // Show loading message if still loading
      ) : error ? (
        <div className="text-red-500">Error: {error.message}</div> // Show error message
      ) : (
        <div>No products available</div> // Show a message when no products are available
      )}
      <SaleSection />
    </div>
  );
};

export default Home;
