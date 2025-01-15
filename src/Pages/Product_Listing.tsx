import React, { useEffect } from "react";
import  Header  from "@componentsProduct_Listing/Header";
import FilterSection from "@componentsProduct_Listing/FilterSection";
import Product from "@componentsProduct_Listing/Product";
import { useAppSelector, useAppDispatch } from "../Store/hooks";
import { ThunkGetProducts,resetProducts } from "../Store/Products/ProductsSlice";
import { useSearchParams } from "react-router-dom";

const Product_Listing: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  // Access Redux state
  const { records, loading, error } = useAppSelector((state) => state.Products);

  console.log(records, loading, error);
  useEffect(() => {
    dispatch(ThunkGetProducts());
    dispatch(resetProducts());
  }, [dispatch]);

  // Handle loading state
  if (loading === "loading") {
    return <div className="text-center mt-32">Loading...</div>;
  }

  // Handle error state
 

  // Extract filter parameters from searchParams
  const filterParams = {
    categorie: searchParams.get("categorie"),
    brand: searchParams.get("brand"),
    color: searchParams.get("color"),
    size: searchParams.get("size"),
  };

  // Filter products based on filterParams
  const filteredProducts = records?.filter((product) => {
    const { categorie, brand, color, size } = filterParams;
    return (
      (!categorie || product?.type?.categorie === categorie) &&
      (!brand || product?.type?.brand === brand) &&
      (!color || product?.type?.color === color) &&
      (!size || product?.type?.size === size)
    );
  }) || [];

  // Update search parameters
  const getNewSearchParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);

    if (!value) {
      newParams.delete(key); // Remove the key if no value is provided
    } else {
      newParams.set(key, value); // Update or add the key-value pair
    }

    setSearchParams(newParams);
  };

  return (
    <div className="bg-gray-50">
      <Header />
      <FilterSection getNewSearchParams={getNewSearchParams} />
      <Product products={filteredProducts} />
    </div>
  );
};

export default Product_Listing;
