import { createAsyncThunk } from '@reduxjs/toolkit';
import { TUser } from "../../../Types/DataType";

// ✅ Corrected Type Definitions and Error Handling
export const ThunkInsertUser = createAsyncThunk<TUser, TUser, { rejectValue: string }>(
  'UserSlice/ThunkInsertUser',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data: TUser = await response.json();
      return data;
    } catch (error: unknown) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error occurred');
    }
  }
);

//Get method
export const ThunkGETUser = createAsyncThunk<TUser[], void, { rejectValue: string }>(
  'UserSlice/ThunkGETUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:5000/users');

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data: TUser[] = await response.json();
      return data;
    } catch (error: unknown) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error occurred');
    }
  }
);
