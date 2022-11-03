import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      console.log(state.items);
      const findItem = state.items.find((item) => item.id === payload.id);

      if (!findItem) {
        state.items.push({ ...payload, count: 1 });
      } else {
        findItem.count += 1;
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter((obj) => obj.id !== payload.id);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
