import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { transactionsData } from "../../data/transactionsData";
import type { lastTransactions } from "../../Types/lastTransactions";

type UpdateTransactionPayload = {
  id: lastTransactions["id"];
} & Partial<Omit<lastTransactions, "id">>;

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: transactionsData,
  reducers: {
    addTransaction(state, action: PayloadAction<lastTransactions>) {
      state.push(action.payload);
    },
    removeTransaction(state, action: PayloadAction<lastTransactions["id"]>) {
      return state.filter((transaction) => transaction.id !== action.payload);
    },
    updateTransaction(state, action: PayloadAction<UpdateTransactionPayload>) {
      const index = state.findIndex(
        (transaction) => transaction.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      }
    },
  },
});

export const { addTransaction, removeTransaction, updateTransaction } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
