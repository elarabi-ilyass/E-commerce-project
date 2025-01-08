import { createSlice } from '@reduxjs/toolkit';
import ThunkGetProducts from './thunk/ThunkGetProducts';
import { Tloading } from "../../../Types/shared";
import { TProduct } from "../../../Types/categories";

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

const ProductsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ThunkGetProducts.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
        state.record = []; // Optional: Clear old data
      })
      .addCase(ThunkGetProducts.fulfilled, (state, action) => {
        state.record = action.payload;
        state.loading = 'succeeded';
      })
      .addCase(ThunkGetProducts.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload || "Failed to fetch products";
      });
  },
});

export { ThunkGetProducts };
export default ProductsSlice.reducer;
