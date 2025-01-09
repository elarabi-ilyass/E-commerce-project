import { createAsyncThunk } from '@reduxjs/toolkit';
import { TProduct } from "../../../Types/DataType";

const ThunkGetProductsById = createAsyncThunk<
  TProduct[],            // Expected return type
  string,                 // Argument type (id)
  { rejectValue: string } // Rejected value type
>(
  "ProductsSliceById/ThunkGetProductsById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:5000/Products/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: TProduct[] = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message || "Something went wrong");
      }
      return rejectWithValue("An unknown error occurred.");
    }
  }
);

export default ThunkGetProductsById;
