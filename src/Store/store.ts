import { configureStore } from '@reduxjs/toolkit'
import  Products  from './Products/ProductsSlice'
import  Product  from './Product/ProductsSliceById'
import  categories  from './Categories/CategoriesSlice'
import  users from './User/UserSlice'

const store = configureStore({
  reducer:{
    Product,
    Products,
    categories,
    users
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch

export default store