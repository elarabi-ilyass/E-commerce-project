import { createSlice } from '@reduxjs/toolkit'
import  ThunkGetCategories  from './thunk/ThunkGetCategories'
import { Tloading } from "../../../Types/shared";
import { TCategory } from "../../../Types/categories";



interface Icategories {
  records: TCategory[];
  loading: Tloading;
  error: string | null;
}

const initialState: Icategories = {
  records: [],
  loading: 'idle',
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ThunkGetCategories.pending, (state) => {
      state.loading = 'pending';
      state.error='pending';
    });
    builder.addCase(ThunkGetCategories.fulfilled, (state,action) => {
      state.records = action.payload;
      state.loading='succeeded'
    });
    builder.addCase(ThunkGetCategories.rejected, (state,action) => {
      state.loading = 'failed';
      if(action.payload && typeof action.payload === 'string'){
        state.error = action.payload
      }
    });
  }

});

export  {ThunkGetCategories};
export default categoriesSlice.reducer;