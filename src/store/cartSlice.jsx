import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  cartItems: [],
  modalOpen: false
};

const cartSlice = createSlice({
  name: "carts",
  initialState: initialCart,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setModalOpen(state, action) {
      state.modalOpen = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, setModalOpen } = cartSlice.actions;
export default cartSlice.reducer;
