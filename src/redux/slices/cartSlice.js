import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const findItem = state.items.find(item => item.id === payload.id);

      if (!findItem) {
        state.items.push({ ...payload, count: 1 });
      } else {
        findItem.count += 1;
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);

      state.totalCount = state.items.reduce((acc, item) => {
        return item.count + acc;
      }, 0);
    },
    decrementItem: (state, { payload }) => {
      const findItem = state.items.find(item => item.id === payload);

      if (findItem) {
        findItem.count -= 1;
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);

      state.totalCount = state.items.reduce((acc, item) => {
        return item.count + acc;
      }, 0);
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter(obj => obj.id !== payload);
    },
    clearItems: state => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, decrementItem } =
  cartSlice.actions;

export default cartSlice.reducer;
