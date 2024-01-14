import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import { adminReducer } from "./features/adminDashboard/adminDashboard";
import customerReducer from "./features/dashboard/dashboardSlice";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  customerDashboard: customerReducer,
  adminDashboard: adminReducer,
});
