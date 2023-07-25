import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialProduct = {
  productItems: [],
};

const productSlice = createSlice({
  name: "products",
  initialState: initialProduct,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productItems = action.payload;
    });
  },
});

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export { fetchProducts };
export default productSlice.reducer;
