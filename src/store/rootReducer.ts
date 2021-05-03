import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './index';
import { userSlice2 } from './userSlice';
const rootReducer = combineReducers({
  user: userSlice.reducer,
  user2: userSlice2.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
