import { createSlice } from "@reduxjs/toolkit";
import ThunkGetCategories from "./thunk/ThunkGetCategories";
import { TCategory } from "../../../Types/DataType";
import { Tloading } from "../../../Types/shared";

interface ICategoriesState {
  records: TCategory[];
  loading: Tloading;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ThunkGetCategories.pending, (state) => {
        state.loading = "pending";
        state.error = null;
        
      })
      .addCase(ThunkGetCategories.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.records = action.payload;
      })
      .addCase(ThunkGetCategories.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload || "Unknown error";
      });
  },
});

export {ThunkGetCategories};
export default CategoriesSlice.reducer;
