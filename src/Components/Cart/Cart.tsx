import { createSlice, configureStore } from "@reduxjs/toolkit";

interface cartState {
  products: {
    id: number;
    img: string;
    title: string;
    price: string;
    quantity: number;
  }[];
}

const initialState: cartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const products = state.products;
      products.push(action.payload);
      products.forEach((product) => {
        const index = products.indexOf(product);
        for (let i = index + 1; i <= products.length - 1; i++) {
          if (product.id === products[i].id) {
            product.quantity = product.quantity + products[i].quantity;
            products.splice(i, 1);
          }
        }
      });
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
