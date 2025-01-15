import { createSlice } from "@reduxjs/toolkit";
import ThunkGetCategories from "./thunk/ThunkGetCategories";
import { TCategory } from "../../../Types/DataType";
import { Tloading } from "../../../Types/shared";

interface ICategoriesState {
  categories: TCategory[];
  loading: Tloading;
  error: string | null;
  prevIndex: number;
}

const initialState: ICategoriesState = {
  categories: [],
  loading: "idle",
  error: null,
  prevIndex: 0,
};

const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    nextSlide(state) {
      state.prevIndex = (state.prevIndex + 1) % state.categories.length; // Loop to the next slide
    },
    prevSlide(state) {
      state.prevIndex =
        (state.prevIndex - 1 + state.categories.length) % state.categories.length; // Loop to the previous slide
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ThunkGetCategories.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(ThunkGetCategories.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.categories = action.payload;
        state.prevIndex = 0; // Reset index when new data is fetched
      })
      .addCase(ThunkGetCategories.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload || "Unknown error";
      });
  },
});

export const { nextSlide, prevSlide } = CategoriesSlice.actions;
export { ThunkGetCategories };
export default CategoriesSlice.reducer;
