import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { saleStatisticData } from "../../data/saleStatisticData";
import type { saleStatisticType } from "../../Types/saleStatisticsBox";

type UpdateSaleStatisticPayload = Partial<Omit<saleStatisticType, "id">> & {
  id: saleStatisticType["id"];
};

const saleStatisticSlice = createSlice({
  name: "saleStatistics",
  initialState: saleStatisticData,
  reducers: {
    addSaleStatistic(state, action: PayloadAction<saleStatisticType>) {
      state.push(action.payload);
    },
    removeSaleStatistic(state, action: PayloadAction<saleStatisticType["id"]>) {
      return state.filter((item) => item.id !== action.payload);
    },
    updateSaleStatistic(state, action: PayloadAction<UpdateSaleStatisticPayload>) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { addSaleStatistic, removeSaleStatistic, updateSaleStatistic } =
  saleStatisticSlice.actions;

export default saleStatisticSlice.reducer;
