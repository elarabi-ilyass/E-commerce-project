import { configureStore } from '@reduxjs/toolkit'
import  Products  from './Products/ProductsSlice'
import  Product  from './Product/ProductsSliceById'
const store = configureStore({
  reducer:{
    Product,
    Products
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch

export default store