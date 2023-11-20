import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../components/searchResults/types/searchResults.types";

const initialState: initialState = {
  product: {
    id: 0,
    title: "",
    price: 0,
    quantity: 0,
    total: 0,
    discountPercentage: 0,
    discountedPrice: 0,
    thumbnail: "",
  },
};

export const viioSlice = createSlice({
  name: "viio",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = viioSlice.actions;
