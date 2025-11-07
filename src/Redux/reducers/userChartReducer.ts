import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { userChartData } from "../../data/userChartData";
import type { userChartType } from "../../Types/userChartTypes";

type UpdateChartPointPayload = {
  month: string;
  activeUsers?: number;
  newUsers?: number;
};

const userChartSlice = createSlice({
  name: "userChart",
  initialState: userChartData,
  reducers: {
    addMonth(state, action: PayloadAction<string>) {
      state.Mounth.push(action.payload);
    },
    addActiveUser(state, action: PayloadAction<number>) {
      state.ActiveUsers.push(action.payload);
    },
    addNewUser(state, action: PayloadAction<number>) {
      state.NewUers.push(action.payload);
    },
    updateChartPoint(state, action: PayloadAction<UpdateChartPointPayload>) {
      const { month, activeUsers, newUsers } = action.payload;
      const index = state.Mounth.findIndex(
        (item) => item.toLowerCase() === month.toLowerCase()
      );

      if (index === -1) {
        return;
      }

      if (typeof activeUsers === "number") {
        state.ActiveUsers[index] = activeUsers;
      }
      if (typeof newUsers === "number") {
        state.NewUers[index] = newUsers;
      }
    },
    replaceChart(state, action: PayloadAction<userChartType>) {
      state.Mounth = [...action.payload.Mounth];
      state.ActiveUsers = [...action.payload.ActiveUsers];
      state.NewUers = [...action.payload.NewUers];
    },
  },
});

export const {
  addMonth,
  addActiveUser,
  addNewUser,
  updateChartPoint,
  replaceChart,
} = userChartSlice.actions;

export default userChartSlice.reducer;
