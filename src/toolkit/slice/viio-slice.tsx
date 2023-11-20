import { createSlice } from "@reduxjs/toolkit";
import { initialStateViio } from "../../components/searchResults/types/searchResults.types";

/**
 * Initial state for the viio slice.
 */
const initialState: initialStateViio = {
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

/**
 * Viio slice.
 */
export const viioSlice = createSlice({
  name: "viio",
  initialState,
  reducers: {
    /**
     * Set the user.
     * @param state - The current state.
     * @param action - The action containing the payload.
     */
    setUser: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setUser } = viioSlice.actions;
