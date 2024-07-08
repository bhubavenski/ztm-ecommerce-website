import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DocumentData } from 'firebase/firestore';

export type TCategoryState = {
  categoriesArr: DocumentData[] | [];
};

const INITIAL_STATE: TCategoryState = {
  categoriesArr: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    setCategories(
      state: TCategoryState,
      action: PayloadAction<DocumentData[]>
    ) {
      state.categoriesArr = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
