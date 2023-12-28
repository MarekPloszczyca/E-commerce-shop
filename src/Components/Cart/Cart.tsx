import { createSlice, configureStore } from "@reduxjs/toolkit";

interface cartState {
  products: { id: number; img: string; title: string; price: string }[];
}

const initialState: cartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.products.push(action.payload);
    },
    decremented: (state) => {
      state.products.push();
    },
  },
});

export const { add, decremented } = cartSlice.actions;
export const store = configureStore({
  reducer: cartSlice.reducer,
});
