import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  type: string;
  price: number;
  link: string;
}

export interface ProductState {
  value: Product[];
}

const initialState: ProductState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.value.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
