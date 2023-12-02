import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});
