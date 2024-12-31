import React, { useState } from "react";
import   ImagesSide  from "./ImagesSide";
import  InfoSide from "./InfoSide";

    const ProductDetail = () => {
    
      return (
        <div className="container mx-auto px-4 py-8 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Images Section */}
             <ImagesSide/>
    
            {/* Product Info Section */}
             <InfoSide/>

          </div>
        </div>
      );
    };
    

export default ProductDetail