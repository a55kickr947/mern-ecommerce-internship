import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "../features/alert/alertSlice";

const store = configureStore({
  reducer: {
    alert: alertReducer,
  },
});

export default store;
