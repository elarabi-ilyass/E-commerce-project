import React from 'react'
import ItemSection from "@componentsCart/ItemSection";

const Cart = ({cartItems}) => {
  return (
    <div>
      <ItemSection cartItems={cartItems}/>
    </div>
  )
}

export default Cart
