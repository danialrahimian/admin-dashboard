import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { statistics } from "../../data/statistics";
import type { statistic } from "../../Types/statisticType";

type UpdateStatisticPayload = Partial<Omit<statistic, "id">> & {
  id: statistic["id"];
};

const statisticSlice = createSlice({
  name: "statistics",
  initialState: statistics,
  reducers: {
    addStatistic(state, action: PayloadAction<statistic>) {
      state.push(action.payload);
    },
    removeStatistic(state, action: PayloadAction<statistic["id"]>) {
      return state.filter((item) => item.id !== action.payload);
    },
    updateStatistic(state, action: PayloadAction<UpdateStatisticPayload>) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { addStatistic, removeStatistic, updateStatistic } =
  statisticSlice.actions;

export default statisticSlice.reducer;
