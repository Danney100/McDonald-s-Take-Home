import { createSlice } from "@reduxjs/toolkit";

type cartItem = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
};

type cartEntity = {
  cartItems: cartItem[];
  totalQuantity: number
};

const initialState: cartEntity = {
  cartItems: [],
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const { id } = action.payload;
      const existingProduct = state.cartItems.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart(state,action){
      const productId = action.payload;
      const productIndex = state.cartItems.findIndex(item => item.id === productId);
      if (productIndex !== -1) {
        state.cartItems.splice(productIndex, 1);
      }
    }
  },
});

export const { addItemToCart,removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
