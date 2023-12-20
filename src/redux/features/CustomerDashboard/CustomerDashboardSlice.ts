import { createSlice } from "@reduxjs/toolkit";

type CustomerDashboardState = {
  dashboardCollapsed: boolean;
  orderItemDrawerOpen: boolean;
  currentOrderId: string;
};

const initialState: CustomerDashboardState = {
  dashboardCollapsed: true,
  orderItemDrawerOpen: false,
  currentOrderId: "",
};

const customerDashboardSlice = createSlice({
  name: "customerDashboard",
  initialState,
  reducers: {
    toggleDashboardCollapsed(state) {
      state.dashboardCollapsed = !state.dashboardCollapsed;
    },
    toggleOrderItemDrawer(state) {
      state.orderItemDrawerOpen = !state.orderItemDrawerOpen;
    },
    setCurrentOrderId(state, action) {
      state.currentOrderId = action.payload;
    },
  },
});

const customerReducer = customerDashboardSlice.reducer;

export default customerReducer;

export const { toggleDashboardCollapsed, toggleOrderItemDrawer, setCurrentOrderId } = customerDashboardSlice.actions;

