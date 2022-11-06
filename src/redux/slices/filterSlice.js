import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
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
    setSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    },
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

export const selectorFilter = state => state.filter;

export const { setCategoryIdx, setSortType, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
