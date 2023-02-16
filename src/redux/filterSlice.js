import { createSlice } from '@reduxjs/toolkit';
// import { statusFilter } from './constants';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    setStatusFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
