import React from 'react'
import Header from '@componentsProduct_Listing/Header';
import FilterSection from '@componentsProduct_Listing/FilterSection';
import Products from '@componentsProduct_Listing/Products';


const Product_Listing = () => {
  return (
    <div className='bg-gray-50'>
      <Header/>
      <FilterSection/>
      <Products/>
    </div>
  )
}

export default Product_Listing
