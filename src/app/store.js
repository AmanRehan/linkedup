import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'react';
// import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
