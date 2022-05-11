import {  createSlice } from '@reduxjs/toolkit';
import reducers, { extraReducers } from "./userReducer";

const initialState = {
  user: null,
  //status: 'idle',
  status: 'idle',
  moreInitialProp: { name: "Aman Rehan", college: "Lovely Professional University" }
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  
  reducers,
  extraReducers,

  // The `extraReducers` field lets the slice handle actions defined elsewhere,

});

export const selectUser = (state) => state.user;

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;