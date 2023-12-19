import { createSlice } from "@reduxjs/toolkit";

type AdminDashboardState = {
  dashboardCollapsed: boolean;
};

const initialState: AdminDashboardState = {
  dashboardCollapsed: true,
};

const adminDashboardSlice = createSlice({
  name: "adminDashboard",
  initialState,
  reducers: {
    toggleAdminDashboardCollapsed(state) {
      state.dashboardCollapsed = !state.dashboardCollapsed;
    },
  },
});

const adminReducer = adminDashboardSlice.reducer;

export const { toggleAdminDashboardCollapsed } = adminDashboardSlice.actions;

export default adminReducer;
