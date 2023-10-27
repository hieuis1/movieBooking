import { configureStore } from "@reduxjs/toolkit";
import chairReducer from "./slice/chairSlice";
export const store = configureStore({
  reducer: {
    chair: chairReducer,
  },
});
