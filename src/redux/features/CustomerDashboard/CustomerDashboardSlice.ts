import { createSlice } from "@reduxjs/toolkit";

type CustomerDashboardState = {
  dashboardCollapsed: boolean;
};

const initialState: CustomerDashboardState = {
  dashboardCollapsed: true,
};

const customerDashboardSlice = createSlice({
  name: "customerDashboard",
  initialState,
  reducers: {
    toggleDashboardCollapsed(state) {
      state.dashboardCollapsed = !state.dashboardCollapsed;
    },
  },
});

const customerReducer = customerDashboardSlice.reducer;

export const { toggleDashboardCollapsed } = customerDashboardSlice.actions;

export default customerReducer;
