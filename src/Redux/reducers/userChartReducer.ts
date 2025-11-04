import { createSlice } from "@reduxjs/toolkit";
import { userChartData } from "../../data/userChartData";
const userChartDataReducer = createSlice({
  name: "userChartDataReducer",
  initialState: userChartData,
  reducers: {
    addActiveUsers(state, action) {
      state.ActiveUsers.push(action.payload);
    },
    addNewUers(state, action) {
      state.NewUers.push(action.payload);
    },
  },
});

export default userChartDataReducer.reducer;
