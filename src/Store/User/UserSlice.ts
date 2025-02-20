import { createSlice } from '@reduxjs/toolkit';
import {ThunkInsertUser,ThunkGETUser} from './thunk/ThunkGetUser';
import {TUser} from '../../Types/DataType';
import {Tloading} from '../../Types/shared';

interface ITUser {
  users:TUser[],
  loading:Tloading,
  error: string | null;
}

const initialstate:ITUser ={
  users:[],
  loading: 'idle',
  error: null
}
export const UserSlice = createSlice({
  name: 'user',
  initialState: initialstate,
  extraReducers: (builder) => {
    // INSERT OPERATION
    builder.addCase(ThunkInsertUser.pending,(state)=>{
      state.loading = 'loading'
      state.error='pending';
    });
    builder.addCase(ThunkInsertUser.fulfilled,(state,action)=>{
      state.users.push(action.payload);
      state.loading = 'succeeded';
    });
    builder.addCase(ThunkInsertUser.rejected,(state)=>{
      state.loading = 'failed';
    });
    // GET OPERATION
    builder.addCase(ThunkGETUser.pending,(state)=>{
      state.loading = 'loading'
    });
    builder.addCase(ThunkGETUser.fulfilled,(state,action)=>{
      state.users=action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(ThunkGETUser.rejected,(state)=>{
      state.loading = 'failed';
    });
  }
})


export  {ThunkInsertUser,ThunkGETUser};
export default UserSlice.reducer;
