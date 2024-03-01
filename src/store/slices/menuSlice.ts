import { Burger } from "@/types/menuItems";
import { createSlice } from "@reduxjs/toolkit";

type menuEntity = {
  productDetailData: Burger;
};

const initialState: menuEntity = {
  productDetailData: {
    id: "",
    name: "",
    price: 0,
    image: "",
    description: "",
    calorie: 0,
    slug: "",
  },
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setProductDetail(state, action) {
      state.productDetailData = action.payload
    },
  },
});

export const { setProductDetail } = menuSlice.actions;

export default menuSlice.reducer;
