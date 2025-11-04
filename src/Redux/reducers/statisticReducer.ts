import { createSlice } from "@reduxjs/toolkit";
import { statistics } from "../../data/statistics";
const statisticReducer = createSlice({
  name: "statisticReducer",
  initialState: statistics,
  reducers: {
    addStatistics(state, action) {
      state.push(action.payload);
    },
    removeStatistics(state, action) {
      state = state.filter((state) => state.id !== action.payload.id);
    },
    editStatisticsDescribtion(state, action) {
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

export default statisticReducer.reducer;
