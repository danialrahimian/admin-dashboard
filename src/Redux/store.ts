import { configureStore, combineReducers } from "@reduxjs/toolkit";
import statisticReducer from "./reducers/statisticReducer";
import saleStatisticReducer from "./reducers/saleStatisticReducer";
import userChartReducer from "./reducers/userChartReducer";
import userReducer from "./reducers/userReducer";
import productsReducer from "./reducers/productsReducer";

const reducers = combineReducers({
  statisticReducer,
  saleStatisticReducer,
  userChartReducer,
  userReducer,
  productsReducer,
});
const store = configureStore({
  reducer: reducers,
});

export default store;
