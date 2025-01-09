import { configureStore } from '@reduxjs/toolkit'
import  Products  from './Products/ProductsSlice'
import  Product  from './Product/ProductsSliceById'
import  categories  from './Categories/CategoriesSlice'
const store = configureStore({
  reducer:{
    Product,
    Products,
    categories
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch

export default store