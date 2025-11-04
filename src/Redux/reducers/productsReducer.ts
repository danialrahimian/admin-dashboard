import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../data/productsData";
const productsReducer = createSlice({
  name: "productsReducer",
  initialState: productsData,
  reducers: {
    addSaleStatistics(state, action) {
      state.push(action.payload);
    },
    removeSaleStatistics(state, action) {
      state = state.filter((state) => state.id !== action.payload.id);
    },
    editSaleStatisticsDescribtion(state, action) {
      state.map((state) => {
        if (state.id === action.payload.id) {
          return {
            ...state,
            description: action.payload.description,
          };
        }
      });
    },
  },
});

export default productsReducer.reducer;
