import { createAsyncThunk } from '@reduxjs/toolkit'

type TCategory= {
  id: number;
  title: string;
  product: string;
  image: string;
}

const ThunkGetCategories =createAsyncThunk("categoriesSlice/ThunkGetCategories", async (_,thunkAPI)=>{
  const {rejectWithValue,fulfillWithValue}=thunkAPI;
  try {
    const response = await fetch<TCategory>('http://localhost:5000/category')
    const data= await response.json();
    return fulfillWithValue(data);
  }
  catch (error) {
    return rejectWithValue(error.message);
  }

})



export default ThunkGetCategories ;