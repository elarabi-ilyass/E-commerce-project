import { createAsyncThunk } from '@reduxjs/toolkit';
import { TProduct } from "../../../Types/DataType";



const ThunkGetProducts = createAsyncThunk<TProduct[], void, { rejectValue: string }>(
  "ProductsSlice/ThunkGetProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch('http://localhost:5000/Products');

      // Check if the response is OK (status code 200–299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse and type the JSON response
      const data: TProduct[] = await response.json();
      return data;
    } catch (error: unknown) {
      // Ensure `error` is properly typed
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred.");
    }
  }
);

export default ThunkGetProducts;
