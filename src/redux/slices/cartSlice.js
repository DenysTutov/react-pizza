import { createSlice } from '@reduxjs/toolkit';

import { totalPriceCalc, totalCountCalc } from 'utils';

const initialState = {
  items: [],
  countById: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const findItem = state.items.find(
        item =>
          item.id === payload.id &&
          item.size === payload.size &&
          item.type === payload.type
      );

      const findItemById = state.items.find(item => item.id === payload.id);

      if (!findItem) {
        state.items.push({ ...payload, count: 1 });
      } else {
        findItem.count += 1;
      }

      if (!findItemById) {
        state.countById[payload.id] = 1;
      } else {
        state.countById[payload.id] += 1;
      }

      state.totalPrice = totalPriceCalc(state.items);

      state.totalCount = totalCountCalc(state.items);
    },
    decrementItem: (state, { payload }) => {
      const findItem = state.items.find(
        item =>
          item.id === payload.id &&
          item.size === payload.size &&
          item.type === payload.type
      );

      if (findItem) {
        findItem.count -= 1;
        state.countById[payload.id] -= 1;
      }

      state.totalPrice = totalPriceCalc(state.items);

      state.totalCount = totalCountCalc(state.items);
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter(obj => obj.id !== payload);

      state.totalPrice = totalPriceCalc(state.items);

      state.totalCount = totalCountCalc(state.items);
    },
    clearItems: state => {
      state.items = [];
      state.countById = {};
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const selectorCart = state => state.cart;

export const { addItem, removeItem, clearItems, decrementItem } =
  cartSlice.actions;

export default cartSlice.reducer;
