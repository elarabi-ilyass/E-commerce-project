import { createSlice } from '@reduxjs/toolkit';
import ThunkGetProductsById from './thunk/ThunkGetProductsById';
import { Tloading } from "../../../Types/shared";
import { TProduct } from "../../../Types/DataType";

export type Tloading = 'idle' | 'pending' | 'succeeded' | 'failed';

interface IProducts {
  record: TProduct[];
  loading: Tloading;
  error: string | null;
}

const initialState: IProducts = {
  record: [],
  loading: 'idle',
  error: null,
};

const ProductsSliceById = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ThunkGetProductsById.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
        state.record = []; // Optional: Clear old data
      })
      .addCase(ThunkGetProductsById.fulfilled, (state, action) => {
        state.record = action.payload;
        state.loading = 'succeeded';
      })
      .addCase(ThunkGetProductsById.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload || "Failed to fetch products";
      });
  },
});

export { ThunkGetProductsById };
export default ProductsSliceById.reducer;
