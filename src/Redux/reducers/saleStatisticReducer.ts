import { createSlice } from "@reduxjs/toolkit";
import { saleStatisticData } from "../../data/saleStatisticData";
const saleStatisticReducer = createSlice({
  name: "saleStatisticReducer",
  initialState: saleStatisticData,
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

export default saleStatisticReducer.reducer;
