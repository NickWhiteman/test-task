import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { STORE_NAME } from './const';
import { IShowcaseState } from './types';

const initialState: IShowcaseState = {
  data: [],
  cardForDeleted: undefined,
  isLoading: false,
  isDelete: false,
  isOpenModal: false,
};

export const ShowcaseStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {

  },
});

export const ShowcaseActions = {
  ...ShowcaseStore.actions,
};

export const ShowcaseReducer = ShowcaseStore.reducer;
