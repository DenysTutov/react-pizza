import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6354da35da523ceadcf4f9d8.mockapi.io';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async params => {
    const { category, sort, search } = params;

    const { data } = await axios.get(`/items?${category}${sort}${search}`);
    return data;
  }
);

const initialState = {
  items: [],
  status: '',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addItems: (state, { payload }) => {
      state.items = payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: state => {
      state.status = 'pending';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: state => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { addItem } = pizzaSlice.actions;

export default pizzaSlice.reducer;
