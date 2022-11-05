import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryIdx: 0,
  sortType: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryIdx: (state, { payload }) => {
      state.categoryIdx = payload;
    },
    setSortType: (state, { payload }) => {
      state.sortType = payload;
    },
    setFilters: (state, { payload }) => {
      state.categoryIdx = Number(payload.categoryIdx);
      state.sortType = payload.sortType;
    },
  },
});

export const { setCategoryIdx, setSortType, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
