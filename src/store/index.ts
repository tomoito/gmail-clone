import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';

const initialState = {
  id: 1,
  name: 'tomo',
  sendMessageIsOpen: false,
  selectMail: { id: '', title: '', subject: '', to: '' },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    openSendMessage(state) {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage(state) {
      state.sendMessageIsOpen = false;
    },
    selectMail(state, action: any) {
      state.selectMail = action.payload;
    },
  },
});

export const {
  updateUser,
  openSendMessage,
  closeSendMessage,
  selectMail,
} = userSlice.actions;

export const selectSendMessageIsOpen = (state: RootState) =>
  state.user.sendMessageIsOpen;

export const selectOpenMain = (state: RootState) => state.user.selectMail;
