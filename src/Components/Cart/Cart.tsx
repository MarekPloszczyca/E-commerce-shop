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
      products.map((product) => {
        const index = products.indexOf(product);
        for (let i = index + 1; i <= products.length - 1; i++) {
          if (product.id === products[i].id) {
            if (product.quantity < 99) {
              product.quantity = product.quantity + products[i].quantity;
            }

            products.splice(i, 1);
          }
        }
      });
    },
    remove: (state, action) => {
      const products = state.products;
      for (const product of products) {
        if (product.id === action.payload) {
          if (product.quantity === 1) {
            return;
          }
          product.quantity--;
        }
      }
    },
    deleteHandler: (state, action) => {
      const products = state.products;
      for (const product of products) {
        if (product.id === action.payload) {
          products.splice(products.indexOf(product), 1);
        }
      }
    },
    resetHandler: (state) => {
      const products = state.products;
      for (const product of products) {
        products.splice(products.indexOf(product), 1);
        console.log(products)
      }
    },
  },
});

export const { add, remove, deleteHandler, resetHandler } = cartSlice.actions;
export const store = configureStore({
  reducer: cartSlice.reducer,
});
