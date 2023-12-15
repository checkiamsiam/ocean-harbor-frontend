import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import customerReducer from "./features/CustomerDashboard/CustomerDashboardSlice";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  customerDashboard: customerReducer,
});
