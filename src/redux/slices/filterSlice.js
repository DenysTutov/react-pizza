import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryIdx: 0,
  sortType: {
    name: "популярности",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryIdx: (state, { payload }) => {
      state.categoryIdx = payload;
    },
    setSortType: (state, { payload }) => {
      state.sortType = payload;
    },
  },
});

export const { setCategoryIdx, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
