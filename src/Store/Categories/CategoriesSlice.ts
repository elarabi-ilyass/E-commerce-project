import { createSlice } from '@reduxjs/toolkit'

interface ICategory {
  id: number;
  title: string;
  product: string;
  image: string;
}

interface Icategories {
  records: ICategory[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
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
  reducers: {}

});

export default categoriesSlice.reducer;