import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { productsData } from "../../data/productsData";
import type { productType } from "../../Types/productsType";

type UpdateProductPayload = Partial<Omit<productType, "id">> & {
  id: productType["id"];
};

const productsSlice = createSlice({
  name: "products",
  initialState: productsData,
  reducers: {
    addProduct(state, action: PayloadAction<productType>) {
      state.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<productType["id"]>) {
      return state.filter((product) => product.id !== action.payload);
    },
    updateProduct(state, action: PayloadAction<UpdateProductPayload>) {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
