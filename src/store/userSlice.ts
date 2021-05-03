import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './rootReducer';

const initialState = {
  user: null,
};

export const userSlice2 = createSlice({
  name: 'user2',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice2.actions;

export const selectUser = (state: RootState) => state.user2.user;
