import { configureStore, combineReducers } from "@reduxjs/toolkit";
import statisticReducer from "./reducers/statisticReducer";
import saleStatisticReducer from "./reducers/saleStatisticReducer";
import userChartReducer from "./reducers/userChartReducer";
import userReducer from "./reducers/userReducer";
import productsReducer from "./reducers/productsReducer";
import transactionsReducer from "./reducers/transactionsReducer";

const rootReducer = combineReducers({
  statistics: statisticReducer,
  saleStatistics: saleStatisticReducer,
  userChart: userChartReducer,
  users: userReducer,
  products: productsReducer,
  transactions: transactionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
