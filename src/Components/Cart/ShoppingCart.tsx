// import React from "react";
// import ItemSection from "./ItemSection";
// import React, { useState } from "react";
// //  import OrderSummary from "./OrderSummary";

// const ShoppingCart = () => {
//  const [Subtotal ,setUseSubtotal]=useState();
//  const [Tax ,setUseTax]=useState();
//  const [Shipping,setUseShipping]=useState();
//  const [Order_Total,setUseOrder_Total]=useState();

//   return (
//     <main className="flex flex-col mt-12 gap-8 px-8 py-12">
//       <h1 className="text-3xl font-bold">Shopping Cart</h1>
//       <form className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//         {/* Cart Items Section */}
//           <ItemSection Subtotal={Subtotal} setUseSubtotal={setUseSubtotal}  />

//         {/* Order Summary Section */}
//         <section
//             aria-labelledby="summary-heading"
//             className="bg-gray-100 p-6 rounded-lg shadow-lg"
//           >
//             <h2 id="summary-heading" className="text-lg font-medium">
//               Order summary
//             </h2>
//             <dl className="mt-6 space-y-4">
//               <div className="flex items-center justify-between">
//                 <dt className="text-sm">Subtotal</dt>
//                 <dd className="text-sm font-medium">$99.00</dd>
//               </div>
//               <div className="flex items-center justify-between">
//                 <dt className="text-sm">Shipping estimate</dt>
//                 <dd className="text-sm font-medium">$5.00</dd>
//               </div>
//               <div className="flex items-center justify-between">
//                 <dt className="text-sm">Tax estimate</dt>
//                 <dd className="text-sm font-medium">$8.32</dd>
//               </div>
//               <div className="flex items-center justify-between border-t border-gray-200 pt-4">
//                 <dt className="text-base font-medium">Order total</dt>
//                 <dd className="text-base font-medium">$112.32</dd>
//               </div>
//             </dl>
//             <button
//               type="submit"
//               className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Checkout
//             </button>
//           </section>
        
//       </form>
//     </main>
//   );
// };

// export default ShoppingCart;
