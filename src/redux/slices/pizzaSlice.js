import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async (userId, thunkAPI) => {}
);

const initialState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {},
  },
  extraReducers: {
    [fetchPizzas.fulfilled]: (state, action) => {
      state.entities.push(action.payload);
    },
  },
});

export const { addItem } = pizzaSlice.actions;

export default pizzaSlice.reducer;
