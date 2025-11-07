import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const selectStatistics = (state: RootState) => state.statistics;
export const selectSaleStatistics = (state: RootState) => state.saleStatistics;
export const selectUserChart = (state: RootState) => state.userChart;
export const selectUsers = (state: RootState) => state.users;
export const selectTransactions = (state: RootState) => state.transactions;
export const selectProducts = (state: RootState) => state.products;

export const selectTotalRevenue = createSelector(
  selectSaleStatistics,
  (saleStatistics) =>
    saleStatistics.find((item) => item.Title.toLowerCase() === "income")
      ?.Amount ?? 0
);

export const selectVisitors = createSelector(
  selectSaleStatistics,
  (saleStatistics) =>
    saleStatistics.find((item) => item.Title.toLowerCase() === "visitors")
      ?.Amount ?? 0
);

export const selectCompletedOrders = createSelector(
  selectSaleStatistics,
  (saleStatistics) =>
    saleStatistics.find(
      (item) => item.Title.toLowerCase() === "completed orders"
    )?.Amount ?? 0
);

export const selectPendingAlertCount = createSelector(
  selectTransactions,
  (transactions) =>
    transactions.filter((transaction) => transaction.status.type !== "success")
      .length
);

export const selectActiveUsersCount = createSelector(
  selectUsers,
  (users) => users.filter((user) => user.Status === "active").length
);
