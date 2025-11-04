import { createSlice } from "@reduxjs/toolkit";
import { userDatas } from "../../data/userDatas";
const userReducer = createSlice({
  name: "userReducer",
  initialState: userDatas,
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

export default userReducer.reducer;
