import { configureStore } from '@reduxjs/toolkit'
import  categories  from './Categories/CategoriesSlice'
const store = configureStore({
  reducer:{
    categories
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch

export default store