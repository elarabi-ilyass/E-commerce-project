import { createSlice } from '@reduxjs/toolkit'
import  ThunkGetProducts  from './thunk/ThunkGetProducts'
import { Tloading } from "../../../Types/shared";
import { TProduct } from "../../../Types/DataType";



interface IProducts {
  records: TProduct[];
  loading: Tloading;
  error: string | null;
}

const initialState: IProducts = {
  records: [],
  loading: 'idle',
  error: null,
};

const ProductsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ThunkGetProducts.pending, (state) => {
      state.loading = 'pending';
      state.error='pending';
    });
    builder.addCase(ThunkGetProducts.fulfilled, (state,action) => {
      state.records = action.payload;
      state.loading='succeeded'
    });
    builder.addCase(ThunkGetProducts.rejected, (state,action) => {
      state.loading = 'failed';
      if(action.payload && typeof action.payload === 'string'){
        state.error = action.payload
      }
    });
  }

});

export  {ThunkGetProducts};
export default ProductsSlice.reducer;