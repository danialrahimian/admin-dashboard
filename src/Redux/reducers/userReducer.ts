import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { userDatas } from "../../data/userDatas";
import type { userType } from "../../Types/userTypes";

type UpdateUserPayload = Partial<Omit<userType, "id">> & {
  id: userType["id"];
};

const userSlice = createSlice({
  name: "users",
  initialState: userDatas,
  reducers: {
    addUser(state, action: PayloadAction<userType>) {
      state.push(action.payload);
    },
    removeUser(state, action: PayloadAction<userType["id"]>) {
      return state.filter((user) => user.id !== action.payload);
    },
    updateUser(state, action: PayloadAction<UpdateUserPayload>) {
      const index = state.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
