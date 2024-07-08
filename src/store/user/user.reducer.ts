import { User } from 'firebase/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TUserState = {
  currentUser: User | null;
};

const INITIAL_STATE: TUserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state: TUserState, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
