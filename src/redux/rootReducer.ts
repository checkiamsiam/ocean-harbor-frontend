import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import {customerReducer} from "./features/customerDashboard/customerDashboardSlice";
import {adminReducer} from "./features/adminDashboard/adminDashboard";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  customerDashboard: customerReducer,
  adminDashboard: adminReducer,
});
