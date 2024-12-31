import React from "react";
import ItemSection from "./ItemSection";
import OrderSummary from "./OrderSummary";

const ShoppingCart = () => {


  return (
    <main className="flex flex-col mt-12 gap-8 px-8 py-12">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <form className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items Section */}
          <ItemSection/>

        {/* Order Summary Section */}
        <OrderSummary/>
        
      </form>
    </main>
  );
};

export default ShoppingCart;
